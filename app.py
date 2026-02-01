
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import pandas as pd
from difflib import SequenceMatcher

app = Flask(__name__)
CORS(app)

# Load your dataset
df = pd.read_csv('nepali_dishes_dataset.csv')
print(f"✅ Loaded {len(df)} Nepali foods!")

def similar(a, b):
    return SequenceMatcher(None, a.lower(), b.lower()).ratio()

def rule_based_match(query):
    query = query.strip().lower()
    for _, row in df.iterrows():
        if query == row['roman_name'].lower():
            return row['roman_name'], 100
    return None, 0

def tfidf_match(query):
    query = query.lower()
    best_match = None
    best_score = 0
    
    for _, row in df.iterrows():
        score = similar(query, row['roman_name'].lower()) * 100
        if score > best_score:
            best_score = score
            best_match = row['roman_name']
    
    if best_score > 50:
        return best_match, best_score
    return None, 0

def ensemble_match(query):
    rule_result, rule_score = rule_based_match(query)
    tfidf_result, tfidf_score = tfidf_match(query)
    
    if rule_score > 90:
        return rule_result, rule_score
    elif tfidf_score > 70:
        return tfidf_result, tfidf_score
    return None, 0

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/evaluate')
def evaluate_page():
    return send_from_directory('.', 'evaluation.html')

@app.route('/api/search', methods=['POST'])
def search():
    try:
        data = request.get_json()
        query = data.get('query', '').strip()
        
        if not query:
            return jsonify({'error': 'Empty query'}), 400
        
        print(f"🔍 Searching for: {query}")
        
        # Run all models
        rule_result, rule_score = rule_based_match(query)
        tfidf_result, tfidf_score = tfidf_match(query)
        ensemble_result, ensemble_score = ensemble_match(query)
        
        # Get food data
        food_data = None
        best_match = ensemble_result or tfidf_result or rule_result
        
        if best_match:
            food_row = df[df['roman_name'] == best_match]
            if not food_row.empty:
                food_data = food_row.iloc[0].to_dict()
                print(f"Found: {best_match}")
        
        response = {
            'query': query,
            'models': {
                'rule_based': {
                    'result': rule_result or 'Not found',
                    'confidence': f'{int(rule_score)}%',
                    'score': rule_score
                },
                'tfidf': {
                    'result': tfidf_result or 'Not found',
                    'confidence': f'{int(tfidf_score)}%',
                    'score': tfidf_score
                },
                'ensemble': {
                    'result': ensemble_result or 'Not found',
                    'confidence': f'{int(ensemble_score)}%',
                    'score': ensemble_score
                }
            },
            'food_data': food_data
        }
        
        return jsonify(response)
        
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/foods', methods=['GET'])
def get_foods():
    foods = df[['roman_name', 'nepali_name']].to_dict('records')
    return jsonify({'foods': foods})

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    print("\n" + "="*50)
    print("NEPALI CUISINE INTERPRETER BACKEND")
    print("="*50)
    print(f"Dataset: {len(df)} foods loaded")
    print("Server: http://localhost:5000")
    print("Ready! Open your browser to the URL above")
    print("="*50 + "\n")
    app.run(debug=True, port=5000)

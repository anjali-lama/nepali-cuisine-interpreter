from flask import Flask, request, jsonify
from flask_cors import CORS
from difflib import get_close_matches

app = Flask(__name__)
CORS(app)

# Sample Nepali dishes database
DISHES = {
    "momo": "Steamed dumplings filled with meat or vegetables",
    "dal bhat": "Traditional Nepali meal of lentils and rice",
    "sel roti": "Traditional Nepali rice donut",
    "gundruk": "Fermented leafy green vegetable dish",
    "chatamari": "Nepali rice crepe or pizza"
}

def rule_based_match(query):
    matches = get_close_matches(query, DISHES.keys(), n=1, cutoff=0.8)
    if matches:
        return matches[0], 95
    return None, 0

def tfidf_match(query):
    matches = get_close_matches(query, DISHES.keys(), n=1, cutoff=0.5)
    if matches:
        score = int(70 + (len(matches[0]) / len(query)) * 30)
        return matches[0], min(score, 90)
    return None, 0

def compute_accuracy(result, score):
    return score if result is not None else 0

@app.route("/api/search", methods=["POST"])
def search():
    data = request.json
    query = data.get("query", "").lower().strip()

    rule_result, rule_score = rule_based_match(query)
    tfidf_result, tfidf_score = tfidf_match(query)

    # Ensemble logic
    if rule_result:
        ensemble_result = rule_result
        ensemble_score = rule_score
    elif tfidf_result:
        ensemble_result = tfidf_result
        ensemble_score = tfidf_score
    else:
        ensemble_result = None
        ensemble_score = 0

    response = {
        "models": {
            "rule_based": {
                "result": rule_result or "Not found",
                "confidence": rule_score,
                "accuracy": compute_accuracy(rule_result, rule_score)
            },
            "tfidf": {
                "result": tfidf_result or "Not found",
                "confidence": tfidf_score,
                "accuracy": compute_accuracy(tfidf_result, tfidf_score)
            },
            "ensemble": {
                "result": ensemble_result or "Not found",
                "confidence": ensemble_score,
                "accuracy": compute_accuracy(ensemble_result, ensemble_score)
            }
        }
    }

    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)

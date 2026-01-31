const nepaliFoods = {
    "momo": {
        nepaliName: "म:म:",
        englishName: "Momo",
        description: "Juicy steamed dumplings stuffed with spiced meat or veggies, served with fiery chutney",
        phonetic: "MOH-moh",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "30-45 mins",
        image: "assets/images/momo.jpg"
    },
    "dal bhat": {
        nepaliName: "दाल भात",
        englishName: "Dal Bhat",
        description: "Daily comfort meal of rice, lentil soup, vegetables & pickle",
        phonetic: "daal baat",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/daal_bhat.jpg"
    },
    "sel roti": {
        nepaliName: "सेल रोटी",
        englishName: "Sel Roti",
        description: "Crispy-sweet rice-flour rings, deep-fried for festivals",
        phonetic: "sel-RO-tee",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "24+ hours",
        image: "assets/images/sel_roti.jpg"
    },
    "thukpa": {
        nepaliName: "थुक्पा",
        englishName: "Thukpa",
        description: "Hearty noodle soup with vegetables or meat, Himalayan comfort food",
        phonetic: "THOOK-pa",
        category: "Soup",
        vegetarian: "Optional",
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-40 mins",
        image: "assets/images/thukpa.jpg"
    },
    "choila": {
        nepaliName: "च्वेला",
        englishName: "Choila",
        description: "Spicy grilled buffalo meat marinated with mustard oil and spices",
        phonetic: "CHOY-la",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "45-60 mins",
        image: "assets/images/choila.jpg"
    }
};

// String similarity algorithm
function similarityScore(str1, str2) {
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();
    
    if (s1 === s2) return 100;
    if (s1.includes(s2) || s2.includes(s1)) return 85;
    
    const len1 = s1.length, len2 = s2.length;
    const matrix = [];
    
    for (let i = 0; i <= len2; i++) matrix[i] = [i];
    for (let j = 0; j <= len1; j++) matrix[0][j] = j;
    
    for (let i = 1; i <= len2; i++) {
        for (let j = 1; j <= len1; j++) {
            const cost = s2[i-1] === s1[j-1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i-1][j] + 1,
                matrix[i][j-1] + 1,
                matrix[i-1][j-1] + cost
            );
        }
    }
    
    const distance = matrix[len2][len1];
    const maxLen = Math.max(len1, len2);
    return Math.round(((maxLen - distance) / maxLen) * 100);
}

// Rule-Based Model
function ruleBasedModel(query) {
    const q = query.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, food] of Object.entries(nepaliFoods)) {
        const score = similarityScore(q, key);
        if (score > bestScore) {
            bestScore = score;
            bestMatch = food;
        }
    }
    
    // Threshold: needs at least 70% for rule-based
    if (bestScore >= 70) {
        return { food: bestMatch, accuracy: bestScore, found: true };
    }
    return { food: null, accuracy: 0, found: false };
}

// TF-IDF Model (Simulated)
function tfidfModel(query) {
    const q = query.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, food] of Object.entries(nepaliFoods)) {
        let score = similarityScore(q, key);
        
        // Bonus for word overlap in description
        const queryWords = q.split(' ');
        const descWords = food.description.toLowerCase().split(' ');
        let overlap = 0;
        
        queryWords.forEach(word => {
            if (word.length > 2 && descWords.some(dw => dw.includes(word))) {
                overlap += 10;
            }
        });
        
        score = Math.min(score + overlap, 98);
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = food;
        }
    }
    
    // TF-IDF is more lenient but accurate (threshold 60%)
    if (bestScore >= 60) {
        return { food: bestMatch, accuracy: bestScore, found: true };
    }
    return { food: null, accuracy: 0, found: false };
}

// Ensemble Model
function ensembleModel(ruleResult, tfidfResult) {
    if (!ruleResult.found && !tfidfResult.found) {
        return { food: null, accuracy: 0, found: false };
    }
    
    // Both agree
    if (ruleResult.found && tfidfResult.found && 
        ruleResult.food.englishName === tfidfResult.food.englishName) {
        const avg = Math.round((ruleResult.accuracy + tfidfResult.accuracy) / 2);
        return { food: ruleResult.food, accuracy: Math.min(avg + 5, 100), found: true };
    }
    
    // Only one found - weight by reliability
    if (ruleResult.found && !tfidfResult.found) {
        return { food: ruleResult.food, accuracy: Math.round(ruleResult.accuracy * 0.8), found: true };
    }
    
    if (!ruleResult.found && tfidfResult.found) {
        return { food: tfidfResult.food, accuracy: Math.round(tfidfResult.accuracy * 0.85), found: true };
    }
    
    // Disagreement - trust TF-IDF more for fuzzy matching
    return { food: tfidfResult.food, accuracy: Math.round(tfidfResult.accuracy * 0.9), found: true };
}

function updateModelDisplay(modelId, result) {
    const card = document.getElementById(modelId + 'Card');
    const badge = document.getElementById(modelId + 'AccuracyBadge');
    const resultDiv = document.getElementById(modelId + 'Result');
    
    // Reset classes
    card.classList.remove('not-found');
    badge.className = 'accuracy-badge';
    resultDiv.className = 'match-result';
    
    // Set accuracy number in the badge (THE ONLY PLACE IT SHOWS)
    badge.textContent = result.accuracy + '% Accuracy';
    
    if (!result.found || result.accuracy === 0) {
        // NOT FOUND STATE
        card.classList.add('not-found');
        badge.classList.add('accuracy-zero');
        resultDiv.innerHTML = 'Result: <span>❌ Not Found</span>';
        resultDiv.classList.add('not-found');
    } else {
        // FOUND STATE - color code by accuracy
        if (result.accuracy >= 80) {
            badge.classList.add('accuracy-high');
        } else if (result.accuracy >= 50) {
            badge.classList.add('accuracy-medium');
        } else {
            badge.classList.add('accuracy-low');
        }
        
        resultDiv.innerHTML = `Result: <span>${result.food.englishName}</span>`;
        resultDiv.classList.add('found');
    }
}

async function searchFood() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (!query) {
        alert('Please enter a food name!');
        return;
    }
    
    document.getElementById('loading').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';
    
    setTimeout(() => {
        // Run all models
        const ruleResult = ruleBasedModel(query);
        const tfidfResult = tfidfModel(query);
        const ensembleResult = ensembleModel(ruleResult, tfidfResult);
        
        // Update displays
        updateModelDisplay('rule', ruleResult);
        updateModelDisplay('tfidf', tfidfResult);
        updateModelDisplay('ensemble', ensembleResult);
        
        // Update main display
        const header = document.getElementById('resultHeader');
        const notFoundBanner = document.getElementById('notFoundBanner');
        
        if (!ensembleResult.found) {
            header.classList.add('not-found');
            document.getElementById('foodName').textContent = query;
            document.getElementById('nepaliName').textContent = 'Unknown Dish';
            notFoundBanner.style.display = 'block';
            
            document.getElementById('descriptionText').textContent = 
                `"${query}" was not found in our Nepali cuisine database. The AI models detected this as a non-Nepali dish with 0% accuracy across all algorithms.`;
            
            document.getElementById('categoryText').textContent = 'N/A';
            document.getElementById('vegetarianText').textContent = 'N/A';
            document.getElementById('spiceText').textContent = 'N/A';
            document.getElementById('prepTime').textContent = 'N/A';
            document.getElementById('foodImage').src = '';
            
        } else {
            const food = ensembleResult.food;
            header.classList.remove('not-found');
            notFoundBanner.style.display = 'none';
            
            document.getElementById('foodName').textContent = food.englishName;
            document.getElementById('nepaliName').textContent = food.nepaliName;
            document.getElementById('descriptionText').textContent = food.description;
            document.getElementById('categoryText').textContent = food.category;
            document.getElementById('vegetarianText').textContent = 
                food.vegetarian === true ? "✅ Yes" : (food.vegetarian === false ? "❌ No" : "⚪ Optional");
            document.getElementById('spiceText').textContent = food.spiceLevel;
            document.getElementById('prepTime').textContent = food.prepTime;
            document.getElementById('foodImage').src = food.image;
        }
        
        document.getElementById('loading').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
    }, 600);
}

function quickSearch(term) {
    document.getElementById('searchInput').value = term;
    searchFood();
}

// Enter key support
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchFood();
});
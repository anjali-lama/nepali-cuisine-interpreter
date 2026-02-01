// script.js - Nepali Cuisine Interpreter

// Sample data for demo
const nepaliFoods = {
    "momo": {
        nepaliName: "म:म:",
        englishName: "Momo",
        description: "Juicy, hand-pleated dumplings steamed to perfection, featuring savory fillings of spiced ground meat or seasonal vegetables.",
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
        description: "The quintessential, hearty meal of Nepal, enjoyed daily with steamed rice, lentil soup, vegetable curries, and pickles.",
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
        description: "A traditional, ring-shaped sweet bread made from fermented rice flour batter, deep-fried until golden-brown.",
        phonetic: "sel-RO-tee",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "24+ hours",
        image: "assets/images/sel_roti.jpg"
    },
    "gundruk": {
        nepaliName: "गुन्द्रुक",
        englishName: "Gundruk",
        description: "Unique and tangy fermented leafy green vegetable with a distinctive sour, umami flavor used in soups and stir-fries.",
        phonetic: "goon-drook",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "15-20 mins",
        image: "assets/images/gundruk.jpg"
    },
    "thukpa": {
        nepaliName: "थुक्पा",
        englishName: "Thukpa",
        description: "Nourishing noodle soup of Tibetan origin with hand-pulled noodles, meat/vegetables, and warming spices.",
        phonetic: "thook-pah",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "40-50 mins",
        image: "assets/images/thukpa.jpg"
    },
    "dhido": {
        nepaliName: "ढिँडो",
        englishName: "Dhido",
        description: "Traditional thick porridge-like staple made from buckwheat or millet flour, eaten by hand with curries.",
        phonetic: "dhin-doh",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/dhido.jpg"
    },
    "sukuti": {
        nepaliName: "सुकुटी",
        englishName: "Sukuti",
        description: "Traditional Nepalese meat jerky made from thinly sliced goat, buffalo, or beef, marinated and smoke-dried.",
        phonetic: "soo-koo-tee",
        category: "Snack",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "7+ days",
        image: "assets/images/sukuti.jpg"
    },
    "aloo tama": {
        nepaliName: "आलु तामा",
        englishName: "Aloo Tama",
        description: "Classic curry combining potatoes with fermented bamboo shoots for a distinctive sour and earthy flavor.",
        phonetic: "ah-loo tah-mah",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "35-45 mins",
        image: "assets/images/aloo_tama.jpg"
    },
    "chatamari": {
        nepaliName: "चतामरी",
        englishName: "Chatamari",
        description: "Savory rice flour crepe or pancake topped with minced meat, eggs, and vegetables, called 'Nepali Pizza'.",
        phonetic: "cha-tah-mree",
        category: "Snack",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "25-35 mins",
        image: "assets/images/chatamari.jpg"
    },
    "yomari": {
        nepaliName: "योमरी",
        englishName: "Yomari",
        description: "Festive cone-shaped steamed dumpling made from rice flour dough with sweet molasses and sesame filling.",
        phonetic: "yo-mah-ree",
        category: "Dessert",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "1-2 hours",
        image: "assets/images/yomari.jpg"
    },
    "kheer": {
        nepaliName: "खीर",
        englishName: "Kheer",
        description: "Luxurious slow-cooked rice pudding with basmati rice, milk, cardamom, saffron, nuts and raisins.",
        phonetic: "kheer",
        category: "Dessert",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "45-60 mins",
        image: "assets/images/kheer.jpg"
    },
    "makai roti": {
        nepaliName: "मकै को रोटी",
        englishName: "Makai Roti",
        description: "Wholesome unleavened flatbread made from stone-ground cornmeal with sweet, nutty flavor.",
        phonetic: "ma-kai ro-tee",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "20-30 mins",
        image: "assets/images/makai_roti.jpg"
    },
    "sekuwa": {
        nepaliName: "सेकुवा",
        englishName: "Sekuwa",
        description: "Succulent cubes of meat marinated in mountain herbs and spices, skewered and grilled over charcoal.",
        phonetic: "say-koo-wah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "30-40 mins",
        image: "assets/images/sekuwa.jpg"
    },
    "sadheko": {
        nepaliName: "सँधेको",
        englishName: "Sadheko",
        description: "Versatile salad style where ingredients are tossed with vibrant dressing of mustard oil, lemon, and spices.",
        phonetic: "sahn-deh-ko",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "15-20 mins",
        image: "assets/images/sadheko.jpg"
    },
    "poleko aalu": {
        nepaliName: "पोलेको आलु",
        englishName: "Poleko Aalu",
        description: "Fire-roasted potatoes buried in hot embers until charred, then smashed with salt, chili and cilantro.",
        phonetic: "po-leh-ko ah-loo",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-40 mins",
        image: "assets/images/poleko_aalu.jpg"
    },
    "saag": {
        nepaliName: "साग",
        englishName: "Saag",
        description: "Simple but essential dish of sautéed leafy greens like mustard greens or spinach with garlic and spices.",
        phonetic: "sahg",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "15-25 mins",
        image: "assets/images/saag.jpg"
    },
    "choila": {
        nepaliName: "चोइला",
        englishName: "Choila",
        description: "Spicy grilled meat salad with mustard oil, roasted chili paste, timur pepper, garlic, and spices.",
        phonetic: "choi-lah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️🌶️ Very High",
        prepTime: "25-35 mins",
        image: "assets/images/choila.jpg"
    },
    "thakali set": {
        nepaliName: "थकाली खाना सेट",
        englishName: "Thakali Set",
        description: "Complete balanced thali with steamed rice, dal, curry, greens, pickles, curd, and spicy condiment.",
        phonetic: "thah-kah-lee",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "1+ hour",
        image: "assets/images/thakali_set.jpg"
    },
    "newari khaja set": {
        nepaliName: "न्यूँरी खाजा सेट",
        englishName: "Newari Khaja Set",
        description: "Grand ceremonial platter featuring assortment of dishes including beaten rice, meat preparations, and pickles.",
        phonetic: "new-ah-ree khah-jah",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "2+ hours",
        image: "assets/images/newari_khaja_set.jpg"
    },
    "chicken choila": {
        nepaliName: "चिकेन चोइला",
        englishName: "Chicken Choila",
        description: "Poultry adaptation of classic choila with charcoal-grilled chicken in spicy mustard oil dressing.",
        phonetic: "chi-ken choi-lah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "25-35 mins",
        image: "assets/images/chicken_choila.jpg"
    },
    "buff choila": {
        nepaliName: "भुसी चोइला",
        englishName: "Buff Choila",
        description: "Authentic original version of choila made with water buffalo meat and timur pepper for numbing citrus kick.",
        phonetic: "bhoo-see choi-lah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️🌶️ Very High",
        prepTime: "25-35 mins",
        image: "assets/images/buff_choila.jpg"
    },
    "aloo bodi tama": {
        nepaliName: "आलु बोडी तामा",
        englishName: "Aloo Bodi Tama",
        description: "Triple threat curry combining potatoes, black-eyed peas, and fermented bamboo shoots in spiced gravy.",
        phonetic: "ah-loo boh-dee tah-mah",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "40-50 mins",
        image: "assets/images/aloo_bodi_tama.jpg"
    },
    "chicken sekuwa": {
        nepaliName: "चिकेन सेकुवा",
        englishName: "Chicken Sekuwa",
        description: "Tender chicken cubes marinated in yogurt and mountain spices, grilled over charcoal.",
        phonetic: "chi-ken say-koo-wah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "30-40 mins",
        image: "assets/images/chicken_sekuwa.jpg"
    },
    "buff sekuwa": {
        nepaliName: "भुसी सेकुवा",
        englishName: "Buff Sekuwa",
        description: "Hearty buffalo meat cubes marinated with robust spices and ghee, charcoal-grilled.",
        phonetic: "bhoo-see say-koo-wah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "35-45 mins",
        image: "assets/images/buff_sekuwa.jpg"
    },
    "mutton sekuwa": {
        nepaliName: "मटन सेकुवा",
        englishName: "Mutton Sekuwa",
        description: "Flavorful goat meat marinated with Himalayan rock salt and local herbs, slow-grilled.",
        phonetic: "ma-tun say-koo-wah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "35-45 mins",
        image: "assets/images/mutton_sekuwa.jpg"
    },
    "chicken thukpa": {
        nepaliName: "चिकेन थुक्पा",
        englishName: "Chicken Thukpa",
        description: "Comforting noodle soup with ginger-garlic chicken broth, hand-pulled noodles, and fresh herbs.",
        phonetic: "chi-ken thook-pah",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "35-45 mins",
        image: "assets/images/chicken_thukpa.jpg"
    },
    "veg thukpa": {
        nepaliName: "भेज थुक्पा",
        englishName: "Veg Thukpa",
        description: "Vegetarian noodle soup with light vegetable broth, noodles and fresh vegetables.",
        phonetic: "bhayj thook-pah",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "30-40 mins",
        image: "assets/images/veg_thukpa.jpg"
    },
    "chicken chowmein": {
        nepaliName: "चिकेन चाउमिन",
        englishName: "Chicken Chowmein",
        description: "Stir-fried egg noodles with chicken strips, crunchy vegetables in savory soy-based sauce.",
        phonetic: "chi-ken chow-main",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "25-35 mins",
        image: "assets/images/chicken_chowmein.jpg"
    },
    "veg chowmein": {
        nepaliName: "भेज चाउमिन",
        englishName: "Veg Chowmein",
        description: "Flash-fried noodles with vibrant mix of seasonal vegetables in soy sauce.",
        phonetic: "bhayj chow-main",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "20-30 mins",
        image: "assets/images/veg_chowmein.jpg"
    },
    "buff chowmein": {
        nepaliName: "भुसी चाउमिन",
        englishName: "Buff Chowmein",
        description: "Hearty noodles with pre-boiled shredded buffalo meat, vegetables and spicy sauce.",
        phonetic: "bhoo-see chow-main",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "30-40 mins",
        image: "assets/images/buff_chowmein.jpg"
    },
    "chicken fried rice": {
        nepaliName: "चिकेन फ्राइड राइस",
        englishName: "Chicken Fried Rice",
        description: "Fluffy stir-fried rice with diced chicken, scrambled egg, vegetables, soy sauce and cumin.",
        phonetic: "chi-ken fryd rise",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/chicken_fried_rice.jpg"
    },
    "veg fried rice": {
        nepaliName: "भेज फ्राइड राइस",
        englishName: "Veg Fried Rice",
        description: "Golden fried rice with mixed vegetables like peas, carrots, corn, tempered with cumin seeds.",
        phonetic: "bhayj fryd rise",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/veg_fried_rice.jpg"
    },
    "buff fried rice": {
        nepaliName: "भुसी फ्राइड राइस",
        englishName: "Buff Fried Rice",
        description: "Robust fried rice with shredded spiced buffalo meat and vegetables, tangy from pickled chilies.",
        phonetic: "bhoo-see fryd rise",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "25-35 mins",
        image: "assets/images/buff_fried_rice.jpg"
    },
    "dal fry": {
        nepaliName: "दाल फ्राइ",
        englishName: "Dal Fry",
        description: "Tempered lentil soup with sizzling finish of ghee, fried garlic, cumin seeds, and dried red chilies.",
        phonetic: "daal fry",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "25-35 mins",
        image: "assets/images/dal_fry.jpg"
    },
    "jeera aalu": {
        nepaliName: "जिरा आलु",
        englishName: "Jeera Aalu",
        description: "Dry-style potato curry sautéed with plenty of cumin seeds, turmeric, and green chilies.",
        phonetic: "jee-rah ah-loo",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "20-30 mins",
        image: "assets/images/jeera_aalu.jpg"
    },
    "mix veg": {
        nepaliName: "मिक्स भेज तरकारी",
        englishName: "Mix Veg",
        description: "Versatile and colorful vegetable curry that changes with the seasons in light spiced gravy.",
        phonetic: "miks bhayj tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "25-35 mins",
        image: "assets/images/mix_veg.jpg"
    },
    "chicken curry": {
        nepaliName: "चिकेन तरकारी",
        englishName: "Chicken Curry",
        description: "Homestyle chicken curry simmered in thick onion-tomato gravy with whole spices.",
        phonetic: "chi-ken tarkari",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "40-50 mins",
        image: "assets/images/chicken_curry.jpg"
    },
    "buff curry": {
        nepaliName: "भुसी तरकारी",
        englishName: "Buff Curry",
        description: "Slow-cooked buffalo meat braised for hours in thick gravy with warming spices.",
        phonetic: "bhoo-see tarkari",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "3+ hours",
        image: "assets/images/buff_curry.jpg"
    },
    "mutton curry": {
        nepaliName: "मटन तरकारी",
        englishName: "Mutton Curry",
        description: "Aromatic goat curry slow-cooked with mountain spices until meat is tender and flavorful.",
        phonetic: "ma-tun tarkari",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "2+ hours",
        image: "assets/images/mutton_curry.jpg"
    },
    "anda curry": {
        nepaliName: "अण्डा तरकारी",
        englishName: "Anda Curry",
        description: "Hard-boiled eggs simmered in spicy and tangy tomato-based gravy.",
        phonetic: "ahn-dah tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "25-35 mins",
        image: "assets/images/anda_curry.jpg"
    },
    "plain dal bhat": {
        nepaliName: "सादा दाल भात",
        englishName: "Plain Dal Bhat",
        description: "Foundational version with steamed white rice and simple untempered lentil soup.",
        phonetic: "sah-dah daal baat",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "15-25 mins",
        image: "assets/images/plain_dal_bhat.jpg"
    },
    "chicken dal bhat set": {
        nepaliName: "चिकेन दाल भात सेट",
        englishName: "Chicken Dal Bhat Set",
        description: "Restaurant upgrade with chicken curry added to classic dal bhat components.",
        phonetic: "chi-ken daal baat set",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "40-50 mins",
        image: "assets/images/chicken_dal_bhat_set.jpg"
    },
    "buff dal bhat set": {
        nepaliName: "भुसी दाल भात सेट",
        englishName: "Buff Dal Bhat Set",
        description: "Substantial meal platter with buffalo curry alongside classic dal bhat.",
        phonetic: "bhoo-see daal baat set",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "3+ hours",
        image: "assets/images/buff_dal_bhat_set.jpg"
    },
    "saag tarkari": {
        nepaliName: "साग तरकारी",
        englishName: "Saag Tarkari",
        description: "Finely chopped leafy greens sautéed with garlic, ginger, turmeric, and green chilies.",
        phonetic: "sahg tarkari",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/saag_tarkari.jpg"
    },
    "gundruk jhol": {
        nepaliName: "गुन्द्रुक झोल",
        englishName: "Gundruk Jhol",
        description: "Thin, tangy comforting soup made by rehydrating dried gundruk with tomatoes and potatoes.",
        phonetic: "goon-drook jhol",
        category: "Soup",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/gundruk_jhol.jpg"
    },
    "gundruk sadheko": {
        nepaliName: "गुन्द्रुक सँधेको",
        englishName: "Gundruk Sadheko",
        description: "Rehydrated gundruk tossed with mustard oil, lemon, onions, chilies, and cilantro.",
        phonetic: "goon-drook sahn-deh-ko",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "15-25 mins",
        image: "assets/images/gundruk_sadheko.jpg"
    },
    "bhatmas sadheko": {
        nepaliName: "भटमास सँधेको",
        englishName: "Bhatmas Sadheko",
        description: "Protein-packed salad with boiled soybeans, onions, tomatoes, and mustard oil dressing.",
        phonetic: "bhat-mahs sahn-deh-ko",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "20-30 mins",
        image: "assets/images/bhatmas_sadheko.jpg"
    },
    "aloo sadheko": {
        nepaliName: "आलु सँधेको",
        englishName: "Aloo Sadheko",
        description: "Spicy potato salad with boiled potatoes, red chili powder, cumin, onions, and mustard oil.",
        phonetic: "ah-loo sahn-deh-ko",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "20-30 mins",
        image: "assets/images/aloo_sadheko.jpg"
    },
    "chicken pakoda": {
        nepaliName: "चिकेन पकौडा",
        englishName: "Chicken Pakoda",
        description: "Crispy deep-fried chicken fritters in spiced chickpea flour batter.",
        phonetic: "chi-ken pah-kow-dah",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "25-35 mins",
        image: "assets/images/chicken_pakoda.jpg"
    },
    "veg pakoda": {
        nepaliName: "भेज पकौडा",
        englishName: "Veg Pakoda",
        description: "Mixed vegetable fritters coated in spiced gram flour batter, deep-fried until crisp.",
        phonetic: "bhayj pah-kow-dah",
        category: "Appetizer",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "20-30 mins",
        image: "assets/images/veg_pakoda.jpg"
    },
    "paneer choila": {
        nepaliName: "पनीर चोइला",
        englishName: "Paneer Choila",
        description: "Vegetarian choila with grilled paneer cubes tossed in spicy mustard oil dressing.",
        phonetic: "pah-neer choi-lah",
        category: "Appetizer",
        vegetarian: true,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "25-35 mins",
        image: "assets/images/paneer_choila.jpg"
    },
    "plain sel roti": {
        nepaliName: "सादा सेल रोटी",
        englishName: "Plain Sel Roti",
        description: "Classic sweet version of ring-shaped rice bread, deep-fried to golden brown.",
        phonetic: "sah-dah sel ro-tee",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "24+ hours",
        image: "assets/images/plain_sel_roti.jpg"
    },
    "juju dhau": {
        nepaliName: "जुजु धौ",
        englishName: "Juju Dhau",
        description: "King of Yogurts - extra-thick, creamy, slightly sweet yogurt set in clay pots.",
        phonetic: "joo-joo dhau",
        category: "Dessert",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "8+ hours",
        image: "assets/images/juju_dhau.jpg"
    },
    "kheer nepali style": {
        nepaliName: "खीर (नेपाली स्टाइल)",
        englishName: "Kheer Nepali Style",
        description: "Traditional Nepali rice pudding, ultra-creamy and flavored with cardamom, served during ceremonies.",
        phonetic: "kheer",
        category: "Dessert",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "45-60 mins",
        image: "assets/images/kheer_nepali.jpg"
    },
    "chatpate": {
        nepaliName: "चटपटे",
        englishName: "Chatpate",
        description: "Wildly popular street snack with puffed rice, vegetables, and mix of tangy, spicy chutneys.",
        phonetic: "chat-pat-eh",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "10-15 mins",
        image: "assets/images/chatpate.jpg"
    },
    "pani puri": {
        nepaliName: "पानी पुरी",
        englishName: "Pani Puri",
        description: "Interactive street food with crispy puri shells filled with potatoes and tangy tamarind water.",
        phonetic: "paa-nee poo-ree",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-40 mins",
        image: "assets/images/pani_puri.jpg"
    },
    "samosa": {
        nepaliName: "समोसा",
        englishName: "Samosa",
        description: "Deep-fried triangular pastry with crispy shell and savory filling of spiced potatoes and peas.",
        phonetic: "sa-mo-saah",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "40-50 mins",
        image: "assets/images/samosa.jpg"
    },
    "aloo chop": {
        nepaliName: "आलु चोप",
        englishName: "Aalu Chop",
        description: "Spiced mashed potato patties coated in gram flour batter and deep-fried until golden.",
        phonetic: "ah-loo chop",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-40 mins",
        image: "assets/images/aloo_chop.jpg"
    },
    "chow chow sadheko": {
        nepaliName: "चाउ चाउ सँधेको",
        englishName: "Chow Chow Sadheko",
        description: "Boiled instant noodles tossed with raw onions, tomatoes, cilantro, and mustard oil dressing.",
        phonetic: "chow chow sahn-deh-ko",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "10-15 mins",
        image: "assets/images/chow_chow_sadheko.jpg"
    },
    "wai wai sadheko": {
        nepaliName: "वाइवाइ सँधेको",
        englishName: "Wai Wai Sadheko",
        description: "Crunchy snack of uncooked instant noodles with masala powder, onions, and lemon juice.",
        phonetic: "why-why sahn-deh-ko",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "5-10 mins",
        image: "assets/images/wai_wai_sadheko.jpg"
    },
    "makai sadheko": {
        nepaliName: "मकै सँधेको",
        englishName: "Makai Sadheko",
        description: "Fresh salad of steamed sweet corn with onions, green chilies, cilantro, and lime.",
        phonetic: "ma-kai sahn-deh-ko",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "15-20 mins",
        image: "assets/images/makai_sadheko.jpg"
    },
    "bhuteko makai": {
        nepaliName: "भुटेको मकै",
        englishName: "Bhuteko Makai",
        description: "Charcoal-roasted corn on cob rubbed with lime juice, salt, and chili powder.",
        phonetic: "bhoo-teh-ko ma-kai",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "15-25 mins",
        image: "assets/images/bhuteko_makai.jpg"
    },
    "anda fry": {
        nepaliName: "अण्डा फ्राइ",
        englishName: "Anda Fry",
        description: "Simple fried eggs with sliced onions, green chilies, tomatoes, salt, pepper, and turmeric.",
        phonetic: "ahn-dah fry",
        category: "Breakfast",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "10-15 mins",
        image: "assets/images/anda_fry.jpg"
    },
    "nepali omelette": {
        nepaliName: "ओमलेट नेपाली स्टाइल",
        englishName: "Nepali Omelette",
        description: "Fluffy omelette with green chilies, onions, cilantro, cooked in mustard oil.",
        phonetic: "ohm-let",
        category: "Breakfast",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "10-15 mins",
        image: "assets/images/nepali_omelette.jpg"
    },
    "chiura": {
        nepaliName: "चिउरा",
        englishName: "Chiura",
        description: "Flattened, beaten rice that is dry, crisp, and flakes apart, eaten with side dishes.",
        phonetic: "chee-oo-rah",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "0-5 mins",
        image: "assets/images/chiura.jpg"
    },
    "dahi chiura": {
        nepaliName: "दही चिउरा",
        englishName: "Dahi Chiura",
        description: "Beaten rice soaked in lightly sweetened or plain yogurt, quick breakfast or snack.",
        phonetic: "dah-hee chee-oo-rah",
        category: "Breakfast",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "5-10 mins",
        image: "assets/images/dahi_chiura.jpg"
    },
    "masu bhat": {
        nepaliName: "मासु भात",
        englishName: "Masu Bhat",
        description: "Steamed rice topped or mixed with generous amount of meat curry and rich gravy.",
        phonetic: "mah-soo bhaat",
        category: "Main Course",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-40 mins",
        image: "assets/images/masu_bhat.jpg"
    },
    "aloo bhujiya": {
        nepaliName: "आलु भुजिया",
        englishName: "Aloo Bhujiya",
        description: "Thinly julienned potatoes stir-fried with cumin seeds, turmeric, and green chilies.",
        phonetic: "ah-loo bhoo-jee-yah",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "20-30 mins",
        image: "assets/images/aloo_bhujiya.jpg"
    },
    "cabbage curry": {
        nepaliName: "बन्दा तरकारी",
        englishName: "Cabbage Curry",
        description: "Shredded cabbage sautéed with mustard seeds, turmeric, green chilies, sometimes coconut.",
        phonetic: "ban-dah tarkari",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "15-25 mins",
        image: "assets/images/cabbage_curry.jpg"
    },
    "cauli tarkari": {
        nepaliName: "फूलगोभी तरकारी",
        englishName: "Cauli Tarkari",
        description: "Cauliflower florets cooked in light spiced gravy with onions, tomatoes, garlic, ginger.",
        phonetic: "fool-go-bhee tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "25-35 mins",
        image: "assets/images/cauli_tarkari.jpg"
    },
    "farsi tarkari": {
        nepaliName: "फर्सी तरकारी",
        englishName: "Farsi Tarkari",
        description: "Mildly sweet and savory pumpkin curry with fenugreek seeds, turmeric, and chilies.",
        phonetic: "far-see tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "25-35 mins",
        image: "assets/images/farsi_tarkari.jpg"
    },
    "bhindi tarkari": {
        nepaliName: "भिण्डी तरकारी",
        englishName: "Bhindi Tarkari",
        description: "Okra stir-fried with cumin and mustard seeds until tender, with lemon for brightness.",
        phonetic: "bhin-dee tarkari",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/bhindi_tarkari.jpg"
    },
    "karela tarkari": {
        nepaliName: "करेला तरकारी",
        englishName: "Karela Tarkari",
        description: "Bitter gourd slices cooked with onions, spices, and tangy agent like amchoor or tomatoes.",
        phonetic: "kah-reh-lah tarkari",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "30-40 mins",
        image: "assets/images/karela_tarkari.jpg"
    },
    "anda tarkari dry": {
        nepaliName: "अण्डा तरकारी (सुक्खा)",
        englishName: "Anda Tarkari Dry",
        description: "Dry masala-coated egg dish with hard-boiled eggs sautéed in thick spicy paste.",
        phonetic: "ahn-dah tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "25-35 mins",
        image: "assets/images/anda_tarkari_dry.jpg"
    },
    "chicken soup": {
        nepaliName: "चिकेन सूप",
        englishName: "Chicken Soup",
        description: "Clear nourishing broth with chicken bones, ginger, garlic, black pepper, turmeric.",
        phonetic: "chi-ken soop",
        category: "Soup",
        vegetarian: false,
        spiceLevel: "🌶️ Mild",
        prepTime: "1+ hour",
        image: "assets/images/chicken_soup.jpg"
    },
    "veg soup": {
        nepaliName: "भेज सूप",
        englishName: "Veg Soup",
        description: "Light clear vegetable broth with carrots, celery, cabbage, tomatoes, and herbs.",
        phonetic: "bhayj soop",
        category: "Soup",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "30-40 mins",
        image: "assets/images/veg_soup.jpg"
    },
    "aloo matar": {
        nepaliName: "आलु मटर तरकारी",
        englishName: "Aloo Matar",
        description: "Comforting curry with potatoes and green peas in mildly spiced onion-tomato gravy.",
        phonetic: "ah-loo matar",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "25-35 mins",
        image: "assets/images/aloo_matar.jpg"
    },
    "soybean tarkari": {
        nepaliName: "सोयाबीन तरकारी",
        englishName: "Soybean Tarkari",
        description: "Protein-packed curry with dried soybeans simmered in spiced gravy until tender.",
        phonetic: "soy-bean tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "1+ hour",
        image: "assets/images/soybean_tarkari.jpg"
    },
    "chana tarkari": {
        nepaliName: "चना तरकारी",
        englishName: "Chana Tarkari",
        description: "Rich curry with chickpeas slow-cooked in thick onion-tomato gravy infused with tea leaves.",
        phonetic: "chah-nah tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "1+ hour",
        image: "assets/images/chana_tarkari.jpg"
    },
    "chana sadheko": {
        nepaliName: "चना सँधेको",
        englishName: "Chana Sadheko",
        description: "Quick salad with boiled chickpeas, onions, tomatoes, green chilies, and lemon dressing.",
        phonetic: "chah-nah sahn-deh-ko",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "15-20 mins",
        image: "assets/images/chana_sadheko.jpg"
    },
    "mula sadheko": {
        nepaliName: "मुला सँधेको",
        englishName: "Mula Sadheko",
        description: "Pungent salad with julienned white radish, green chilies, cilantro, mustard oil and lemon.",
        phonetic: "moo-lah sahn-deh-ko",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "15-20 mins",
        image: "assets/images/mula_sadheko.jpg"
    },
    "kakro sadheko": {
        nepaliName: "कक्रो सँधेको",
        englishName: "Kakro Sadheko",
        description: "Cooling summer salad of thinly sliced cucumber with timur pepper, salt, and lemon.",
        phonetic: "kak-ro sahn-deh-ko",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "10-15 mins",
        image: "assets/images/kakro_sadheko.jpg"
    },
    "tamatar achar": {
        nepaliName: "तमाटर अचार",
        englishName: "Tamatar Achar",
        description: "Chunky cooked pickle made from tomatoes with fenugreek seeds, mustard oil, turmeric, chili.",
        phonetic: "tah-mah-tar ah-char",
        category: "Condiment",
        vegetarian: true,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "30-40 mins",
        image: "assets/images/tamatar_achar.jpg"
    },
    "dalle khursani achar": {
        nepaliName: "डल्ले खुर्सानी अचार",
        englishName: "Dalle Khursani Achar",
        description: "Extremely spicy pickle made from small round Dalle chilies preserved in mustard oil.",
        phonetic: "dahl-leh khur-sah-nee",
        category: "Condiment",
        vegetarian: true,
        spiceLevel: "🌶️🌶️🌶️🌶️ Extreme",
        prepTime: "1+ week",
        image: "assets/images/dalle_khursani_achar.jpg"
    },
    "masala chiya": {
        nepaliName: "मसला चिया",
        englishName: "Masala Chiya",
        description: "Strong sweet spiced tea with milk, water, fresh ginger, cardamom, cloves, cinnamon.",
        phonetic: "mah-sah-lah chee-yah",
        category: "Beverage",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "10-15 mins",
        image: "assets/images/masala_chiya.jpg"
    },
    "milk tea": {
        nepaliName: "दूध चिया",
        englishName: "Milk Tea",
        description: "Simple everyday tea made by boiling black tea leaves with milk, water, and sugar.",
        phonetic: "doodh chee-yah",
        category: "Beverage",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "10-15 mins",
        image: "assets/images/milk_tea.jpg"
    },
    "black tea": {
        nepaliName: "कालो चिया",
        englishName: "Black Tea",
        description: "Plain brewed tea without milk, often taken with salt instead of sugar at high altitudes.",
        phonetic: "kah-lo chee-yah",
        category: "Beverage",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "5-10 mins",
        image: "assets/images/black_tea.jpg"
    },
    "lassi": {
        nepaliName: "लस्सी",
        englishName: "Lassi",
        description: "Cooling yogurt-based drink blended smooth and frothy, sweet or salty.",
        phonetic: "las-see",
        category: "Beverage",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "5-10 mins",
        image: "assets/images/lassi.jpg"
    },
    "plain roti": {
        nepaliName: "प्लेन रोटी",
        englishName: "Plain Roti",
        description: "Simple unleavened whole-wheat flatbread cooked on hot griddle, used to scoop curries.",
        phonetic: "plain ro-tee",
        category: "Bread",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "15-20 mins",
        image: "assets/images/plain_roti.jpg"
    },
    "aloo paratha": {
        nepaliName: "आलु पराठा",
        englishName: "Aloo Paratha",
        description: "Hearty stuffed flatbread with spiced mashed potato filling, cooked with ghee or oil.",
        phonetic: "ah-loo pah-rah-thah",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-40 mins",
        image: "assets/images/aloo_paratha.jpg"
    },
    "plain rice": {
        nepaliName: "प्लेन भात",
        englishName: "Plain Rice",
        description: "Simple steamed white rice, neutral fluffy base for almost every Nepali meal.",
        phonetic: "plain bhaat",
        category: "Staple",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "15-20 mins",
        image: "assets/images/plain_rice.jpg"
    },
    "masala papad": {
        nepaliName: "मसला पपड",
        englishName: "Masala Papad",
        description: "Crispy lentil wafer topped with chopped onions, tomatoes, cilantro, and chaat masala.",
        phonetic: "mah-sah-lah pah-pad",
        category: "Appetizer",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "5-10 mins",
        image: "assets/images/masala_papad.jpg"
    },
    "fried papad": {
        nepaliName: "भुटेको पपड",
        englishName: "Fried Papad",
        description: "Lentil wafers deep-fried until they puff up dramatically into light crispy discs.",
        phonetic: "bhoo-teh-ko pah-pad",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "5-10 mins",
        image: "assets/images/fried_papad.jpg"
    },
    "chatamari sadheko": {
        nepaliName: "चतामरी सँधेको",
        englishName: "Chatamari Sadheko",
        description: "Leftover chatamari chopped and tossed with mustard oil, chili, onions, and cilantro.",
        phonetic: "cha-tah-mree sahn-deh-ko",
        category: "Snack",
        vegetarian: false,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "10-15 mins",
        image: "assets/images/chatamari_sadheko.jpg"
    },
    "fapar roti": {
        nepaliName: "फापर को रोटी",
        englishName: "Fapar Roti",
        description: "Nutritious gluten-free flatbread made from buckwheat flour, popular in high-altitude regions.",
        phonetic: "fah-par ro-tee",
        category: "Bread",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "20-30 mins",
        image: "assets/images/fapar_roti.jpg"
    },
    "sisnu tarkari": {
        nepaliName: "सिस्नु तरकारी",
        englishName: "Sisnu Tarkari",
        description: "Foraged green curry made from stinging nettle leaves, highly nutritious with earthy flavor.",
        phonetic: "sis-noo tarkari",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "25-35 mins",
        image: "assets/images/sisnu_tarkari.jpg"
    },
    "aloo bodi tarkari": {
        nepaliName: "आलु बोडी तरकारी",
        englishName: "Aloo Bodi Tarkari",
        description: "Comforting curry with potatoes and black-eyed peas simmered in lightly spiced gravy.",
        phonetic: "ah-loo bo-dee tarkari",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "35-45 mins",
        image: "assets/images/aloo_bodi_tarkari.jpg"
    },
    "puwa": {
        nepaliName: "पुहाँ",
        englishName: "Puwa",
        description: "Sweet deep-fried squares made from wheat flour, sugar, sometimes coconut or cardamom.",
        phonetic: "poo-wah",
        category: "Dessert",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "30-40 mins",
        image: "assets/images/puwa.jpg"
    },
    "tarkari momo": {
        nepaliName: "तरकारी मम",
        englishName: "Tarkari Momo",
        description: "Steamed dumplings filled with spiced seasonal vegetables like cabbage, carrots, spring onions.",
        phonetic: "tarkari MOH-moh",
        category: "Appetizer",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-45 mins",
        image: "assets/images/tarkari_momo.jpg"
    },
    "chicken momo": {
        nepaliName: "चिकेन मम",
        englishName: "Chicken Momo",
        description: "Juicy momo filling of minced chicken mixed with onions, garlic, ginger, and Nepali spices.",
        phonetic: "chi-ken MOH-moh",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "30-45 mins",
        image: "assets/images/chicken_momo.jpg"
    },
    "chili momo": {
        nepaliName: "चिली मम",
        englishName: "Chili Momo",
        description: "Modern twist with momos tossed in sweet, spicy, sticky chili sauce with garlic and vinegar.",
        phonetic: "chill-ee MOH-moh",
        category: "Appetizer",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "35-45 mins",
        image: "assets/images/chili_momo.jpg"
    },
    "kwa": {
        nepaliName: "क्वा",
        englishName: "Kwa",
        description: "Traditional Newari hot-and-sour soup with fermented ingredients, tomatoes, and bone-in meat.",
        phonetic: "kwah",
        category: "Soup",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "45-60 mins",
        image: "assets/images/kwa.jpg"
    },
    "sukuti achar": {
        nepaliName: "सुकुटी को अचार",
        englishName: "Sukuti Achar",
        description: "Pungent condiment made from shredded dried meat jerky with chili powder, timur, mustard oil.",
        phonetic: "soo-koo-tee ah-char",
        category: "Condiment",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️🌶️ Very High",
        prepTime: "15-20 mins",
        image: "assets/images/sukuti_achar.jpg"
    },
    "bhutan": {
        nepaliName: "भुटन",
        englishName: "Bhutan",
        description: "Crispy savory snack made from deep-fried goat or buffalo intestines tossed with spices.",
        phonetic: "bhoot-an",
        category: "Snack",
        vegetarian: false,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "40-50 mins",
        image: "assets/images/bhutan.jpg"
    },
    "tel piye": {
        nepaliName: "तेल पिए",
        englishName: "Tel Piye",
        description: "Traditional health practice of sipping warm mustard oil mixed with spices for digestion.",
        phonetic: "tel pee-yeh",
        category: "Beverage",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "5-10 mins",
        image: "assets/images/tel_piye.jpg"
    },
    "pusphura": {
        nepaliName: "पुष्पुरा",
        englishName: "Pusphura",
        description: "Sweet flower-shaped rice flour pancakes stuffed with molasses and sesame seeds for Nag Panchami.",
        phonetic: "poosh-poo-rah",
        category: "Dessert",
        vegetarian: true,
        spiceLevel: "🌶️ None",
        prepTime: "45-60 mins",
        image: "assets/images/pusphura.jpg"
    },
    "lapsi": {
        nepaliName: "लप्सी",
        englishName: "Lapsi",
        description: "Tart fruit from hog plum tree used to make sour candy or tangy pickle.",
        phonetic: "lap-see",
        category: "Snack",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "1+ hour",
        image: "assets/images/lapsi.jpg"
    },
    "silam": {
        nepaliName: "सिलाम",
        englishName: "Silam",
        description: "Traditional fermented food from soybeans shaped into sticks, left to ferment above hearth.",
        phonetic: "see-lam",
        category: "Condiment",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "1+ month",
        image: "assets/images/silam.jpg"
    },
    "chamalko dhido": {
        nepaliName: "चामलको ढिँडो",
        englishName: "Chamalko Dhido",
        description: "Softer version of traditional dhido made from white rice flour, milder flavor and porridge-like.",
        phonetic: "chah-mahl-ko dhin-doh",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "20-30 mins",
        image: "assets/images/chamalko_dhido.jpg"
    },
    "simi dal": {
        nepaliName: "सिमीको दाल",
        englishName: "Simi Dal",
        description: "Hearty rustic lentil curry made with kidney beans and often bamboo shoots, simmered for hours.",
        phonetic: "see-mee daal",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "2+ hours",
        image: "assets/images/simi_dal.jpg"
    },
    "maas dal": {
        nepaliName: "मासको दाल",
        englishName: "Maas Dal",
        description: "Rich creamy black lentil curry slow-cooked until broken down, finished with butter or ghee.",
        phonetic: "mahs daal",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "1+ hour",
        image: "assets/images/maas_dal.jpg"
    },
    "aloo simi": {
        nepaliName: "आलु सिमी",
        englishName: "Aloo Simi",
        description: "Simple stew-like dish combining potatoes and kidney beans in lightly spiced broth.",
        phonetic: "ah-loo see-mee",
        category: "Main Course",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "45-60 mins",
        image: "assets/images/aloo_simi.jpg"
    },
    "cauli momo": {
        nepaliName: "काउली मम",
        englishName: "Cauli Momo",
        description: "Vegetarian momos with spiced cauliflower filling, blanched for flavor.",
        phonetic: "cow-lee MOH-moh",
        category: "Appetizer",
        vegetarian: true,
        spiceLevel: "🌶️🌶️ Medium",
        prepTime: "30-45 mins",
        image: "assets/images/cauli_momo.jpg"
    },
    "aap ko achar": {
        nepaliName: "आँप अचार",
        englishName: "Aap Ko Achar",
        description: "Sweet, tangy, spicy pickle made from ripe mangoes preserved in mustard oil and spices.",
        phonetic: "ahp -ko-char",
        category: "Condiment",
        vegetarian: true,
        spiceLevel: "🌶️🌶️🌶️ High",
        prepTime: "1+ day",
        image: "assets/images/aap_ko_achar.jpg"
    },
    "methi aalu": {
        nepaliName: "मेथी आलु",
        englishName: "Methi Aalu",
        description: "Dry potato curry with cubed potatoes sautéed with fresh fenugreek leaves for aromatic flavor.",
        phonetic: "meh-thee ah-loo",
        category: "Side Dish",
        vegetarian: true,
        spiceLevel: "🌶️ Mild",
        prepTime: "25-35 mins",
        image: "assets/images/methi_aalu.jpg"
    },
    "khursani dhulo": {
        nepaliName: "खुर्सानीको धुलो",
        englishName: "Khursani Dhulo",
        description: "Homemade red chili powder made from sun-dried local red chilies ground into fine powder.",
        phonetic: "khur-sah-nee dhoo-loh",
        category: "Condiment",
        vegetarian: true,
        spiceLevel: "🌶️🌶️🌶️🌶️ Extreme",
        prepTime: "3+ days",
        image: "assets/images/khursani_dhulo.jpg"
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
    const query = document.getElementById('searchInput')?.value.trim();
    
    if (!query) {
        alert('Please enter a food name!');
        return;
    }
    
    const loading = document.getElementById('loading');
    const resultContainer = document.getElementById('resultContainer');
    
    if (loading) loading.style.display = 'block';
    if (resultContainer) resultContainer.style.display = 'none';
    
    setTimeout(() => {
        try {
            const ruleResult = ruleBasedModel(query);
            const tfidfResult = tfidfModel(query);
            const ensembleResult = ensembleModel(ruleResult, tfidfResult);
            
            // Update model cards ONLY if on evaluation page
            if (document.getElementById('ruleCard')) {
                updateModelDisplay('rule', ruleResult);
                updateModelDisplay('tfidf', tfidfResult);
                updateModelDisplay('ensemble', ensembleResult);
            }
            
            // Update main result card safely
            const foodNameEl = document.getElementById('foodName');
            const nepaliNameEl = document.getElementById('nepaliName');
            const descEl = document.getElementById('descriptionText');
            const imgEl = document.getElementById('foodImage');
            const notFoundEl = document.getElementById('notFoundBanner');
            
            if (!ensembleResult.found) {
                if (foodNameEl) foodNameEl.textContent = query;
                if (nepaliNameEl) nepaliNameEl.textContent = 'Unknown Dish';
                if (descEl) descEl.textContent = `"${query}" was not found.`;
                if (notFoundEl) notFoundEl.style.display = 'block';
                if (imgEl) imgEl.style.display = 'none';
            } else {
                const food = ensembleResult.food;
                if (foodNameEl) foodNameEl.textContent = food.englishName;
                if (nepaliNameEl) nepaliNameEl.textContent = food.nepaliName;
                if (descEl) descEl.textContent = food.description;
                if (imgEl) { imgEl.src = food.image; imgEl.style.display = 'block'; }
                if (notFoundEl) notFoundEl.style.display = 'none';
                
                const catEl = document.getElementById('categoryText');
                const vegEl = document.getElementById('vegetarianText');
                const spiceEl = document.getElementById('spiceText');
                const prepEl = document.getElementById('prepTime');
                
                if (catEl) catEl.textContent = food.category;
                if (vegEl) vegEl.textContent = food.vegetarian ? "✅ Yes" : "❌ No";
                if (spiceEl) spiceEl.textContent = food.spiceLevel;
                if (prepEl) prepEl.textContent = food.prepTime;
            }
            
        } catch (err) {
            console.error(err);
            alert('Error: ' + err.message);
        } finally {
            if (loading) loading.style.display = 'none';
            if (resultContainer) resultContainer.style.display = 'block';
        }
    }, 600);
}

function quickSearch(term) {
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = term;
        searchFood();
    }
}

// Enter key support
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchFood();
});
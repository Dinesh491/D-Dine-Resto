const mainCourses = [
    {
        name: "Butter Naan",
        description: "Soft, fluffy naan bread brushed with rich butter, perfect for mopping up curries and gravies.",
        price: 50,
        image: { url: "https://jalojog.com/wp-content/uploads/2024/04/Butter_Naan.jpg" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Garlic Naan",
        description: "Naan bread topped with minced garlic and herbs, served piping hot, ideal to complement flavorful curries.",
        price: 60,
        image: { url: "https://thebellyrulesthemind.net/wp-content/uploads/2020/09/Garlic-Naan-3-720x720.jpg" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Roti",
        description: "Whole wheat flatbread, cooked on a tandoor or griddle, perfect for scooping up rich curries and vegetables.",
        price: 40,
        image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqZJnnw1FlNNgRcoXMqEmiwNFZvX4jfZnFw&s" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Paneer Butter Masala",
        description: "Soft paneer cubes in a rich, creamy tomato-based gravy with aromatic spices and a hint of sweetness.",
        price: 300,
        image: { url: "https://uzhavarbumi.s3.ap-south-1.amazonaws.com/uploads/KxOfgboHmQHd5l5g2uoxvoHB57eK2ngjPp4ZmT5j.jpg" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Dal Makhani",
        description: "A hearty black lentil stew cooked with butter, cream, and spices, resulting in a creamy, comforting dish.",
        price: 250,
        image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnqeAHeIZmt1Ev5VRs32wY4O6bAEzduiDNGSkTiloSTvsmNpYiNx-AGcWMw5So-_Nfl0&usqp=CAU" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Aloo Gobi",
        description: "A classic dry curry made with tender potatoes and cauliflower, flavored with traditional Indian spices.",
        price: 180,
        image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWjibOzMRtQiFryHO21cuhwdbOoSSB5mEFg&s" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Baingan Bharta",
        description: "Roasted mashed eggplant cooked with tomatoes, onions, and spices, creating a smoky, flavorful curry.",
        price: 220,
        image: { url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/baingan-bharta.jpg" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Chole Bhature",
        description: "Spicy chickpeas served with deep-fried bread (bhature), a perfect combination of heat and crispiness.",
        price: 200,
        image: { url: "https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice cooked with a medley of mixed vegetables, herbs, and aromatic spices.",
        price: 280,
        image: { url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Vegetable-Biryani-With-Green-Raita-159c15d.jpg?quality=90&resize=556,505" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "White Rice",
        description: "Steamed basmati rice, a perfect accompaniment to gravies and curries, complementing their flavors effortlessly.",
        price: 100,
        image: { url: "https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-superJumbo.jpg" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Pulihora",
        description: "A tangy and spicy rice dish made with tamarind, mustard seeds, curry leaves, and a blend of aromatic spices, a traditional South Indian favorite.",
        price: 100,
        image: { url: "https://cookingfromheart.com/wp-content/uploads/2016/07/Pulihora-4.jpg" },
        category: "MainCourse",
        type: "veg"
    },    
    {
        name: "Bagara Rice",
        description: "A flavorful rice dish cooked with spices and herbs, typical of Hyderabadi cuisine, often served with curries.",
        price: 180,
        image: { url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/12/jeera-rice-recipe-500x375.webp" },
        category: "MainCourse",
        type: "veg"
    },
    {
        name: "Butter Chicken",
        description: "A creamy, mildly spiced chicken curry cooked with butter, served with naan or rice for a rich meal.",
        price: 350,
        image: { url: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe-500x500.jpg" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "Chicken Biryani",
        description: "Fragrant rice layered with marinated chicken, cooked with aromatic spices, creating a flavorful and satisfying meal.",
        price: 380,
        image: { url: "https://www.pavaniskitchen.com/wp-content/uploads/2021/02/chbiryani.jpg" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "Mutton Biryani",
        description: "Fragrant rice layered with marinated chicken, cooked with aromatic spices, creating a flavorful and satisfying meal.",
        price: 380,
        image: { url: "https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230721-800x530.jpg?crop=1" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "Mutton Rogan Josh",
        description: "Tender lamb cooked in a rich, aromatic curry sauce, delivering deep flavors of spices and slow-cooked perfection.",
        price: 400,
        image: { url: "https://i.ytimg.com/vi/-dh_uGahzYo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDRnpn0Lb8MTEgoauxKZ7Dv4PslYA" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "Fish Curry",
        description: "Fresh fish simmered in a tangy, spiced tomato-based gravy, offering a delicate balance of flavors.",
        price: 350,
        image: { url: "https://i.ytimg.com/vi/qstxR_Jh4aY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_Suuq5x3tx19D_lMjm3RHk6IpHg" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "Chicken Korma",
        description: "Chicken pieces cooked in a mild, creamy sauce with cashews, almonds, and a blend of aromatic spices.",
        price: 360,
        image: { url: "https://savvybites.co.uk/wp-content/uploads/2024/01/Slow-cooker-chicken-Korma-1-2.jpg" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "Tandoori Chicken",
        description: "Chicken marinated in yogurt, spices, and herbs, then cooked in a traditional tandoor for a smoky, charred flavor.",
        price: 320,
        image: { url: "https://lh3.googleusercontent.com/proxy/DATiXOJTZb0dcp4VRZFnbGQilYJMAxpckNlz0YC6bdiL_fUEKXq6dQEor0jILYWBAST-i6ZJLH-b3vLlgneedHa42CGwH90V_CcDcdlWOiob" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "D-Dine Special Thali",
        description: "A selection of small portions from the menu (vegetarian and non-vegetarian) served on a platter with rice, bread, and dessert.",
        price: 550,
        image: { url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/2a/28/6d/south-indian-non-veg.jpg" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "D-Dine Special Prawn Malai Curry",
        description: "Prawns cooked in a rich, creamy coconut-based curry, a coastal specialty with a flavorful, mild taste.",
        price: 450,
        image: { url: "https://www.easycookingwithmolly.com/wp-content/uploads/2015/09/Chingri-Malai-Curry-1-480x480.jpg" },
        category: "MainCourse",
        type: "nonVeg"
    },
    {
        name: "D-Dine Pappu Gyara with Chicken Curry",
        description: "A comforting dish of mashed lentils (Pappu Graya) served with flavorful chicken curry for a complete meal.",
        price: 400,
        image: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLlBZg8wSqYziYVFH-uNSsiJIx2PE_TkWhg&s" },
        category: "MainCourse",
        type: "nonVeg"
    },
];

module.exports = mainCourses;
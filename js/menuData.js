/* ============================================================
   PIZZA CAVE — REAL MENU DATA (from in-store menu card)
   All items are 100% Veg. Sizes: 7" / 10" / 12"
   ============================================================ */

const MENU_DATA = {

  pizzaCategories: [
    {
      id: "classic",
      title: "Classic Cheese",
      price7: 99, price10: 199, price12: 239,
      items: [
        { id: "pz1", name: "Cheese Pizza", desc: "Mozzarella Cheese" },
        { id: "pz2", name: "Tomato & Cheese Pizza", desc: "Mozzarella Cheese & Fresh Tomato" }
      ]
    },
    {
      id: "paneer",
      title: "Paneer Delight",
      price7: 119, price10: 239, price12: 339,
      items: [
        { id: "pz3", name: "Onion Paneer Pizza" },
        { id: "pz4", name: "Capsicum Paneer Pizza" },
        { id: "pz5", name: "Corn Paneer Pizza" },
        { id: "pz6", name: "Tomato Paneer Pizza" },
        { id: "pz7", name: "Mushroom Paneer Pizza" }
      ]
    },
    {
      id: "loaded",
      title: "Loaded Veggie",
      price7: 160, price10: 280, price12: 389,
      items: [
        { id: "pz8", name: "Loaded Cheese Pizza", desc: "Double Mozzarella Cheese" },
        { id: "pz9", name: "Pizza Indiana", desc: "Corn & Indiana Sauce" },
        { id: "pz10", name: "Veggie Fresh Pizza", desc: "Onion, Crisp Capsicum" },
        { id: "pz11", name: "Veggie Crush Pizza", desc: "Onion, Crisp Capsicum & Golden Corn" },
        { id: "pz12", name: "Country Gala", desc: "Onion, Crisp Capsicum & Tomato" },
        { id: "pz13", name: "Farm Harvested", desc: "Onion, Crisp Capsicum, Tomato & Mushroom" },
        { id: "pz14", name: "Spicy Tripple Tongo", desc: "Corn, Red Paprika & Jalapeno" }
      ]
    },
    {
      id: "signature",
      title: "Signature Delight",
      price7: 190, price10: 350, price12: 435,
      items: [
        { id: "pz15", name: "Mexican Delight", desc: "Onion, Crisp Capsicum, Tomato, Jalapeno & Mexican Herbs" },
        { id: "pz16", name: "Deluxe Delight", desc: "Onion, Crisp Capsicum, Mushroom, Golden Corn & Paneer" },
        { id: "pz17", name: "Spicy Heaven", desc: "Onion, Golden Corn & Red Paprika" },
        { id: "pz18", name: "Classical Pizza", desc: "Black Olives & Extra Cheese" },
        { id: "pz19", name: "Spicy Paneer", desc: "Paneer, Crisp Capsicum, Red Paprika & Extra Cheese" }
      ]
    },
    {
      id: "cave",
      title: "Cave Special",
      price7: 249, price10: 345, price12: 445,
      items: [
        { id: "pz20", name: "Spiced Paneer Pizza", desc: "Spicy Paneer, Onion, Tomato & Cheese" },
        { id: "pz21", name: "Kadhai Paneer Pizza", desc: "Onion, Crispy Capsicum, Tomato, Paneer & Mexican Herbs" },
        { id: "pz22", name: "Tandoori Paneer Pizza", desc: "Spiced Paneer, Onion, Green Capsicum & Red Paprika in Tandoori Sauce" },
        { id: "pz23", name: "Paneer Makhani Pizza", desc: "Indiana Sauce, Paneer & Crispy Capsicum" },
        { id: "pz24", name: "Pizza Cave Special", desc: "Black Olives, Onion, Capsicum, Mushroom, Tomato, Corn, Jalapeno & Extra Cheese" }
      ]
    }
  ],

  sides: [
    { id: "s1", name: "Cheese Burger", price: 60, priceAlt: 80, desc: "Loaded cheese burger, served hot & fresh", icon: "burger" },
    { id: "s2", name: "Stuffed Garlic Bread", price: 95, desc: "Cheese stuffed, herb butter garlic bread", icon: "garlicBread" },
    { id: "s3", name: "Garlic Bread Sticks", price: 85, desc: "Crispy garlic bread sticks with dip", icon: "garlicBread" },
    { id: "s4", name: "Italian Red Pasta", price: 100, desc: "Tangy tomato basil arrabbiata style pasta", icon: "pastaRed" },
    { id: "s5", name: "Italian White Pasta", price: 100, desc: "Creamy white sauce alfredo style pasta", icon: "pastaWhite" },
    { id: "s6", name: "Choco Lava Cake", price: 70, desc: "Warm molten chocolate lava cake", icon: "cake" },
    { id: "s7", name: "Zingy Parcel (Veg)", price: 45, desc: "Chef's zingy veg parcel special", icon: "burger" }
  ],

  drinks: [
    { id: "d1", name: "200ML Cold Drink", price: 20, icon: "drinkCola" },
    { id: "d2", name: "500ML Water Bottle", price: 10, icon: "water" },
    { id: "d3", name: "Hot Coffee", price: 35, icon: "coffee" },
    { id: "d4", name: "Cold Coffee", price: 80, icon: "drinkCoffee" }
  ],

  combos: [
    { id: "c1", name: "Medium Pizza + Coldrink", price: 230, desc: "Any medium pizza served with a chilled coldrink", tag: "Best Seller" },
    { id: "c2", name: "Capsicum & Golden Corn Pizza + Coldrink (10\")", price: 275, desc: "10-inch special pizza paired with a coldrink", tag: "Great Value" },
    { id: "c3", name: "Veg Combo Single", price: 279, desc: "Choose one: Cheese Onion / Cheese Capsicum / Cheese Tomato / Cheese Corn", tag: "Popular" },
    { id: "c4", name: "Veg Combo Double", price: 319, desc: "Choose one: Onion & Capsicum / Tomato & Capsicum / Onion & Paneer / Jalapeno & Corn", tag: "Family Pick" }
  ],

  extras: [
    { name: "Extra Cheese (Regular)", price: 45 },
    { name: "Extra Topping (7\")", price: 30 },
    { name: "Extra Topping (10\")", price: 45 },
    { name: "Extra Topping (12\")", price: 55 }
  ]
};

/* Pizzas shown on the homepage "Popular Pizzas" preview */
const POPULAR_PIZZA_PICKS = ["pz24", "pz20", "pz16", "pz9"]; // Cave Special, Spiced Paneer, Deluxe Delight, Pizza Indiana

/* Business info — from the in-store menu card */
const BUSINESS = {
  name: "Pizza Cave",
  address: "Opp. BBD, Goyal Complex, 2nd Floor, Near Crown Mall, Lucknow",
  phones: ["+91-9026990995", "+91-9305639512"],
  whatsappNumber: "919026990995",
  timings: "11:00 AM – 11:00 PM, All Days",
  platforms: ["Swiggy", "Zomato"]
};

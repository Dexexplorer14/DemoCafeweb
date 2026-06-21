export const categories = [
  { id: 'cakes', label: 'Cakes' },
  { id: 'desserts', label: 'Dessert & Cupcakes' },
  { id: 'viennoiserie', label: 'Viennoiserie & Brownies' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'burgers', label: 'Sandwich & Burger' },
  { id: 'pasta', label: 'Pasta & Main Course' },
  { id: 'breakfast', label: 'All Day Breakfast' },
  { id: 'cold-beverages', label: 'Cold Beverages & Cold Brews' },
  { id: 'hot-beverages', label: 'Hot Beverages' },
]

export const menuItems = [
  // ---- Cakes ----
  {
    id: 1, category: 'cakes', name: 'Triple Layered Chocolate Mousse Cake',
    price: 750, description: 'Three layers of Belgian dark chocolate mousse on a fudge base — our most indulgent creation since day one.',
    tags: ['egg'], isBestseller: true,
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2, category: 'cakes', name: 'Red Velvet Cake w/ Cream Cheese',
    price: 700, description: 'Classic red velvet with a velvety cream cheese frosting and crumbly edge.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3, category: 'cakes', name: 'Ferrero Rocher Cake',
    price: null, description: 'Rich hazelnut-chocolate layers with crushed Ferrero Rocher — a crowd favourite.',
    tags: ['egg'], isNew: true,
    image: 'https://images.pexels.com/photos/136066/pexels-photo-136066.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4, category: 'cakes', name: 'Sinful Chocolate Cake',
    price: null, description: 'For the true believer — dense, fudgy, unapologetically chocolate.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5, category: 'cakes', name: 'Opium Chocolate Mousse Cake',
    price: null, description: 'Addictively light chocolate mousse on a dark cocoa base — you have been warned.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- Dessert & Cupcakes ----
  {
    id: 6, category: 'desserts', name: 'Mango Mascarpone',
    price: null, description: 'Seasonal Alphonso mango layered with airy mascarpone cream — a summer ritual.',
    tags: ['veg'], isSeasonal: true,
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 7, category: 'desserts', name: 'Triple Layered Chocolate Mousse Pastry',
    price: null, description: 'Single-portion version of our bestseller cake. Same indulgence, less commitment.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8, category: 'desserts', name: 'Chocolate Blueberry Pastry',
    price: null, description: 'Dark chocolate and tart blueberry — an underrated pairing that works beautifully.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- Viennoiserie & Brownies ----
  {
    id: 9, category: 'viennoiserie', name: 'Classic Croissant',
    price: null, description: 'Laminated French-style butter croissant — crisp shell, honeycomb crumb.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 10, category: 'viennoiserie', name: 'Double Chocolate Brownie',
    price: null, description: 'Dense, fudgy Belgian chocolate brownie with a crackled top — gooey centre.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- Cookies ----
  {
    id: 11, category: 'cookies', name: 'Almond Biscotti',
    price: null, description: 'Twice-baked Italian almond biscuits — perfect for dipping into your coffee.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/2067404/pexels-photo-2067404.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 12, category: 'cookies', name: 'Double Chocolate Chip Cookies',
    price: null, description: 'Soft-baked with dark chocolate chunks — comfort in cookie form.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- Sandwich & Burger ----
  {
    id: 13, category: 'burgers', name: 'Paneer Makhani Burger',
    price: 300, description: 'Grilled paneer tikka in a creamy makhani sauce, onions, and mint chutney.',
    tags: ['veg'], isBestseller: true,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 14, category: 'burgers', name: 'Club Sandwich',
    price: null, description: 'Classic triple-decker club with grilled chicken, lettuce, tomato, and house mayo.',
    tags: ['nonveg'],
    image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- Pasta & Main Course ----
  {
    id: 15, category: 'pasta', name: 'Spaghetti Meatballs',
    price: 500, description: 'House-made pork-beef meatballs in slow-simmered marinara over al dente spaghetti.',
    tags: ['nonveg'],
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- All Day Breakfast ----
  {
    id: 16, category: 'breakfast', name: 'Eggs Benedict',
    price: null, description: 'Poached eggs on English muffin with ham and hollandaise — brunch royalty.',
    tags: ['egg'],
    image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 17, category: 'breakfast', name: 'Belgian Waffles',
    price: null, description: 'Golden waffles with maple syrup and mixed berries — weekend energy.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- Cold Beverages & Cold Brews ----
  {
    id: 18, category: 'cold-beverages', name: 'Signature Cold Coffee',
    price: 210, description: 'Our signature blend — chilled, creamy, with a hint of cardamom.',
    tags: ['veg'], isBestseller: true,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 19, category: 'cold-beverages', name: 'Cherry Coconut Spritzer',
    price: 210, description: 'Sparkling cherry and coconut — tropical refreshment in a glass.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 20, category: 'cold-beverages', name: 'Blood Orange Rosemary Spritzer',
    price: 210, description: 'Bitter-sweet blood orange with aromatic rosemary — sophisticated and crisp.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 21, category: 'cold-beverages', name: 'Cola Float',
    price: 150, description: 'Classic cola with a scoop of vanilla ice cream — nostalgia in a tall glass.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/4051471/pexels-photo-4051471.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

  // ---- Hot Beverages ----
  {
    id: 22, category: 'hot-beverages', name: 'Cappuccino',
    price: null, description: 'Double espresso with silky microfoam and a dusting of cocoa.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 23, category: 'hot-beverages', name: 'Hot Chocolate',
    price: null, description: 'Molten Belgian chocolate in steamed milk with marshmallow float.',
    tags: ['veg'],
    image: 'https://images.pexels.com/photos/849645/pexels-photo-849645.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export const bestsellers = menuItems.filter((i) => i.isBestseller)

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
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 2, category: 'cakes', name: 'Red Velvet Cake w/ Cream Cheese',
    price: 700, description: 'Classic red velvet with a velvety cream cheese frosting and crumbly edge.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 3, category: 'cakes', name: 'Ferrero Rocher Cake',
    price: null, description: 'Rich hazelnut-chocolate layers with crushed Ferrero Rocher — a crowd favourite.',
    tags: ['egg'], isNew: true,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 4, category: 'cakes', name: 'Sinful Chocolate Cake',
    price: null, description: 'For the true believer — dense, fudgy, unapologetically chocolate.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1607478900766-48d4b1e94b34?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 5, category: 'cakes', name: 'Opium Chocolate Mousse Cake',
    price: null, description: 'Addictively light chocolate mousse on a dark cocoa base — you have been warned.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- Dessert & Cupcakes ----
  {
    id: 6, category: 'desserts', name: 'Mango Mascarpone',
    price: null, description: 'Seasonal Alphonso mango layered with airy mascarpone cream — a summer ritual.',
    tags: ['veg'], isSeasonal: true,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 7, category: 'desserts', name: 'Triple Layered Chocolate Mousse Pastry',
    price: null, description: 'Single-portion version of our bestseller cake. Same indulgence, less commitment.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1606312618923-3d3b1d7ed51a?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 8, category: 'desserts', name: 'Chocolate Blueberry Pastry',
    price: null, description: 'Dark chocolate and tart blueberry — an underrated pairing that works beautifully.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- Viennoiserie & Brownies ----
  {
    id: 9, category: 'viennoiserie', name: 'Classic Croissant',
    price: null, description: 'Laminated French-style butter croissant — crisp shell, honeycomb crumb.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038024a?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 10, category: 'viennoiserie', name: 'Double Chocolate Brownie',
    price: null, description: 'Dense, fudgy Belgian chocolate brownie with a crackled top — gooey centre.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- Cookies ----
  {
    id: 11, category: 'cookies', name: 'Almond Biscotti',
    price: null, description: 'Twice-baked Italian almond biscuits — perfect for dipping into your coffee.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1542574276516-c8e1207d7661?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 12, category: 'cookies', name: 'Double Chocolate Chip Cookies',
    price: null, description: 'Soft-baked with dark chocolate chunks — comfort in cookie form.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- Sandwich & Burger ----
  {
    id: 13, category: 'burgers', name: 'Paneer Makhani Burger',
    price: 300, description: 'Grilled paneer tikka in a creamy makhani sauce, onions, and mint chutney.',
    tags: ['veg'], isBestseller: true,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 14, category: 'burgers', name: 'Club Sandwich',
    price: null, description: 'Classic triple-decker club with grilled chicken, lettuce, tomato, and house mayo.',
    tags: ['nonveg'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- Pasta & Main Course ----
  {
    id: 15, category: 'pasta', name: 'Spaghetti Meatballs',
    price: 500, description: 'House-made pork-beef meatballs in slow-simmered marinara over al dente spaghetti.',
    tags: ['nonveg'],
    image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- All Day Breakfast ----
  {
    id: 16, category: 'breakfast', name: 'Eggs Benedict',
    price: null, description: 'Poached eggs on English muffin with ham and hollandaise — brunch royalty.',
    tags: ['egg'],
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 17, category: 'breakfast', name: 'Belgian Waffles',
    price: null, description: 'Golden waffles with maple syrup and mixed berries — weekend energy.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- Cold Beverages & Cold Brews ----
  {
    id: 18, category: 'cold-beverages', name: 'Signature Cold Coffee',
    price: 210, description: 'Our signature blend — chilled, creamy, with a hint of cardamom.',
    tags: ['veg'], isBestseller: true,
    image: 'https://images.unsplash.com/photo-1525803377221-3e6b2b4893cc?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 19, category: 'cold-beverages', name: 'Cherry Coconut Spritzer',
    price: 210, description: 'Sparkling cherry and coconut — tropical refreshment in a glass.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e5ffa?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 20, category: 'cold-beverages', name: 'Blood Orange Rosemary Spritzer',
    price: 210, description: 'Bitter-sweet blood orange with aromatic rosemary — sophisticated and crisp.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e5ffa?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 21, category: 'cold-beverages', name: 'Cola Float',
    price: 150, description: 'Classic cola with a scoop of vanilla ice cream — nostalgia in a tall glass.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1558857563-3718e4dfaf55?q=80&w=400&h=320&fit=crop&auto=format',
  },

  // ---- Hot Beverages ----
  {
    id: 22, category: 'hot-beverages', name: 'Cappuccino',
    price: null, description: 'Double espresso with silky microfoam and a dusting of cocoa.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53e?q=80&w=400&h=320&fit=crop&auto=format',
  },
  {
    id: 23, category: 'hot-beverages', name: 'Hot Chocolate',
    price: null, description: 'Molten Belgian chocolate in steamed milk with marshmallow float.',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=400&h=320&fit=crop&auto=format',
  },
]

export const bestsellers = menuItems.filter((i) => i.isBestseller)

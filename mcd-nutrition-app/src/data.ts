export interface Nutrition {
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'burger' | 'snack' | 'drink' | 'dessert';
  emoji: string;
  isNew?: boolean;
  nutrition: Nutrition;
}

export const menuItems: MenuItem[] = [
    // 新品上新
    { id: 'n1', name: '泰会浪大鸡排堡', price: 27, category: 'burger', emoji: '🍔', isNew: true, nutrition: { kcal: 510, protein: 25, fat: 25, carbs: 45 } },
    { id: 'n2', name: '泰能打打抛猪猪堡', price: 25, category: 'burger', emoji: '🍛', isNew: true, nutrition: { kcal: 450, protein: 20, fat: 20, carbs: 40 } },
    { id: 'n3', name: '泰兰德蘸酱鸡球', price: 16.5, category: 'snack', emoji: '🍗', isNew: true, nutrition: { kcal: 250, protein: 15, fat: 12, carbs: 20 } },
    { id: 'n4', name: '萌橘醒醒气泡美式', price: 20, category: 'drink', emoji: '🍊', isNew: true, nutrition: { kcal: 110, protein: 1, fat: 0, carbs: 28 } },
    
    // 安格斯系列
    { id: 'a1', name: '培根安格斯厚牛堡', price: 37, category: 'burger', emoji: '🍔', nutrition: { kcal: 620, protein: 35, fat: 34, carbs: 42 } },
    { id: 'a2', name: '菠萝安格斯厚牛堡', price: 37, category: 'burger', emoji: '🍍', nutrition: { kcal: 605, protein: 32, fat: 31, carbs: 48 } },

    // 经典汉堡
    { id: 'h1', name: '巨无霸', price: 29, category: 'burger', emoji: '🍔', nutrition: { kcal: 513, protein: 27, fat: 26, carbs: 42 } },
    { id: 'h2', name: '麦辣鸡腿汉堡', price: 25.5, category: 'burger', emoji: '🌶️', nutrition: { kcal: 485, protein: 24, fat: 24, carbs: 42 } },
    { id: 'h3', name: '板烧鸡腿堡', price: 26.5, category: 'burger', emoji: '🍗', nutrition: { kcal: 391, protein: 23, fat: 17, carbs: 35 } },
    { id: 'h4', name: '不素之霸双层牛堡', price: 29, category: 'burger', emoji: '🥓', nutrition: { kcal: 580, protein: 31, fat: 29, carbs: 36 } },
    { id: 'h5', name: '双层吉士汉堡', price: 25, category: 'burger', emoji: '🧀', nutrition: { kcal: 429, protein: 27, fat: 22, carbs: 31 } },
    { id: 'h6', name: '麦香鱼', price: 24, category: 'burger', emoji: '🐟', nutrition: { kcal: 325, protein: 16, fat: 13, carbs: 35 } },
    
    // 小食
    { id: 's1', name: '中薯条', price: 15.5, category: 'snack', emoji: '🍟', nutrition: { kcal: 289, protein: 4, fat: 12, carbs: 38 } },
    { id: 's2', name: '麦辣鸡翅(2块)', price: 16, category: 'snack', emoji: '🍗', nutrition: { kcal: 224, protein: 13, fat: 15, carbs: 9 } },
    { id: 's3', name: '麦乐鸡(5块)', price: 15, category: 'snack', emoji: '🍖', nutrition: { kcal: 213, protein: 12, fat: 12, carbs: 13 } },
    { id: 's4', name: '红油添香小酥肉', price: 15.5, category: 'snack', emoji: '🐷', nutrition: { kcal: 310, protein: 18, fat: 18, carbs: 15 } },
    { id: 'p1', name: '苹果香蕉双拼迷你派', price: 10, category: 'snack', emoji: '🥧', isNew: true, nutrition: { kcal: 160, protein: 2, fat: 8, carbs: 22 } },
    { id: 'p2', name: '红豆年糕风味派', price: 10, category: 'snack', emoji: '🥧', isNew: true, nutrition: { kcal: 180, protein: 3, fat: 7, carbs: 25 } },
    
    // 饮品
    { id: 'd1', name: '可口可乐(中)', price: 11, category: 'drink', emoji: '🥤', nutrition: { kcal: 147, protein: 0, fat: 0, carbs: 36 } },
    { id: 'd4', name: '麦咖啡™冰奶铁(大)', price: 25, category: 'drink', emoji: '☕', nutrition: { kcal: 162, protein: 9, fat: 7, carbs: 15 } },
    { id: 'd5', name: '浓浓抹茶雪冰(大)', price: 27, category: 'drink', emoji: '🍵', nutrition: { kcal: 339, protein: 8, fat: 12, carbs: 48 } },
    { id: 'd6', name: '浓浓黑巧雪冰(大)', price: 27, category: 'drink', emoji: '🍫', nutrition: { kcal: 444, protein: 11, fat: 14, carbs: 65 } },
    { id: 'd8', name: '纯牛奶(盒装)', price: 11.5, category: 'drink', emoji: '🥛', nutrition: { kcal: 129, protein: 7, fat: 7, carbs: 10 } },
    
    // 甜品
    { id: 't1', name: '奥利奥麦旋风', price: 16, category: 'dessert', emoji: '🌀', nutrition: { kcal: 266, protein: 5, fat: 9, carbs: 40 } },
    { id: 't2', name: '云朵棉花糖麦旋风', price: 17, category: 'dessert', emoji: '☁️', isNew: true, nutrition: { kcal: 280, protein: 4, fat: 10, carbs: 45 } },
];

export const categories = [
  { id: 'all', name: '全部', emoji: '🍴' },
  { id: 'burger', name: '汉堡', emoji: '🍔' },
  { id: 'snack', name: '小食', emoji: '🍟' },
  { id: 'drink', name: '饮品', emoji: '🥤' },
  { id: 'dessert', name: '甜品', emoji: '🍦' }
];

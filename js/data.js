
/* data.js - Helpers, product data and app state */

const $ = s => document.querySelector(s);

const E = s => String(s ?? "").replace(/[&<>"']/g, c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[c]));

const R = n => "₹" + Number(n).toLocaleString("en-IN");

const K = {
  p: "cp_p2",
  o: "cp_o",
  c: "cp_c2",
  s: "cp_s"
};

const CATS = [
  "Chaipatti",
  "Masala Chai",
  "Green & Herbal",
  "Chai Accessories",
  "Gift Packs"
];

const HUE = [130, 30, 100, 200, 340];
const ST = ["New", "Packed", "Shipped", "Delivered", "Cancelled"];

const ld = (k, d) => {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : d;
  } catch (e) {
    return d;
  }
};

const sv = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (e) {}
};

const SEED = [
  [
    "Assam CTC Strong Chaipatti 1 kg",
    "Chaipatti", 360, 450, 80, 4.5, "🍃", 130,
    "Bold, dark and full-bodied. Made for a rich, milky cup of kadak chai.",
    "Baba Tea image/Baba Graduate Assam CTC Tea Pouch.png"
  ],
  [
    "Premium Dust Chaipatti 500 g",
    "Chaipatti", 155, 199, 120, 4.3, "🍂", 25,
    "Fine grains that brew fast with a strong colour. Ideal for everyday chai.",
    "Baba Tea image/Baba Graduate Premium Dust Tea Packaging.png"
  ],
  [
    "Darjeeling Long Leaf Tea 250 g",
    "Chaipatti", 320, 399, 40, 4.6, "🌿", 95,
    "Delicate and floral with a light, golden cup. Best enjoyed without milk.",
    "Baba Tea image/Baba Graduate Darjeeling Tea Pouch.png"
  ],
  [
    "Elaichi Chaipatti 250 g",
    "Masala Chai", 140, 175, 90, 4.4, "🍃", 45,
    "Strong tea blended with real green cardamom for a fragrant, comforting cup.",
    "Baba Tea image/Baba Graduate Elaichi Chai Packaging.png"
  ],
  [
    "Adrak Masala Chai 250 g",
    "Masala Chai", 135, 170, 70, 4.2, "🌿", 20,
    "A warming blend of ginger, black pepper and clove for cold mornings.",
    "Baba Tea image/Baba Graduate Adrak Masala Chai.png"
  ],
  [
    "Tulsi Green Tea 100 g",
    "Green & Herbal", 120, 160, 60, 4.1, "🌱", 110,
    "Green tea with holy basil. Light, soothing and refreshing.",
    "Baba Tea image/Baba Graduate Tulsi Green Tea Pouch.png"
  ],
  [
    "Kashmiri Kahwa 100 g",
    "Green & Herbal", 199, 260, 35, 4.5, "🍵", 15,
    "A traditional blend of saffron, almond and cinnamon.",
    "Baba Tea image/Premium Kashmiri Kahwa Tea Pouch.png"
  ],
  [
    "Stainless Steel Tea Strainer",
    "Chai Accessories", 49, 80, 200, 4.2, "🥄", 210,
    "Rust-free stainless steel with a long, comfortable handle.",
    "Baba Tea image/Baba Graduate Tea Strainer Packaging.png"
  ],
  [
    "Kulhad Set of 6",
    "Chai Accessories", 199, 299, 50, 4.6, "🍵", 18,
    "Handcrafted clay cups that give chai its earthy, authentic taste.",
    "Baba Tea image/Baba Graduate Kulhad Chai Set.png"
  ],
  [
    "Stainless Steel Tea Kettle 1 L",
    "Chai Accessories", 349, 499, 25, 4.3, "🫖", 200,
    "Heavy base for even heating. Brews 4–5 cups at a time.",
    "Baba Tea image/Baba Graduate Chai Kettle Packaging.png"
  ],
  [
    "Chai Lover Gift Box",
    "Gift Packs", 599, 799, 20, 4.7, "🎁", 340,
    "250 g chaipatti, cardamom and two kulhads in a ready-to-gift box.",
    "Baba Tea image/Baba Graduate Chai Lover Gift Box.png"
  ],
  [
    "Chaipatti Value Combo 2 kg",
    "Gift Packs", 650, 820, 45, 4.4, "📦", 30,
    "Two 1 kg packs of Assam CTC. Great value for homes and tea stalls.",
    "Baba Tea image/Assam CTC Chai Value Combo Packaging.png"
  ]
].map((a, i) => ({
  id: "p" + (i + 1),
  name: a[0],
  cat: a[1],
  price: a[2],
  mrp: a[3],
  stock: a[4],
  rating: a[5],
  emoji: a[6],
  hue: a[7],
  desc: a[8],
  img: a[9]
}));

let P = ld(K.p, null) || SEED.map(p => ({ ...p }));
let O = ld(K.o, []);
let C = ld(K.c, {});

let S = {
  name: "Baba Graduate Chaipatti Wala",
  wa: "",
  free: 499,
  fee: 40,
  pin: "1234",
  ...ld(K.s, {})
};

if (/ChaiPatti Bazaar|बाबा/.test(S.name)) {
  S.name = "Baba Graduate Chaipatti Wala";
}

let cat = "All",
    q = "",
    sort = "rel",
    view = "shop",
    tab = "Products",
    admin = false,
    edit = null,
    mode = null,
    done = null,
    tt,
    cur = null;

# Baba Graduate Chaipatti Wala

An online store for chaipatti, masala chai and tea accessories. Plain HTML, CSS and JavaScript, with no build step.

## Features
- Product grid with search, categories and sorting
- Product detail page with Add to cart and Buy now
- Cart, checkout (Cash on Delivery or UPI on delivery) and WhatsApp order message
- Customer accounts (sign up, login, forgot password, Google demo), wishlist, rewards points, order history
- Product reviews with star ratings and feature tags
- Online payment step (demo gateway) and Cash on Delivery
- English and Hindi, 24x7 customer care panel, no-returns notice for food items
- Seller panel: add, edit and delete products (with photo upload), track orders, change store settings

## Project structure
```
index.html        Page layout
css/styles.css    All styling (light and dark mode)
js/data.js        Helpers, product data (SEED) and app state
js/shop.js        Product cards, grid and cart counter
js/cart.js        Cart, checkout, order placement, seller login
js/admin.js       Seller panel
js/product.js     Product detail page
js/app.js         Routing, click handlers and start-up
assets/           Favicon and images
```

## Run locally
Double-click `index.html`, or run `npm start` and open the address shown.

## Seller panel
Click **Seller login**. The default PIN is `1234`. Change it, and set your WhatsApp number, under **Settings**.

## Edit the sample products
Open `js/data.js` and change the `SEED` list, or manage products from the seller panel.

## Go live
Upload this whole folder to a static host such as Netlify Drop or GitHub Pages.

## Important
Products and orders are stored in each visitor's browser (localStorage). To receive orders from all customers in one place, a backend with a database is needed.

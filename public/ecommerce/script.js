/* =========================================================
   HB Creations - Ecommerce script
   Handles: product catalog, cart (localStorage), single
   product page, mobile navigation, forms, toast messages.
   ========================================================= */

const PRODUCTS = {
    p1: {
        id: 'p1',
        name: 'Blush Heart Bracelet',
        category: 'Bracelets',
        price: 120,
        img: 'img/products/PSX_20240606_162336.jpg',
        gallery: ['img/products/PSX_20240606_162336.jpg'],
        desc: 'Handmade pink heart bracelet made with love. Soft blush tones and a delicate heart charm make this piece perfect for everyday styling and gifting.'
    },
    p2: {
        id: 'p2',
        name: 'Avocado Charm Bracelet',
        category: 'Bracelets',
        price: 150,
        img: 'img/products/PSX_20240606_162501.jpg',
        gallery: ['img/products/PSX_20240606_162501.jpg'],
        desc: 'A fresh green bracelet with a cute avocado charm. Playful, fun and a lovely accessory for everyday outfits.'
    },
    p4: {
        id: 'p4',
        name: 'Golden Heart Bracelet',
        category: 'Bracelets',
        price: 140,
        img: 'img/products/PSX_20240606_163209.jpg',
        gallery: ['img/products/PSX_20240606_163209.jpg'],
        desc: 'Warm golden tones with a dainty heart accent. A beautiful gift for someone special or a treat for yourself.'
    },
    p5: {
        id: 'p5',
        name: 'Memories Pearl Bracelet',
        category: 'Bracelets',
        price: 180,
        img: 'img/products/PSX_20240624_184421.jpg',
        gallery: ['img/products/PSX_20240624_184421.jpg'],
        desc: 'A timeless pearl bracelet that captures everyday memories. Elegant, versatile and built to last.'
    },
    p6: {
        id: 'p6',
        name: 'Amber Stone Bracelet',
        category: 'Bracelets',
        price: 200,
        img: 'img/products/PSX_20240705_173604.jpg',
        gallery: ['img/products/PSX_20240705_173604.jpg'],
        desc: 'Warm amber beads hand-picked for color and shine. This statement piece adds a cozy, earthy touch to any look.'
    },
    p7: {
        id: 'p7',
        name: 'Fresh Pearl Bracelet',
        category: 'Bracelets',
        price: 150,
        img: 'img/products/PSX_20240723_182549 (1).jpg',
        gallery: ['img/products/PSX_20240723_182549 (1).jpg'],
        desc: 'Clean, fresh and effortlessly chic. A signature HB Creation made with quality pearls and a secure clasp.'
    },
    p8: {
        id: 'p8',
        name: 'Ocean Breeze Bracelet',
        category: 'Bracelets',
        price: 120,
        img: 'img/products/PSX_20240723_182855.jpg',
        gallery: ['img/products/PSX_20240723_182855.jpg'],
        desc: 'Cool blues inspired by the Mediterranean sea. A light and sunny piece for relaxed, everyday styling.'
    },
    p9: {
        id: 'p9',
        name: 'Starry Night Bracelet',
        category: 'Bracelets',
        price: 160,
        img: 'img/products/PSX_20240723_182946.jpg',
        gallery: ['img/products/PSX_20240723_182946.jpg'],
        desc: 'A deep, dreamy design with shimmering accents that recall a starry sky. Handmade and unique.'
    },
    p10: {
        id: 'p10',
        name: 'Crystal Drop Necklace',
        category: 'Necklaces',
        price: 250,
        img: 'img/necklace.png',
        gallery: ['img/necklace.png', 'img/necklace-Photoroom.png', 'img/necklace bag.png'],
        desc: 'A sparkling crystal drop necklace that catches the light with every move. Handcrafted to feel light and delicate on the skin.'
    },
    p11: {
        id: 'p11',
        name: 'Blue Charm Bracelet',
        category: 'Bracelets',
        price: 140,
        img: 'img/blue bracelet.jpg',
        gallery: ['img/blue bracelet.jpg'],
        desc: 'A cool blue bracelet with bright, cheerful beads. Handmade, lightweight and made to be worn every day.'
    },
    p12: {
        id: 'p12',
        name: 'Pink Amethyst Pearl Necklace',
        category: 'Necklaces',
        price: 260,
        img: 'img/pink amethyst perle necklace.jpg',
        gallery: ['img/pink amethyst perle necklace.jpg'],
        desc: 'A soft pink amethyst and pearl necklace with a delicate, feminine look. Handcrafted with care for special occasions.'
    },
    p13: {
        id: 'p13',
        name: 'Watermelon Charm Bracelet',
        category: 'Bracelets',
        price: 130,
        img: 'img/watermelon bracelet.jpg',
        gallery: ['img/watermelon bracelet.jpg'],
        desc: 'A playful watermelon-themed bracelet that brings summer vibes all year round. Cute, colorful and full of personality.'
    },
    p14: {
        id: 'p14',
        name: 'Pink Flowers Bracelet',
        category: 'Bracelets',
        price: 150,
        img: 'img/pink flowers bracelet.jpg',
        gallery: ['img/pink flowers bracelet.jpg'],
        desc: 'A sweet pink flower bracelet, hand-assembled bead by bead. A lovely everyday piece with a soft romantic touch.'
    },
    p15: {
        id: 'p15',
        name: 'Green Flowers Bracelet',
        category: 'Bracelets',
        price: 150,
        img: 'img/green flowers bracelet.jpg',
        gallery: ['img/green flowers bracelet.jpg'],
        desc: 'A fresh green flower bracelet that pairs fun with elegance. Handmade with quality beads that keep their shine.'
    }
};

const CART_KEY = 'hb_cart';
const FREE_SHIPPING_MIN = 300;
const SHIPPING_FEE = 30;
const COUPONS = { HB10: 0.10, HB20: 0.20 };

/* ---------------- helpers ---------------- */

function formatDA(amount) {
    return amount.toLocaleString('en-US') + ' DA';
}

function getCart() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount() {
    return getCart().reduce(function (sum, item) {
        return sum + (Number(item.qty) || 1);
    }, 0);
}

function updateCartBadge() {
    var count = cartCount();
    document.querySelectorAll('.cart-badge').forEach(function (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    });
}

function showToast(message) {
    var toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
        toast.classList.remove('show');
    }, 2600);
}

/* ---------------- cart actions ---------------- */

function addToCart(id, name, price, img, qty) {
    var cart = getCart();
    var existing = cart.find(function (item) { return item.id === id; });
    var quantity = Math.max(1, Math.floor(Number(qty) || 1));

    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push({ id: id, name: name, price: price, img: img, qty: quantity });
    }

    saveCart(cart);
    updateCartBadge();
    showToast(name + ' added to your cart');
}

function removeFromCart(id) {
    var cart = getCart().filter(function (item) { return item.id !== id; });
    saveCart(cart);
    updateCartBadge();
    renderCart();
}

function setQuantity(id, qty) {
    var cart = getCart();
    var item = cart.find(function (i) { return i.id === id; });
    if (item) {
        item.qty = Math.max(1, Math.floor(Number(qty) || 1));
        saveCart(cart);
        renderCart();
    }
}

/* ---------------- product card markup ---------------- */

function proCardHTML(product) {
    return '<div class="pro" data-id="' + product.id + '">' +
        '<a class="pro-img" href="sproduct.html?id=' + product.id + '">' +
        '<img src="' + product.img + '" alt="' + product.name + '"></a>' +
        '<div class="description">' +
        '<span>' + product.category + '</span>' +
        '<h5><a href="sproduct.html?id=' + product.id + '">' + product.name + '</a></h5>' +
        '<div class="star">' +
        '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>' +
        '<i class="fas fa-star"></i><i class="fas fa-star"></i>' +
        '</div>' +
        '<h4>' + formatDA(product.price) + '</h4>' +
        '</div>' +
        '<a href="#" class="cart-btn" data-add="' + product.id + '"' +
        ' data-name="' + product.name + '"' +
        ' data-price="' + product.price + '"' +
        ' data-img="' + product.img + '">' +
        '<i class="fal fa-shopping-cart"></i>' +
        '</a>' +
        '</div>';
}

/* ---------------- single product page ---------------- */

function renderSingleProduct() {
    var container = document.getElementById('single-product');
    if (!container) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');
    var product = PRODUCTS[id] || PRODUCTS.p1;

    container.innerHTML =
        '<div class="single-pro-image">' +
        '<img class="main-img" id="main-img" src="' + product.img + '" alt="' + product.name + '">' +
        '<div class="small-img-group" id="small-img-group"></div>' +
        '</div>' +
        '<div class="single-pro-details">' +
        '<div class="breadcrumb">' +
        '<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / ' + product.name +
        '</div>' +
        '<h4>' + product.category + '</h4>' +
        '<h2>' + product.name + '</h2>' +
        '<h4>' + formatDA(product.price) + '</h4>' +
        '<select id="variant">' +
        '<option value="standard">Standard</option>' +
        '<option value="gift">Gift Wrapping (+200 DA)</option>' +
        '<option value="personalized">Personalized (+500 DA)</option>' +
        '</select>' +
        '<div>' +
        '<input type="number" id="qty-input" value="1" min="1">' +
        '<button class="add-btn" id="add-to-cart-btn">Add To Cart</button>' +
        '</div>';

    document.title = product.name + ' | HB Creations';

    var smallGroup = document.getElementById('small-img-group');
    var thumbs = product.gallery && product.gallery.length ? product.gallery : [product.img];

    if (thumbs.length < 2) {
        smallGroup.style.display = 'none';
    } else {
        smallGroup.innerHTML = thumbs.map(function (src) {
            return '<div class="small-img-col"><img src="' + src + '" alt="' + product.name + ' view"></div>';
        }).join('');

        smallGroup.querySelectorAll('img').forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                document.getElementById('main-img').src = thumb.src;
            });
        });
    }

    document.getElementById('add-to-cart-btn').addEventListener('click', function () {
        var qty = document.getElementById('qty-input');
        addToCart(product.id, product.name, product.price, product.img, qty.value);
    });

    renderRelated(product.id);
}

function renderRelated(currentId) {
    var container = document.getElementById('related-container');
    if (!container) return;

    var related = [];
    Object.keys(PRODUCTS).forEach(function (k) {
        if (k !== currentId && related.length < 4) {
            related.push(PRODUCTS[k]);
        }
    });

    container.innerHTML = related.map(proCardHTML).join('');
}

/* ---------------- cart page ---------------- */

function renderCart() {
    var body = document.getElementById('cart-body');
    if (!body) return;

    var cart = getCart();
    var wrap = document.getElementById('cart-wrap');
    var empty = document.getElementById('cart-empty');

    if (cart.length === 0) {
        wrap.style.display = 'none';
        empty.style.display = 'block';
        return;
    }

    wrap.style.display = 'block';
    empty.style.display = 'none';

    body.innerHTML = cart.map(function (item) {
        return '<tr>' +
            '<td><img src="' + item.img + '" alt="' + item.name + '"></td>' +
            '<td>' + item.name + '</td>' +
            '<td>' + formatDA(item.price) + '</td>' +
            '<td><input type="number" min="1" class="qty-input" data-id="' + item.id + '" value="' + item.qty + '"></td>' +
            '<td class="line-total" data-id="' + item.id + '">' + formatDA(item.price * item.qty) + '</td>' +
            '<td><button class="remove-btn" data-remove="' + item.id + '" title="Remove"><i class="fas fa-times"></i></button></td>' +
            '</tr>';
    }).join('');

    updateCartTotals();
}

function updateCartTotals() {
    var subtotalEl = document.getElementById('cart-subtotal');
    var shippingEl = document.getElementById('cart-shipping');
    var totalEl = document.getElementById('cart-total');
    if (!subtotalEl || !totalEl) return;

    var cart = getCart();
    var subtotal = cart.reduce(function (sum, item) {
        return sum + (Number(item.price) * Number(item.qty));
    }, 0);

    var applied = document.getElementById('coupon-tag');
    var discount = 0;
    if (applied && applied.value) {
        discount = Math.round(subtotal * parseFloat(applied.value));
    }

    var shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE;

    subtotalEl.textContent = formatDA(subtotal);
    shippingEl.textContent = shipping === 0 ? 'Free' : formatDA(shipping);
    totalEl.textContent = formatDA(subtotal - discount + shipping);
}

/* ---------------- forms ---------------- */

function initForms() {
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            contactForm.reset();
            showToast('Thank you! Your message has been sent.');
        });
    }

    var newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            newsletterForm.reset();
            showToast('Thanks for subscribing to our newsletter!');
        });
    }
}

/* ---------------- global events ---------------- */

function initEvents() {
    document.addEventListener('click', function (e) {
        var bar = e.target.closest('#bar');
        var close = e.target.closest('#close');
        var navbar = document.getElementById('navbar');
        var addBtn = e.target.closest('[data-add]');
        var removeBtn = e.target.closest('[data-remove]');
        var couponBtn = e.target.closest('#apply-coupon');
        var checkoutBtn = e.target.closest('#checkout-btn');

        if (bar && navbar) {
            navbar.classList.add('active');
        } else if (close && navbar) {
            e.preventDefault();
            navbar.classList.remove('active');
        } else if (navbar && e.target.closest('#navbar a:not(#close)')) {
            navbar.classList.remove('active');
        }

        if (addBtn) {
            e.preventDefault();
            addToCart(addBtn.dataset.add, addBtn.dataset.name, Number(addBtn.dataset.price), addBtn.dataset.img, 1);
        }

        if (removeBtn) {
            e.preventDefault();
            removeFromCart(removeBtn.dataset.remove);
        }

        if (couponBtn && document.getElementById('coupon-input')) {
            e.preventDefault();
            var code = document.getElementById('coupon-input').value.trim().toUpperCase();
            var applied = document.getElementById('coupon-tag');

            if (COUPONS[code]) {
                if (applied) applied.value = COUPONS[code].toString();
                var tag = document.getElementById('coupon-feedback');
                if (tag) {
                    tag.style.color = '#088178';
                    tag.textContent = 'Coupon "' + code + '" applied (' + (COUPONS[code] * 100) + '% off)!';
                }
                updateCartTotals();
            } else if (applied) {
                applied.value = '0';
                var fail = document.getElementById('coupon-feedback');
                if (fail) {
                    fail.style.color = '#ef3636';
                    fail.textContent = 'Invalid coupon code. Try HB10 or HB20.';
                }
            }
        }

        if (checkoutBtn) {
            e.preventDefault();
            showToast('Checkout is a demo - keep browsing!');
        }
    });

    document.addEventListener('change', function (e) {
        var qtyInput = e.target.closest('.qty-input');
        if (qtyInput) {
            setQuantity(qtyInput.dataset.id, qtyInput.value);
        }
    });
}

/* ---------------- init ---------------- */

document.addEventListener('DOMContentLoaded', function () {
    updateCartBadge();
    renderSingleProduct();
    renderCart();
    initForms();
    initEvents();

    var yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buy-btn');
    const bundleInputs = document.querySelectorAll('input[name="bundle"]');
    const bundleCards = document.querySelectorAll('.bundle-option');
    const productPrice = document.getElementById('product-price');
    const oldPrice = document.getElementById('old-price');
    const discountTag = document.getElementById('discount-tag');

    const pricingByBundle = {
        1: { price: 45000, oldPrice: 65000, savings: 20000, discount: 31 },
        2: { price: 80000, oldPrice: 130000, savings: 50000, discount: 38 },
        3: { price: 105000, oldPrice: 195000, savings: 90000, discount: 46 }
    };

    const formatCOP = (value) => `$ ${value.toLocaleString('es-CO')} COP`;

    const updatePricingUI = (bundleValue) => {
        const selected = pricingByBundle[bundleValue] || pricingByBundle[1];
        if (productPrice) productPrice.textContent = formatCOP(selected.price);
        if (oldPrice) oldPrice.textContent = formatCOP(selected.oldPrice);
        if (discountTag) {
            discountTag.textContent = `Ahorras $ ${selected.savings.toLocaleString('es-CO')} (${selected.discount}% OFF)`;
        }
    };

    bundleInputs.forEach((input) => {
        input.addEventListener('change', () => {
            bundleCards.forEach((card) => card.classList.remove('active'));
            const parentCard = input.closest('.bundle-option');
            if (parentCard) parentCard.classList.add('active');
            updatePricingUI(input.value);
        });
    });

    updatePricingUI(1);

    buyBtn.addEventListener('click', () => {
        const selectedBundle = document.querySelector('input[name="bundle"]:checked')?.value || '1';
        window.location.href = `checkout.html?bundle=${selectedBundle}`;
    });

    // Handle thumbnail clicks
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked
            this.classList.add('active');
        });
    });
});

function changeImage(src) {
    const mainImg = document.getElementById('main-product-img');
    mainImg.style.opacity = 0;
    
    setTimeout(() => {
        mainImg.src = src;
        mainImg.style.opacity = 1;
    }, 150);
}

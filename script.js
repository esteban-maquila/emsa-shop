document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buy-btn');
    const sizeInputs = document.querySelectorAll('input[name="size"]');
    const errorMsg = document.getElementById('size-error');
    const urgencyMsg = document.getElementById('urgency-message');
    const unitsLeft = document.getElementById('units-left');
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

    // Remove error message when a size is clicked, and trigger urgency
    sizeInputs.forEach(input => {
        input.addEventListener('change', () => {
            errorMsg.style.display = 'none';
            if (urgencyMsg) {
                // Randomize a small number between 2 and 5
                const randomUnits = Math.floor(Math.random() * 4) + 2;
                if (unitsLeft) unitsLeft.textContent = randomUnits;
                urgencyMsg.style.display = 'block';
            }
        });
    });

    buyBtn.addEventListener('click', (e) => {
        let isSizeSelected = false;
        let selectedSize = '';
        
        sizeInputs.forEach(input => {
            if (input.checked) {
                isSizeSelected = true;
                selectedSize = input.value;
            }
        });

        if (!isSizeSelected) {
            e.preventDefault();
            errorMsg.style.display = 'block';
            
            // Highlight sizes with a quick shake animation (optional but good for UX)
            const sizesContainer = document.querySelector('.sizes');
            sizesContainer.style.transform = 'translate(-10px, 0)';
            setTimeout(() => { sizesContainer.style.transform = 'translate(10px, 0)'; }, 50);
            setTimeout(() => { sizesContainer.style.transform = 'translate(-10px, 0)'; }, 100);
            setTimeout(() => { sizesContainer.style.transform = 'translate(10px, 0)'; }, 150);
            setTimeout(() => { sizesContainer.style.transform = 'translate(0, 0)'; }, 200);
            sizesContainer.style.transition = 'transform 0.05s ease-in-out';
            
        } else {
            const selectedBundle = document.querySelector('input[name="bundle"]:checked')?.value || '1';
            // Redirect to checkout with the selected size as parameter
            window.location.href = `checkout.html?size=${selectedSize}&bundle=${selectedBundle}`;
        }
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

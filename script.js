document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buy-btn');
    const sizeInputs = document.querySelectorAll('input[name="size"]');
    const errorMsg = document.getElementById('size-error');
    const urgencyMsg = document.getElementById('urgency-message');
    const unitsLeft = document.getElementById('units-left');

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
            // Redirect to checkout with the selected size as parameter
            window.location.href = `checkout.html?size=${selectedSize}`;
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

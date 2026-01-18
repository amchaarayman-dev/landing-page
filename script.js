// Smooth scroll to order form when floating icon is clicked
document.addEventListener('DOMContentLoaded', function() {
    const floatingIcon = document.querySelector('.floating-order-icon');
    const orderForm = document.getElementById('contactForm');

    if (floatingIcon && orderForm) {
        floatingIcon.addEventListener('click', function() {
            orderForm.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

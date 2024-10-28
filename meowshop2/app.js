document.querySelectorAll('nav ul li a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var sectionId = link.getAttribute('href');
        var section = document.querySelector(sectionId);
        section === null || section === void 0 ? void 0 : section.scrollIntoView({ behavior: 'smooth' });
    });
});
var homeLink = document.querySelector('a[href="#home"]');
var logoLink = document.querySelector('.logo a');
var scrollToTop = function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
homeLink === null || homeLink === void 0 ? void 0 : homeLink.addEventListener('click', scrollToTop);
logoLink === null || logoLink === void 0 ? void 0 : logoLink.addEventListener('click', scrollToTop);
var cart = [];
document.querySelectorAll('.product-item').forEach(function (product) {
    product.addEventListener('click', function () {
        var _a;
        var productName = (_a = product.querySelector('h3')) === null || _a === void 0 ? void 0 : _a.textContent;
        if (productName) {
            cart.push(productName);
            alert(productName + " \u0111\u00E3 \u0111\u01B0\u1EE3c th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng!");
        }
    });
});
document.querySelectorAll('.product-item').forEach(function (product) {
    product.addEventListener('mouseenter', function () {
        product.classList.add('highlight');
    });
    product.addEventListener('mouseleave', function () {
        product.classList.remove('highlight');
    });
});
var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name && email && message) {
        alert("C\u1EA3m \u01A1n " + name + ", ch\u00FAng t\u00F4i \u0111\u00E3 nh\u1EADn \u0111\u01B0\u1EE3c l\u1EDDi nh\u1EAFn c\u1EE7a b\u1EA1n!");
        contactForm.reset();
    }
    else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});

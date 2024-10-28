document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section?.scrollIntoView({ behavior: 'smooth' });
    });
});

const homeLink = document.querySelector('a[href="#home"]');
const logoLink = document.querySelector('.logo a');

const scrollToTop = (event: Event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Cuộn mượt mà
    });
};

homeLink?.addEventListener('click', scrollToTop);
logoLink?.addEventListener('click', scrollToTop);

const cart: string[] = [];

document.querySelectorAll('.product-item').forEach((product) => {
    product.addEventListener('click', () => {
        const productName = product.querySelector('h3')?.textContent;
        if (productName) {
            cart.push(productName);
            alert(`${productName} đã được thêm vào giỏ hàng!`);
        }
    });
});

document.querySelectorAll('.product-item').forEach((product) => {
    product.addEventListener('mouseenter', () => {
        product.classList.add('highlight');
    });
    product.addEventListener('mouseleave', () => {
        product.classList.remove('highlight');
    });
});

const contactForm = document.getElementById('contact-form') as HTMLFormElement;

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    if (name && email && message) {
        alert(`Cảm ơn ${name}, chúng tôi đã nhận được lời nhắn của bạn!`);
        contactForm.reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});

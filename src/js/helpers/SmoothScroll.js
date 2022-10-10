export default class SmoothScroll {
    constructor() {
        this.smoothLinks = document.querySelectorAll('a[href^="#"]');
    }

    init () {
        this.smoothLinks.forEach(link => this.addSmoothBehavior(link));
    }

    addSmoothBehavior(link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}
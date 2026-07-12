/* ═══════════════════════════════════════
   JENNY HAYMORE — HAYMORE HAPPY HOMES
   Site Scripts
   ═══════════════════════════════════════ */

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('open');
    });
});

// Keep review copy and privacy-safe names consistent wherever the carousel appears.
const reviews = [
    ['Heather E.', 'We absolutely loved working with Jenny Haymore as our realtor! We had unique needs and felt like Jenny did not rush us and truly listened. She was warm, professional, customized, and detailed, and went above and beyond before, during, and even after we closed.'],
    ['Allison and Art C.', 'If you are not working with Jenny to buy or sell, you are missing out! From staging to curb appeal to picking up packages after closing, she helped us have a low-stress selling experience. She listens, remembers, and follows through on her commitments.'],
    ['Michael K.', 'Jenny is amazing! If you are a seller looking for a realtor who is on top of everything and meticulously prepared, she is who you want. She goes above and beyond.'],
    ['Katie O.', 'Jenny truly wanted us to find our home! She gave me a lot of confidence throughout the entire buying process, and even after we owned our home for over a year, she still took care of us!'],
    ['Courtney M.', 'Jenny simplified everything and made it feel so easy. We were overwhelmed and intimidated by all of our options. She helped us close in just 30 days!'],
    ['Melissa B.', 'I just wanted to thank you for all you did for us! Truly, you are remarkable. Above and beyond does not even cover it.'],
    ['Derek D.', 'We had a really great experience working with Jenny. She was super helpful throughout the whole process and always made herself available when I had questions or needed advice. Buying and selling a home can be stressful, but she made everything so much easier. She was honest, patient, and really cared about helping us make the right decisions.'],
    ['Michael B.', 'Personable, reliable, and knowledgeable. Will help guide you through entire process.'],
    ['Steve C.', 'Jenny is truly exceptional. She genuinely cares about her clients and always prioritizes their best interests. I worked with her as a lender on a transaction, and she was incredibly proactive and collaborative. Jenny ensured everything was handled smoothly, turning it into a team effort to close on time without issues.'],
    ['Paige J.', 'AMAZING!! She was very professional while also being friendly. She went above and beyond for me and my family. She knew so much and gave me confidence in the whole process. We got a great price for our home and it only took one weekend!'],
    ['Susie D.', 'If you need a great realtor, Jenny Haymore is the person you need. She is so professional and on top of everything that needs to be done. The BEST and most helpful realtor we have ever used. Plus, she sold our house in two weeks!'],
    ['Gavin O.', 'Jenny did an amazing job helping us buy our first home. From house searching and inspections to closing, she made the process smooth and easy. She was knowledgeable, helpful, and responsive to all of our questions.'],
    ['Aaron and Paula W.', 'We had such a great experience with Jenny Haymore while selling our home. She was kind, knowledgeable, competent, ethical, reliable, and professional. She listened to our concerns, kept us informed, and worked tirelessly to make selling our home easy.'],
    ['Paul C.', 'Jenny was fantastic to work with. We had a limited time frame to find a house, and she worked hard to help us find a place that was perfect for us. She had our best interests at heart and was kind, knowledgeable, and respectful.'],
    ['Mike and Linda B.', 'We were new to Oklahoma, and Jenny came highly recommended. She quickly established herself as qualified, knowledgeable, and experienced. It was clear she was willing to go the extra mile, making the whole process easy and stress-free.'],
    ['Olsen', 'I do not know what we would have done without Jenny! She listened to all of our needs, was attentive throughout the entire process, and made our first home buying journey an enormous success. We will continue to use her for future buying and selling.'],
    ['David K.', 'Now to address the best realtor in the business. Jenny, you have gone far and above what anyone would say a realtor does. It shows you really care and are genuinely happy not only to help one family, but in this case 3. We are incredibly grateful and could not be happier that you chose us to work with. Thank you.']
];

document.querySelectorAll('.review-track').forEach((track) => {
    track.innerHTML = reviews.map(([name, review]) => `
        <article class="review-card">
            <div class="stars" aria-label="Five out of five stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>${review}</p>
            <p class="review-name">${name}</p>
        </article>
    `).join('');

    const carousel = document.createElement('div');
    carousel.className = 'review-carousel';
    track.parentElement.insertBefore(carousel, track);
    carousel.appendChild(track);

    ['previous', 'next'].forEach((direction) => {
        const control = document.createElement('button');
        control.className = `review-control ${direction}`;
        control.type = 'button';
        control.setAttribute('aria-label', `${direction === 'next' ? 'Next' : 'Previous'} reviews`);
        control.title = `${direction === 'next' ? 'Next' : 'Previous'} reviews`;
        control.innerHTML = direction === 'next' ? '&rarr;' : '&larr;';
        control.addEventListener('click', () => {
            track.scrollBy({ left: (direction === 'next' ? 1 : -1) * track.clientWidth * 0.9, behavior: 'smooth' });
        });
        carousel.appendChild(control);
    });
});

document.querySelectorAll('[data-staging-track]').forEach((track) => {
    const controls = track.closest('.staging-showcase')?.querySelectorAll('[data-staging-direction]') || [];
    controls.forEach((control) => {
        control.addEventListener('click', () => {
            const direction = control.dataset.stagingDirection === 'next' ? 1 : -1;
            track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: 'smooth' });
        });
    });
});


// Lazy load images
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

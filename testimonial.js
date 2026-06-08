const testimonials = [
{
    text: "Rei has been an absolute pleasure to work with! She's very knowledgeable and responsive. She's skilled at setting up Google Ads campaigns and writing effective ad copy. She also helped me set up a Google Tag Manager integration. I highly recommend her!",
    name: "Natalie Sowards",
    title: "Consultant, Evolve Growth Marketing",
    logo: "https://lightgray-porcupine-487444.hostingersite.com/wp-content/uploads/2026/06/evolve_growth_marketing_logo.jpg"
},
{
    text: "Working with Rei is having a very good way of works. She understands our problematics and propose custom solutions that avoid us back and forth. Results of her works is great.",
    name: "Emilie Le Roux",
    title: "Senior SEO Specialist, Fabernovel",
    logo: "https://lightgray-porcupine-487444.hostingersite.com/wp-content/uploads/2026/06/Fabernovel_logo_normal-300x144.avif"
},
{
    text: "Rei played a pivotal role in our regional expansion by building a preference center for the entire APAC region. This project didn't just solve an immediate need; it enabled us to build a long-term CRM strategy. Her efficiency, reliability, and ability to use customer behavior data to drive business results were truly impressive.",
    name: "Yan Lau",
    title: "Senior CRM Manager, lululemon",
    logo: "https://lightgray-porcupine-487444.hostingersite.com/wp-content/uploads/2026/06/Lululemon-1000x1000px-300x145.avif"
},
{
    text: "Rei has been a fabulous support for Pramata's marketing operations and automation initiatives as well as our lead lifecycle reporting. She has designed and delivered strategic and tactical solutions to complex problems as the demand gen team was building out everything from the ground up! She's whipped our Pardot instance into shape, implemented much-needed utm tracking, and built out marketing automation to get our leads where they need to be WITH the right tracking information. I lean on Rei for recommendations and hands-on help for our marketing automation challenges with full confidence - we couldn't do this without her.",
    name: "Laurel Ackerman",
    title: "Director of Demand Generation, Pramata",
    logo: "https://lightgray-porcupine-487444.hostingersite.com/wp-content/uploads/2026/06/pramata-300x53.avif"
}
];

let testimonialIndex = 0;

function displayTestimonial() {
    const item = testimonials[testimonialIndex];

    document.getElementById("testimonial-text").textContent = item.text;
    document.getElementById("testimonial-name").textContent = item.name;
    document.getElementById("testimonial-title").textContent = item.title;
    document.getElementById("testimonial-logo").src = item.logo;
    document.getElementById("testimonial-logo").alt = item.name;
}

function prevTestimonial() {
    testimonialIndex = testimonialIndex > 0 ? testimonialIndex - 1 : testimonials.length - 1;
    displayTestimonial();
}

function nextTestimonial() {
    testimonialIndex = testimonialIndex < testimonials.length - 1 ? testimonialIndex + 1 : 0;
    displayTestimonial();
}

function randomTestimonial() {
    testimonialIndex = Math.floor(Math.random() * testimonials.length);
    displayTestimonial();
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("testimonial-text")) {
        displayTestimonial();
    }
});

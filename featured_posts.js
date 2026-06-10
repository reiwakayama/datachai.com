const posts = [
    {
        title: "How Shadow DOM Affects SEO",
        excerpt: "Ensure SEO-friendly usage of web components and shadow DOM, a web standard for creating a hidden, encapsulated version of the DOM.",
        image: "https://lightgray-porcupine-487444.hostingersite.com/wp-content/uploads/2026/06/nsplsh_9722a1c50e8040a8b162840ca2d64cdcmv2.avif",
        url: "https://lightgray-porcupine-487444.hostingersite.com/shadow-dom/"
    },
    {
        title: "How to Do a Technical SEO Audit",
        excerpt: "A technical SEO audit should assess crawlability, indexing, page speed, and site security. Use this checklist to identify issues that may be limiting your search visibility.",
        image: "https://lightgray-porcupine-487444.hostingersite.com/wp-content/uploads/2026/06/ef01d1_6fc0c267d1db497784cfa1548bfb573dmv2.avif",
        url: "https://lightgray-porcupine-487444.hostingersite.com/how-to-do-a-technical-seo-audit/"
    },
    {
        title: "Forecasting Time Series Data with Facebook Prophet",
        excerpt: "How to improve forecasting accuracy on Facebook Prophet, an open-source python library for predictive data analysis.",
        image: "https://lightgray-porcupine-487444.hostingersite.com/wp-content/uploads/2025/11/ef01d1_9f2ad2651e344916af0c26333f2dc024mv2.avif",
        url: "https://lightgray-porcupine-487444.hostingersite.com/forecasting-time-series-data-with-facebook-prophet/"
    }
];

let postIndex = 0;

function displayPost() {
    const item = posts[postIndex];

    document.getElementById("post-title").textContent = item.title;
    document.getElementById("post-title").href = item.url;

    document.getElementById("post-excerpt").textContent = item.excerpt;

    document.getElementById("post-image").src = item.image;
    document.getElementById("post-image").alt = item.title;

    document.getElementById("post-image-link").href = item.url;
}

function prevPost() {
    postIndex = postIndex > 0 ? postIndex - 1 : posts.length - 1;
    displayPost();
}

function nextPost() {
    postIndex = postIndex < posts.length - 1 ? postIndex + 1 : 0;
    displayPost();
}

function randomPost() {
    postIndex = Math.floor(Math.random() * posts.length);
    displayPost();
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("post-title")) {
        displayPost();
    }
});

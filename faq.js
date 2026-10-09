document.querySelectorAll(".faq-question").forEach(button => {
    button.onclick = () => {
        button.parentElement.classList.toggle("active");
    };
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const newsletter = document.getElementById("subscribe-newsletter").checked;

        if (name === "" || email === "" || password === "") {
            alert("Please complete all fields.");
            return;
        }

        const userData = {
            name,
            email,
            password,
            newsletter
        };
        
        localStorage.setItem("registeredUser", JSON.stringify(userData));

        successMessage.classList.remove("hidden");
        form.reset();

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("registration-modal");
    const closeModal = document.getElementById("close-modal");
    const registerButton = document.getElementById("register-button");

    // Show the modal every time the page loads
    modal.style.display = "flex";

    // Close the modal when clicking "Close"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Redirect to registration page when clicking "Register"
    registerButton.addEventListener("click", () => {
        window.location.href = "register.html";
    });
});

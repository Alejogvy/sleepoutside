document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("registration-modal");
    const closeModal = document.getElementById("close-modal");
    const registerButton = document.getElementById("register-button");

    modal.style.display = "flex";

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    registerButton.addEventListener("click", () => {
        window.location.href = "register.html";
    });
});

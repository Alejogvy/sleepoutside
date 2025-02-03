document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("registration-modal");
    const closeModal = document.getElementById("close-modal");
    const registerButton = document.getElementById("register-button");
  
    
    if (!localStorage.getItem("hasSeenModal")) {
      modal.classList.add("show");
    }
  
    
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
      localStorage.setItem("hasSeenModal", "true");
    });
  
    
    registerButton.addEventListener("click", () => {
      alert("Redirecting to registration page...");
      modal.classList.remove("show");
      localStorage.setItem("hasSeenModal", "true");
      window.location.href = "register.html";
    });
  });
  
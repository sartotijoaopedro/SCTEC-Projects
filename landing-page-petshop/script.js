const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contactForm");
const formFeedback = document.querySelector("#formFeedback");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const validators = {
  name(value) {
    if (value.trim().length < 3) {
      return "Informe um nome com pelo menos 3 caracteres.";
    }
    return "";
  },
  email(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value.trim())) {
      return "Digite um e-mail válido, como tutor@email.com.";
    }
    return "";
  },
  phone(value) {
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 11) {
      return "Informe um telefone com DDD.";
    }
    return "";
  },
  message(value) {
    if (value.trim().length < 10) {
      return "Escreva uma mensagem com pelo menos 10 caracteres.";
    }
    return "";
  }
};

function setFieldState(field, message) {
  const errorElement = document.querySelector(`#${field.id}Error`);
  field.classList.toggle("input-error", Boolean(message));
  errorElement.textContent = message;
}

function validateField(field) {
  const validationMessage = validators[field.name](field.value);
  setFieldState(field, validationMessage);
  return validationMessage === "";
}

contactForm.addEventListener("input", (event) => {
  const field = event.target;

  if (validators[field.name]) {
    validateField(field);
    formFeedback.textContent = "";
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = Array.from(contactForm.querySelectorAll("input, textarea"));
  const isFormValid = fields.every(validateField);

  if (!isFormValid) {
    formFeedback.textContent = "Revise os campos destacados antes de enviar.";
    return;
  }

  formFeedback.textContent = "Mensagem enviada com sucesso! A equipe Amora Pets retornará em breve.";
  contactForm.reset();
});

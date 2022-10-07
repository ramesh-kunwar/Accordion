const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function createFaq() {
  faqData.forEach((data) => {
    // Faq
    const faq = document.createElement("div");
    faq.classList.add("faq");
    // Faq Header
    const faqHeader = document.createElement("div");
    faqHeader.classList.add("faq_header");
    // create title
    const title = document.createElement("h3");
    title.textContent = data.question;
    // Create + symbol
    const showBtn = document.createElement("span");
    showBtn.classList.add("show_btn");
    showBtn.textContent = "+";
    // create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = data.answer;
    paragraph.classList.add("hidden");
    // Appending everything
    accordianBody.appendChild(faq);
    faq.appendChild(faqHeader);
    faqHeader.appendChild(title);
    faqHeader.appendChild(showBtn);

    faq.appendChild(paragraph);
  });
}
createFaq();

// Show button selector
const showButton = document.querySelectorAll(".show_btn");

// Add and Show answers based on button click
showButton.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "-") {
      button.parentNode.parentNode.lastChild.style.display = "none";

      button.textContent = "+";
    } else {
      button.parentNode.parentNode.lastChild.style.display = "block";

      button.textContent = "-";
    }
  });
});

// function btnStatusUpdate() {}

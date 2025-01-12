    document.addEventListener("DOMContentLoaded", () => {
      const collapsibles = document.querySelectorAll(".collapsible");
  
      collapsibles.forEach((button) => {
        button.addEventListener("click", function () {
          // Toggle active class
          this.classList.toggle("active");
  
          // Toggle the collapsible content
          const content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      });
    });

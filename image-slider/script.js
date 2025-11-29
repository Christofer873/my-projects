document.addEventListener("DOMContentLoaded", () => {
       
     const slider = document.querySelector(".slider")
     const slides = document.querySelectorAll(".slide")
     const prevbtn = document.querySelector(".prev")
     const nextbtn = document.querySelector(".next")
     const dotsContainer = document.querySelector(".dots-container")

     let currentslide = 0;
     const slideCount = slides.length;

     slides.forEach((_, index) => {
              const dot = document.createElement("div");
              dot.classList.add("dots");
              if (index === 0) dot.classList.add("active");
              dot.addEventListener("click", () => goToSlide(index));
              dotsContainer.appendChild(dot);        
     })  
     
     const dots = document.querySelectorAll(".dots")

     function updateDots() {
          dots.forEach((dot, index) => {
               dot.classList.toggle("active", index === currentslide);
          });
     }

     function goToSilde(index) {
          currentslide = index;
          slider.style.transform = `translateX(-${currentslide * 33.333}%)`;
          updateDots()
     }

     function nextslide() {
          currentslide = (currentslide + 1) % slideCount;
          goToSilde(currentslide);
     }
     function prevslide() {
          currentslide = (currentslide - 1 + slideCount) % slideCount;
          goToSilde(currentslide);
     }

     nextbtn.addEventListener("click", nextslide);
     prevbtn.addEventListener("click", prevslide);

  setInterval(nextslide, 5000);
});
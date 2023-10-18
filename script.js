const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const arrow = document.getElementById('arrow-up');

// create a const variable and select all the class which is used for the function
const faqHeaders = document.querySelectorAll(".faqcontainer .faq-header");

// for faq questions
faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {

    // next element sibling the content or answer of the question of class fa-header
    header.nextElementSibling.classList.toggle("active");

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    // if answer is currently showing by user means active then remove the + icon and showing the - icon

    if (header.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    }

    // if answer is not shown by user currently then remove the - icon and showing the +icon 

     else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});



if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Use toggle to open/close the navigation
    });
}

if (close) {
    close.addEventListener('click', () => { // Listen for click on the 'close' element
        nav.classList.remove('active'); // Remove the 'active' class to close the navigation
    });
}

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      scrollUpButton.classList.add('show'); // Add "show" class
     
    } else {
      scrollUpButton.classList.remove('show'); // Remove "show" class
    }
  });

  arrow.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });   
  
 

  // for news section popup
  function showpopup() {

    const popup = document.getElementById('popup');

    popup.style.display = 'block';

    setTimeout(function () {
      popup.style.display = 'none';
    }, 3000);
  }
  

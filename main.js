//toggle for the mobile header
function toggleMobileMenu(menu){
  menu.classList.toggle('open'); 
}

//for div links
    // Get all the clickable divs
    const clickableDivs = document.querySelectorAll('[data-href]');
    
    document.addEventListener('DOMContentLoaded', function() {
      // Select all clickable divs
      const clickableDivs = document.querySelectorAll('[data-href]');
      
      // Add a click event listener to each one
      clickableDivs.forEach(div => {
        div.addEventListener('click', () => {
          // Get the URL from the data-href attribute
          const url = div.getAttribute('data-href');
            
          // Redirect the user to the URL
          window.location.href = url;
        });
      });
    });

//popuate the merch page




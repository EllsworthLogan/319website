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
// Fetch data from merch.json file
fetch("merch.json")
  .then(response => response.json()) // Parse JSON data
  .then(products => {
    // Select container element for merchandise
    const merchContainer = document.getElementById("merch-container");

    // Loop through each product and generate HTML
    products.forEach(product => {
      // Create new HTML elements for each product
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      const productImg = document.createElement("img");
      productImg.classList.add("product-image");
      const productName = document.createElement("h3");
      productName.classList.add("product-name");
      const productDesc = document.createElement("p");
      productDesc.classList.add("product-description");

      // Set content and attributes for each HTML element
      productImg.src = product.image_path;
      productName.textContent = product.name;
      productDesc.textContent = product.short_description;

      // Append each HTML element to the product div
      productDiv.appendChild(productImg);
      productDiv.appendChild(productName);
      productDiv.appendChild(productDesc);

      // Append product div to merchandise container
      merchContainer.appendChild(productDiv);
    });
  })
  .catch(error => {
    console.error(error);
  });





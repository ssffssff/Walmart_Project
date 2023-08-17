const products = [
  {
    title: "Purple T-Shirt",
    author: " Cherokee",
    price: 9.99,
    image: "Com1.jpeg",
    genre: "T-Shirts"
    // url: "otherpage.html"
  },
  {
    title: "Sneakers",
    author: "Adidas",
    price: 14.99,
    image: "Enter1.jpg",
    genre: "Shoes",
    url:"otherpage.html"
  },
  {
    title: "Sandals",
    author: "Gucci",
    price: 12.99,
    image: "Rom1.jpg",
    genre: "Sandals"
  },
  {
    title: "Jeans - Black",
    author: "Pepe-Jeans",
    price: 12.99,
    image: "J2.jpg",
    genre: "Jeans",
    url:"otherpage1.html"
  },
  {
    title: "Pink T-Shirt",
    author: "Cherokee",
    price: 7.99,
    image: "Com2.jpeg",
    genre: "T-Shirts"
  },
  {
    title: "Sneakers-limited Edition",
    author: "Adidas",
    price: 14.99,
    image: "Enter2.jpg",
    genre: "Shoes"
  },
  {
    title: "Sandals-New",
    author: "Bata",
    price: 12.99,
    image: "Rom2.jpg",
    genre: "Sandals"
  },
  {
    title: "Sandals-Strapped",
    author: "Bata",
    price: 12.99,
    image: "Rom3.jpg",
    genre: "Sandals"
  },
  {
    title: "Sneakers-Cool",
    author: "Nike",
    price: 12.99,
    image: "Enter3.jpg",
    genre: "Shoes"
  },
  {
    title: "Pink T-Shirt Designer",
    author: "Cherokee",
    price: 12.99,
    image: "Com3.jpeg",
    genre: "T-Shirts"
  },
  {
    title: "Jeans - New",
    author: "Pepe-Jeans",
    price: 12.99,
    image: "J1.jpg",
    genre: "Jeans"
  },
];


function navigateToOtherPage(url) {
  window.location.href = url;
}


function displayProducts() {
  
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear existing content

  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.setAttribute("data-url", product.url); // Set the data-url attribute
    productImage.addEventListener("click", () => {
      window.location.href = product.url;
    });
        productImage.classList.add("product-image"); // Add this class for easier targeting

        productDiv.appendChild(productImage);

        const productTitle = document.createElement("h3");
        productTitle.innerText = product.title;
        productDiv.appendChild(productTitle);

    const productAuthor = document.createElement("p");
    productAuthor.innerText = "By " + product.author;
    productDiv.appendChild(productAuthor);

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    productDiv.appendChild(productPrice);

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("button");
    addToCartButton.innerText = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
      addToCart(index);
    });
    productDiv.appendChild(addToCartButton);

    productList.appendChild(productDiv);
  });
}


document.addEventListener("DOMContentLoaded", function() {
      displayProducts();
    });
    function addToCart(productIndex) {
      const selectedProduct = products[productIndex];
      cart.push(selectedProduct);
      alert("Product added to cart!");
    }
    
    function openCartModal() {
      const modal = document.getElementById("cart-modal");
      modal.style.display = "block";
      displayCart();
    }
    
    function closeCartModal() {
      const modal = document.getElementById("cart-modal");
      modal.style.display = "none";
    }
    
    function removeCartItem(index) {
      cart.splice(index, 1);
      displayCart();
    }
    
    function displayCart() {
      const cartItems = document.getElementById("cart-items");
      cartItems.innerHTML = ""; // Clear existing content
    
      cart.forEach((product, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
    
        const cartItemImage = document.createElement("img");
        cartItemImage.src = product.image;
        cartItemDiv.appendChild(cartItemImage);
    
        const cartItemTitle = document.createElement("h3");
        cartItemTitle.innerText = product.title;
        cartItemDiv.appendChild(cartItemTitle);
    
        const cartItemAuthor = document.createElement("p");
        cartItemAuthor.innerText = "By " + product.author;
        cartItemDiv.appendChild(cartItemAuthor);
    
        const cartItemPrice = document.createElement("p");
        cartItemPrice.innerText = "$" + product.price;
        cartItemDiv.appendChild(cartItemPrice);
    
        const removeButton = document.createElement("span");
        removeButton.classList.add("remove");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => {
          removeCartItem(index);
        });
        cartItemDiv.appendChild(removeButton);
    
        cartItems.appendChild(cartItemDiv);
      });
    }
    
    displayProducts();
    function displayProductsByGenre(genre) {
      const productList = document.getElementById("product-list");
      productList.innerHTML = ""; // Clear existing content
    
      const filteredProducts = products.filter(product => product.genre === genre);
    
      filteredProducts.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
    
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productDiv.appendChild(productImage);
    
        const productTitle = document.createElement("h3");
        productTitle.innerText = product.title;
        productDiv.appendChild(productTitle);
    
        const productAuthor = document.createElement("p");
        productAuthor.innerText = "By " + product.author;
        productDiv.appendChild(productAuthor);
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        productDiv.appendChild(productPrice);
    
        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("button");
        addToCartButton.innerText = "Add to Cart";
        addToCartButton.addEventListener("click", () => {
          addToCart(index);
        });
        productDiv.appendChild(addToCartButton);
    
        productList.appendChild(productDiv);
      });
    }
    
    // Sample code for displaying all products initially
    function displayAllProducts() {
      const productList = document.getElementById("product-list");
      productList.innerHTML = ""; // Clear existing content
    
      products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
    
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productDiv.appendChild(productImage);
    
        const productTitle = document.createElement("h3");
        productTitle.innerText = product.title;
        productDiv.appendChild(productTitle);
    
        const productAuthor = document.createElement("p");
        productAuthor.innerText = "By " + product.author;
        productDiv.appendChild(productAuthor);
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        productDiv.appendChild(productPrice);
    
        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("button");
        addToCartButton.innerText = "Add to Cart";
        addToCartButton.addEventListener("click", () => {
          addToCart(index);
        });
        productDiv.appendChild(addToCartButton);
    
        productList.appendChild(productDiv);
      });
    }
    function displayCart() {
      const cartItems = document.getElementById("cart-items");
      cartItems.innerHTML = ""; // Clear existing content
    
      cart.forEach((product, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
    
        const cartItemImage = document.createElement("img");
        cartItemImage.src = product.image;
        cartItemImage.style.width = "50px"; // Adjust the width as per your requirement
        cartItemImage.style.height = "50px"; // Adjust the height as per your requirement
        cartItemDiv.appendChild(cartItemImage);
    
        const cartItemTitle = document.createElement("h3");
        cartItemTitle.innerText = product.title;
        cartItemDiv.appendChild(cartItemTitle);
    
        const cartItemAuthor = document.createElement("p");
        cartItemAuthor.innerText = "By " + product.author;
        cartItemDiv.appendChild(cartItemAuthor);
    
        const cartItemPrice = document.createElement("p");
        cartItemPrice.innerText = "$" + product.price;
        cartItemDiv.appendChild(cartItemPrice);
    
        const removeButton = document.createElement("span");
        removeButton.classList.add("remove");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => {
          removeCartItem(index);
        });
        cartItemDiv.appendChild(removeButton);
    
        cartItems.appendChild(cartItemDiv);
      });
    }
    
    displayAllProducts(); // Display all products initially
    
    // Function to filter and display products by genre
    function filterProductsByGenre(genre) {
      if (genre === "All") {
        displayAllProducts();
      } else {
        displayProductsByGenre(genre);
      }
    }
    
    // Function to handle genre filter selection
    function handleGenreFilter() {
      const genreFilter = document.getElementById("genre-filter");
      const selectedGenre = genreFilter.value;
      filterProductsByGenre(selectedGenre);
    }
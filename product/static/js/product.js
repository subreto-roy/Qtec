function applyFilters() {
    var categoryFilter = document.getElementById('categoryFilter');
    var brandFilter = document.getElementById('brandFilter');
    var productList = document.getElementById('productList');
  
    var selectedCategory = categoryFilter.value;
    var selectedBrand = brandFilter.value;
  
    // Clear existing product list
    productList.innerHTML = '';
  
    // Filter and display products based on selected filters
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
  
      if ((selectedCategory === '' || product.category === selectedCategory) &&
          (selectedBrand === '' || product.brand === selectedBrand)) {
        // Create product card element
        var productCard = document.createElement('div');
        productCard.className = 'product';
        
        // Populate product details
        var productName = document.createElement('h3');
        productName.innerText = product.name;
  
        var category = document.createElement('p');
        category.innerText = 'Category: ' + product.category;
  
        var brand = document.createElement('p');
        brand.innerText = 'Brand: ' + product.brand;
  
        var warranty = document.createElement('p');
        warranty.innerText = 'Warranty: ' + product.warranty;
  
        var seller = document.createElement('p');
        seller.innerText = 'Seller: ' + product.seller;
  
        var price = document.createElement('p');
        price.innerText = 'Price: $' + product.price;
  
        // Append product details to product card
        productCard.appendChild(productName);
        productCard.appendChild(category);
        productCard.appendChild(brand);
        productCard.appendChild(warranty);
        productCard.appendChild(seller);
        productCard.appendChild(price);
  
        // Append product card to product list
        productList.appendChild(productCard);
      }
    }
  }
  
  // Sample products data (replace with actual data from your backend)
  var products = [
    { name: 'Product 1', category: '1', brand: '1', warranty: '1 Year Warranty', seller: 'Seller A', price: 100 },
    { name: 'Product 2', category: '2', brand: '1', warranty: '2 Years Warranty', seller: 'Seller B', price: 150 },
    { name: 'Product 3', category: '1', brand: '2', warranty: '1 Year Warranty', seller: 'Seller A', price: 200 },
    // Add more product objects as needed
  ];
  
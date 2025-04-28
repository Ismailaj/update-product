const form = document.querySelector('form');
const newProduct = document.querySelector(".products-list");


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const productDetails = {
        title : document.querySelector(".productTitle").value,
        price : document.querySelector(".productPrice").value,
        description : document.querySelector(".productDescription").value,
        image : document.querySelector(".productImage").value,
        category : document.querySelector(".productCategory").value
      };
      let productId = document.querySelector(".productId").value;

      fetch('https://fakestoreapi.com/products/' + productId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productDetails)
      })
        .then(response => response.json())
        .then(data => {
            console.log("API UPDATE SUCCESS!", data);
            newProduct.innerHTML = `
            <h1>Product Created</h1>
            <p>ID ${data.id}</p>
            <p>Title ${data.title}</p>
            <p>Price ${data.price}</p>
            <p>Description ${data.description}</p>
            <p>Image: <img src="${data.image}" alt="${data.title}" style="max-width: 200px; max-height: 200px;" /></p>
            <p>Category ${data.category}</p>
            `

        })
        .catch(error => {
            console.error('Error:', error);
            newProduct.innerHTML = `<p>Failed to create product</p>`;
        });
});
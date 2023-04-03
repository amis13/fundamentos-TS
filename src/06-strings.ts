(() => {
  let productTitle = 'My amazing product';
   productTitle = 'My amazing product changed';
   console.log('productTitle', productTitle);
   let isNew = Math.random() >= 0.5 ? true : false;
   let productPrice = 100;

   const productDescription = "I'm kasjdkljakldjak";
   console.log('productDescription', productDescription);
  const summary = `
   title: ${productTitle}
   description: ${productDescription}
   isNew: ${isNew}
   price: ${productPrice}


  `;
  console.log(summary);

})();

    function addToCart( name, price) {

        var cartElement = document.getElementById('cart-items');
        var cartItem = document.createElement('li');
        cartItem.textContent = name + ' - $' + price + " ";
        var removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger';
        removeButton.type= 'button';
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
        cartElement.removeChild(cartItem);

        };
  
        cartItem.appendChild(removeButton);
        cartElement.appendChild(cartItem);


      }
      
      

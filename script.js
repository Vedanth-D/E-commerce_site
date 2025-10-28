document.querySelectorAll('.register-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'pages.html';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cart = [];

  document.querySelectorAll('.add-to-Cart-button').forEach((button, index) => {
    button.addEventListener('click', () => {
      const bookDetails = button.closest('.book-detail');
      const title = bookDetails.querySelector('p[class^="title"]').textContent;
      const price = bookDetails.querySelector('p[class^="price"]').textContent;

      cart.push({ title, price });
      localStorage.setItem('cart', JSON.stringify(cart));

      alert(`Added to cart: ${title}`);
    });
  });

  const notificationButton = document.querySelector('.notification-button');
  notificationButton.addEventListener('click', () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartData.length === 0) {
      alert('Your cart is empty.');
    } else {
      let message = 'Your Cart:\n\n';
      cartData.forEach((item, index) => {
        message += `${index + 1}. ${item.title} - ${item.price}\n`;
      });
      alert(message);
    }
  });
});

document.querySelectorAll('.buy-now-button').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'buy_now.html';
  });
});

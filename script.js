document.addEventListener('DOMContentLoaded', function () {
  // Cart form: checkout button redirect
  var cartForm = document.getElementById('cart-form');
  if (cartForm) {
    cartForm.addEventListener('submit', function (e) {
      if (e.submitter && e.submitter.name === 'checkout') {
        e.preventDefault();
        cartForm.action = '/checkout';
        cartForm.submit();
      }
    });
  }

  // Add-to-cart button feedback
  var atcForm = document.getElementById('add-to-cart-form');
  if (atcForm) {
    atcForm.addEventListener('submit', function () {
      var btn = atcForm.querySelector('.add-to-cart-btn');
      if (btn && !btn.disabled) {
        btn.textContent = '追加しました！';
        btn.style.background = '#2d7a2d';
        setTimeout(function () {
          btn.textContent = 'カートに追加';
          btn.style.background = '';
        }, 2000);
      }
    });
  }
});

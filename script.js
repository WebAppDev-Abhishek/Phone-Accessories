// Animate products on scroll
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  products.forEach(product => observer.observe(product));

  // Cart functionality (basic)
  const cartBtns = document.querySelectorAll(".cart-btn");
  const cartCount = document.querySelector(".cart-count");
  let count = 0;

  cartBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      count++;
      cartCount.textContent = count;
      btn.innerHTML = `<i class="fas fa-check"></i> Added`;
      btn.disabled = true;
    });
  });
});

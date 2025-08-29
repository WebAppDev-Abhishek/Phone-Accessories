// Smooth scroll to sections (optional enhancement)
document.querySelectorAll(".menu li").forEach(item => {
  item.addEventListener("click", () => {
    alert(`Navigate to: ${item.textContent}`);
  });
});

export const isScrolledIntoView = (selector) => {
  const el = document.querySelector(selector);
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  //const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

export const scrollTo = (selector, block = 'start') => {
  const element = document.querySelector(selector);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block
  });
};
// utils/observe-visibility.js

export function observeVisibility(elements, className = "visible", options = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      ...options,
    },
  );

  if (elements instanceof Element) {
    observer.observe(elements);
  } else {
    elements.forEach((element) => observer.observe(element));
  }

  return observer;
}

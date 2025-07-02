export function observeOnScroll(ref, className = "visible", threshold = 0.1) {
  if (!ref?.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        ref.current.classList.add(className);
      } else {
        ref.current.classList.remove(className);
      }
    },
    {
      threshold: threshold,
    }
  );

  observer.observe(ref.current);

  return () => observer.disconnect();
}

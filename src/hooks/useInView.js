import { useInView as useInViewLib } from "react-intersection-observer";

export function useAnimateInView(options = {}) {
  const { ref, inView } = useInViewLib({
    triggerOnce: true,
    threshold: 0.12,
    ...options,
  });
  return { ref, inView };
}

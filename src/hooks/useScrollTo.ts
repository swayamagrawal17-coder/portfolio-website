type LenisLike = {
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number; duration?: number; immediate?: boolean },
  ) => void;
};

let lenisInstance: LenisLike | null = null;

/** wired up by <SmoothScroll /> so section jumps go through Lenis */
export function setLenis(instance: LenisLike | null) {
  lenisInstance = instance;
}

export function scrollTo(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(element, { offset: 0 });
  } else {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function scrollToY(y: number) {
  if (lenisInstance) {
    lenisInstance.scrollTo(y);
  } else {
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function scrollToTop() {
  scrollToY(0);
}

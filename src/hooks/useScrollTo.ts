let sehForceExpand: (() => void) | null = null;

export function setSehForceExpand(fn: (() => void) | null) {
  sehForceExpand = fn;
}

export function scrollTo(id: string) {
  if (sehForceExpand) {
    sehForceExpand();
  }
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

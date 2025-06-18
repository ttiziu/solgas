// Utilidad para concatenar clases (como clsx)
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

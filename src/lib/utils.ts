/**
 * Concatena clases condicionales en una sola cadena.
 * @param classes - Lista de clases (string, undefined, false o null).
 * @returns Una cadena de clases separadas por espacio.
 */
export function cn(...classes: Array<string | undefined | false | null>): string {
  return classes.filter(Boolean).join(' ');
}

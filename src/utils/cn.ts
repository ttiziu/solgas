import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

 /**
 * Une clases condicionales y las fusiona usando tailwind-merge.
 * @param inputs - Lista de clases condicionales.
 * @returns Una cadena de clases fusionadas.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

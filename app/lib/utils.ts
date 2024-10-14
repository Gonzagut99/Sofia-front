import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type FontSize =
  | '4xl' /**46px*/
  | '3xl' /**37px*/
  | '2xl' /**29px*/
  | 'xl' /**23px*/
  | 'lg' /**19px*/
  | 'base' /**15px*/
  | 'sm' /**12px*/
  | 'xs' /**10px*/
  | '2xs'; /**8px*/

export function customFontSizes(fontSize: FontSize) {
  switch (fontSize) {
    case '4xl':
      return 'text-[2.875rem]' /*46px*/;
    case '3xl':
      return 'text-[2.3125rem]' /*37px*/;
    case '2xl':
      return 'text-[1.8125rem]' /*29px*/;
    case 'xl':
      return 'text-[1.4375rem]' /*23px*/;
    case 'lg':
      return 'text-[1.1875rem]' /*19px*/;
    case 'base':
      return 'text-[0.9375rem]' /*15px*/;
    case 'sm':
      return 'text-[0.75rem]' /*12px*/;
    case 'xs':
      return 'text-[0.625rem]' /*10px*/;
    case '2xs':
      return 'text-[0.5rem]' /*8px*/;
  }
}
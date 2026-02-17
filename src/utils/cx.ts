import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Since we don't have tailwind-merge installed in this environment,
// we'll use a simple join for the demo, but in a real app you'd use twMerge
export function cx(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(' ');
}
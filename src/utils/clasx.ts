import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Method wrapper for `tailwind-merge` and `clsx`.
 * 
 * https://github.com/lukeed/clsx#readme
 * 
 * https://github.com/dcastil/tailwind-merge/blob/v2.2.1/docs/what-is-it-for.md
 * 
 * @example
 * return (
 *   <div className={classx("bg-red-500", { "bg-red-800": active })} />
 * )
 */
export const classx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

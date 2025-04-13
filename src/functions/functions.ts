import { validateParameter } from "../services/validateService";

/**
 * Calculates factorials from 1 to N and returns them as a horizontal cells array.
 * @customfunction
 * @param {number} n The number to which to calculate factorials.
 * Must be a positive integer between 1 and 1000.
 * @returns {string[][]} An array of factorials as text values.
 */
export function FACTORIALROW(n: number): string[][] {
  const errorMessage = validateParameter(n);
  if (errorMessage) return [[errorMessage]];

  const result = getFactorials(n);

  return [result];
}

/**
 * Calculates factorials from 1 to N and returns them as a vertical cells array.
 * @customfunction
 * @param {number} n The number to which to calculate factorials.
 * Must be a positive integer between 1 and 1000.
 * @returns {string[][]} An array of factorials as text values.
 */
export function FACTORIALCOLUMN(n: number): string[][] {
  const errorMessage = validateParameter(n);
  if (errorMessage) return [[errorMessage]];

  const result = getFactorials(n);

  return result.map((value) => [value]);
}

const factorialCache = new Map<number, bigint>();
/**
 * Calculates factorials from 1 to N.
 * @param {number} n The number to which to calculate factorials.
 * @returns {string[]} An array of factorials as string values.
 */
function getFactorials(n: number): string[] {
  let factorial = BigInt(1);
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (factorialCache.has(i)) {
      factorial = factorialCache.get(i);
    } else {
      factorial *= BigInt(i);
      factorialCache.set(i, factorial);
    }
    result.push(factorial.toString());
  }

  return result;
}

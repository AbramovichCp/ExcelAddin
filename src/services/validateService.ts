/**
 * Validates the input parameter for factorial calculations.
 * @param {number} n The input number.
 * @returns {string | null} Returns an error message if invalid, otherwise null.
 */
export const validateParameter = (n: number): string | null => {
  if (!Number.isInteger(n)) {
    return "Please enter a valid integer.";
  } else if (n <= 0) {
    return "Please enter a positive integer.";
  } else if (n > 1000) {
    return "Please enter a number less than or equal to 1000.";
  }
  return null;
};

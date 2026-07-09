export function validateLength(value: string, min: number, max: number) {
  return value.length >= min && value.length <= max;
}

export function getLengthErrorMessage(field: string, min: number, max: number) {
  return `${field} must be between ${min} and ${max} characters`;
}

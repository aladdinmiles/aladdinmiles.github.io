export function toSnakeCase(key: string): string {
  return key.replace(/([A-Z])/g, '_$1').toLowerCase();
}

export function convertKeysToSnakeCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToSnakeCase(item));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const snakeCaseKey = toSnakeCase(key);
      acc[snakeCaseKey] = convertKeysToSnakeCase(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj; // Return the value as is if it's not an object or array
}

export function toCamelCase(key: string): string {
  return key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function convertKeysToCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const camelCaseKey = toCamelCase(key);
      acc[camelCaseKey] = convertKeysToCamelCase(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj; // Return the value as is if it's not an object or array
}

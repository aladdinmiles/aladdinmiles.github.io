type ClassValue = string | number | Record<string, boolean> | ClassArray;

interface ClassArray extends Array<ClassValue> {}

export default function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(arg as string);
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...(arg as ClassArray)));
    } else if (typeof arg === 'object' && arg !== null) {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.filter(Boolean).join(' ');
}

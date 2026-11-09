export function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

export function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? "Active" : "Inactive";
  }
  throw new Error("Unsupported input type");
}

export function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

export function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combinedArray: T[] = [];
  for (const currentArray of arrays) {
    combinedArray.push(...currentArray);
  }
  return combinedArray;
}

export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export function getPopularCourses(
  courses: Course[],
  minStudents: number
): Course[] {
  return courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents
  );
}

export function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}

export class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

export async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>(
    (resolve: (value: string) => void, reject: (reason: Error) => void): void => {
      if (age >= 18) {
        setTimeout((): void => resolve("Access Granted"), 1000);
      } else {
        reject(new Error("Access Denied: Must be 18 or older"));
      }
    }
  );
}
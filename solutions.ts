function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier != undefined) {
        return value * multiplier;
    }
    return value * 2;
}

type Value = string | number | boolean;
function processInput(value: Value): string | number {

    if (typeof (value) == "string") {
        return value.toLowerCase().trim();
    }

    else if (typeof (value) == "number") {
        return value * 10;
    }

    return value ? "Active" : "Inactive";

}

type Coordinate = readonly [latitude: number, longitude: number, locationName: string]
function formatCoordinate([latitude, longitude, locationName]: Coordinate): string {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let newArr: T[] = []
    for (const arr of arrays) {
        newArr = [...newArr, ...arr];
    }
    return newArr;
}

interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    let newArr: Course[] = courses.filter(course => course.isPublished && course.students >= minStudents);
    return newArr;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    let newArr: T[K][] = [];
    for (const item of items) {
        newArr.push(item[key]);
    }
    return newArr;
}

class Employee {

    constructor(protected name: string, private baseSalary: number) { }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary);
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


async function validateAgeAsync(age: number): Promise<string> {

    if (age >= 18) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000)
        })
    } else {
        throw new Error("Access Denied: Must be 18 or older");
    }

}


// 00-import-export (03)
export function getName(user) {
    return user.name;
}

export function getAge(user) {
    return user.age;
}

// 00-import-export (07)
export default function cats(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
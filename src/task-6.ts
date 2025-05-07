function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const lastNumber = getFirstElement<number>([1, 2, 3]);
const lastString = getFirstElement<string>(["a", "b", "c"]);
const lastBoolean = getFirstElement<boolean>([true, false, true]);

console.log(lastNumber);
console.log(lastString);
console.log(lastBoolean);

// getFirstElement([1, "a"]); // Це викличе помилку, якщо ввімкнено strictNullChecks
// Sample array of names
const names = ["Alice", "Bob", "Charlie", "David"];

// Sample array of department names
const departments = ["IT Department", "ECE Department", "Mechanical Department"];

// Sample array of ages
const ages = [21, 17, 25, 30];

// Sample array of numbers for reduce method
const numbers = [5, 10, 15, 20];

// forEach method to iterate over names
console.log("forEach:");
names.forEach(name => console.log(name));

// map method to add text to the end of each department name
console.log("\nmap:");
const departmentsWithText = departments.map(department => `${department} - Saveetha`);
console.log(departmentsWithText);

// filter method to find people older than 18
console.log("\nfilter:");
const adults = ages.filter(age => age > 18);
console.log(adults);

// reduce method to find the sum and average of numbers
console.log("\nreduce:");
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
const average = sum / numbers.length;
console.log("Sum:", sum);
console.log("Average:", average);

// every method to check if all ages are greater than 18
console.log("\nevery:");
const allAdults = ages.every(age => age > 18);
console.log(allAdults);

// some method to check if at least one person is older than 18
console.log("\nsome:");
const atLeastOneAdult = ages.some(age => age > 18);
console.log(atLeastOneAdult);

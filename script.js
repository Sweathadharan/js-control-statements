// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) console.log(i);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var a = 1;
while (a <= 100) {
  if (a % 2 != 0) console.log(a);
  a++;
}


// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
var number = 3;

do {
  console.log(number);
  number += 3; // Increment by 3 to get the next multiple
} while (number < 100);


// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.


for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
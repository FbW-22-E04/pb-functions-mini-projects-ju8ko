// The Fortune Teller
function tellFortune(numOfChildren, nameOfPartner, location, job) {
  console.log(
    `Q.1: You will be a ${job} in ${location}, and married to ${nameOfPartner} with ${numOfChildren} kids.`
  );
}
tellFortune(5, "Tom", "China", "teacher");
tellFortune(1, "Anne", "Tokyo", "doctor");
tellFortune(4, "Alex", "Paris", "freelancer");

// The Puppy Age Calculator
function calculateDogAge(ageOfPuppy, dogsYear = 7) {
  const ageInDogsYears = ageOfPuppy * dogsYear;
  console.log(`Q.2: Your doggie is ${ageInDogsYears} years old in dog years!`);
}
calculateDogAge(2);

// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  let amountSupply = (maxAge - age) * amountPerDay * 365.25;
  if (age <= maxAge) {
    console.log(
      `Q.3: You will need ${Math.round(
        amountSupply
      )} to last you until the ripe old age of ${maxAge}`
    );
  } else {
    console.log("Sorry, you don't have any supplies");
  }
}
calculateSupply(30, 2);
calculateSupply(70, 4);
calculateSupply(18, 1);
calculateSupply(18, 3.5);
// The Geometrizer
function calcCircumfrence(radius) {
  console.log("Q4: The circumference is", 2 * Math.PI * radius);
}
calcCircumfrence(2);

function calcArea(radius) {
  console.log("Q4: The area is", Math.PI * radius ** 2);
}
calcArea(2);

// The Temperature Converter
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius / 5) * 9 + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F`);
}
celsiusToFahrenheit(110);

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F is ${celsius}°C`);
}
fahrenheitToCelsius(230);

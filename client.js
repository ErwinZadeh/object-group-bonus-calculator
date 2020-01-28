

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243', //
    annualSalary: '74750', 
    reviewRating: 5 //plus 10%
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

let totalCompensation = 0;
let employeeTotalCompensation = [];

function employeeSalaryPlusBonus (array) {
  for (let i = 0; i < array.length; i++) {
    const employee = array[i];
    if (employee.reviewRating < 2) {
      bonusPercentage = 0;
    } else if (employee.reviewRating === 3) {
      bonusPercentage = .04;
    } else if (employee.reviewRating === 4) {
      bonusPercentage = .06;
    } else if (employee.reviewRating === 5) {
      bonusPercentage = .10;
    }//end else if

    // if (employee.employeeNumber >= 1000 && employee.annualSalary < 65000) {
    //   bonusPercentage += .04;
    // } else if (employee.annualSalary > 6500) {
    //   bonusPercentage -= .01
    // }

    
    
    if (employee.employeeNumber < 10000){
      bonusPercentage = (bonusPercentage += .05);
    }
    if (employee.annualSalary > 65000){
      bonusPercentage = (bonusPercentage - .01);
    }
    
    
    console.log('bonusPercentageeeeee', bonusPercentage);


    if (bonusPercentage > .13){
      bonusPercentage = .13;
    } else if (bonusPercentage < 0){
      bonusPercentage = 0;
    }


    console.log('bonusPercentage',bonusPercentage)
    let totalCompensation = employee.annualSalary * (1 + bonusPercentage)
    console.log(totalCompensation); 

    employeeTotalCompensation.push(totalCompensation);

    
  } //end for
}

employeeSalaryPlusBonus(employees);


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

let totalCompensation = 0;
let totalCompensationOfEmployees = [];

function employeeSalaryPlusBonus (employees) {

  for (let i = 0; i < employees.length; i++) {
    
    const employee = employees[i];
    
    let bonusPercentage = 0
    if (employee.reviewRating < 2) {
      bonusPercentage = 0;
    } else if (employee.reviewRating === 3) {
      bonusPercentage = 0.04;
    } else if (employee.reviewRating === 4) {
      bonusPercentage = 0.06;
    } else if (employee.reviewRating === 5) {
      bonusPercentage = 0.10;
    } else {
      bonusPercentage
    }
    
    if (employee.employeeNumber < 10000){
      bonusPercentage += 0.05
    } else {
      bonusPercentage
    }

    if (employee.annualSalary > 65000){
      bonusPercentage -= 0.01
    } else {
      bonusPercentage
    }

    if (bonusPercentage > 0.13){
      bonusPercentage = 0.13;
    } else if (bonusPercentage < 0){
      bonusPercentage = 0;
    } else {
      bonusPercentage
    }

    console.log('bonusPercentage of this employee is: ',bonusPercentage)

    let totalBonus = Number( employee.annualSalary * bonusPercentage );
    let totalCompensation = Number( employee.annualSalary + totalBonus ); 

    console.log('total compensation of this employee is: ',totalCompensation); 

    totalCompensationOfEmployees.push(totalCompensation);
    
  } //end for
}

employeeSalaryPlusBonus(employees);
console.log(totalCompensationOfEmployees);



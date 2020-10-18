// I) OUTPUTS


console.log("\n"+ "Excercise 1");
excercise_1(); 
// should return for randomCar -> "Tesla" and otherRandomCar -> "Mercedes"

console.log("\n"+ "Excercise 2");
// excercise_2();
// should return error for name -> "name is not defined" and otherName -> "Elon"

console.log("\n"+ "Excercise 3");
excercise_3();
// should return error for password -> "123456" and hashedPassword -> "undefined"

console.log("\n"+ "Excercise 4");
excercise_4();
// should return "false" and "true" 

console.log("\n"+ "Excercise 5");
excercise_5();
// should return error for key -> "value", for secondKey -> "[1,5,1,8,3,3]", for secondKey[0] -> "1" and willThiswork -> "5"


// II) EXCERCISES

// -----------------------------------
//Excercise 1

function excercise_1(){
    
    const cars = ['Tesla', 'Mercedes', 'Honda']
    const [ randomCar ] = cars
    const [ ,otherRandomCar ] = cars
    //Predict the output
    console.log(randomCar)
    console.log(otherRandomCar) 
}

// -----------------------------------
//Excercise 2

function excercise_2(){
    
    const employee = {
        name: 'Elon',
        age: 47,
        company: 'Tesla'
    }
    const { name: otherName } = employee;
    //Predict the output
    console.log(name);
    console.log(otherName); 
}


// -----------------------------------
// Excercise 3

function excercise_3(){
    
    const person = {
        name: 'Phil Smith',
        age: 47,
        height: '6 feet'
    }
    const password = '12345';
    const { password: hashedPassword } = person;  
    //Predict the output
    console.log(password);
    console.log(hashedPassword);
}

// -----------------------------------
// Excercise 4

function excercise_4(){
    
    const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
    const [,first] = numbers;
    const [,,,second] = numbers;
    const [,,,,,,,,third] = numbers;
    //Predict the output
    console.log(first == second);
    console.log(first == third);
}

// -----------------------------------
// Excercise 5

function excercise_5(){
    
    const lastTest = {
        key: 'value',
        secondKey: [1, 5, 1, 8, 3, 3]
    }
    const { key } = lastTest;
    const { secondKey } = lastTest;
    const [ ,willThisWork] = secondKey;
    //Predict the output
    console.log(key);
    console.log(secondKey);
    console.log(secondKey[0]);
    console.log(willThisWork);
}

// -----------------------------------
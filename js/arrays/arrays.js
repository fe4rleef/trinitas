const jon = ["Jon", "Sampson", 15]; //An array with 3 values
const brandon = ["Brandon", "Jansky", 14] //Two Strings and a Number
//We create an array of students that contain variables and array literals
const students = [jon, brandon, ["Jackson", "Cowart", 15]];

function printStudentList() {
    for (const student of students) {
        const firstName = student[0];
        const age = student[2];
        const futureAge = 10 + age;

        console.log(firstName +  "will be" + futureAge +  "in 10 years");
    }
}

//There are a couple types of function syntaxes we can use:
//1. the traditional style
// function (student) {return student [2] >= 15}
//2. the newer array function style:
// (student) => { return student[2] >= 15}
//3. Array functions with implicit returns
//  (student) => student[2] >= 15
//4. Array function with shorter argument names
// (s) => s[2] >= 15

//Let's find all students that are 15 or older
const fifteenPlus = students.filter((s) => s[2] >= 15);
//In studentInitials we grab the first letter from the first/last names and return
const studentInitials = students.map((student) => student[0][0] + student[1][0] );
const futureAges = fifteenPlus.map((student) => 10 + student[2]);

//  for ( const student of students ) {
//     //Zero-based index. 0 has the value of 1 and so on.
//     const age = student[2];
//     if ( age >= 15) {
//         fifteenPlus.push(student);  
//     }
// }

console.log(fifteenPlus, studentInitials, futureAges);

// printStudentList();

//Arrays are marked by []
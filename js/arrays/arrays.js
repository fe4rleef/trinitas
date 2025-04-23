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

printStudentList();

//Arrays are marked by []
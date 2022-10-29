import process from 'node:process';
import message from './libs/message.js';
import questionnaire from './libs/questionnaire.js';
import studentsInfo from './libs/students-info.js';
import summary from './libs/summary.js';
/*
  Handling inputs for School 1.
*/
console.log('--------------SCHOOL 1--------------');
const firstSchoolName = questionnaire('School Name: ');
if (!firstSchoolName) {
    console.log('\nInvalid Input. School name should not be empty.');
    process.exit();
}
const firstSchoolStudents = [];
studentsInfo({ studentsArray: firstSchoolStudents });
console.clear();
/*
  Handling inputs for School 2.
*/
console.log('\n--------------SCHOOL 2--------------');
const secondSchoolName = questionnaire('School Name: ');
if (!secondSchoolName) {
    console.log('\nInvalid Input. School name should not be empty.');
    process.exit();
}
const secondSchoolStudents = [];
studentsInfo({ studentsArray: secondSchoolStudents });
console.clear();
/*
  Handling the calculation of scores per school and
  the winner.
*/
console.log('\n--------------SUMMARY--------------');
console.log(firstSchoolName);
let firstSchoolTotalPoints = 0;
summary({
    studentsArray: firstSchoolStudents,
    totalPoints: firstSchoolTotalPoints,
});
console.log(secondSchoolName);
let secondSchoolTotalPoints = 0;
summary({
    studentsArray: secondSchoolStudents,
    totalPoints: secondSchoolTotalPoints,
});
await message({
    message: `Winner: ${firstSchoolTotalPoints > secondSchoolTotalPoints
        ? firstSchoolName
        : secondSchoolName}`,
});
//# sourceMappingURL=index.js.map
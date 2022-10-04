import process from 'node:process'

import message from './helper/message.helper.js'
import questionnaire from './helper/questionnaire.helper.js'
import studentsInfo from './helper/students-info.helper.js'
import summary from './helper/summary.helper.js'

/* 
  Handling inputs for School 1.
*/
console.log('--------------SCHOOL 1--------------')
const firstSchoolName = questionnaire('School Name: ')

if (!firstSchoolName) {
  console.log('\nInvalid Input. School name should not be empty.')
  process.exit()
}

const firstSchoolStudents = []
studentsInfo(firstSchoolStudents)

/* 
  Handling inputs for School 2.
*/
console.log('\n--------------SCHOOL 2--------------')
const secondSchoolName = questionnaire('School Name: ')

if (!secondSchoolName) {
  console.log('\nInvalid Input. School name should not be empty.')
  process.exit()
}

const secondSchoolStudents = []
studentsInfo(secondSchoolStudents)

/* 
  Handling the calculation of scores per school and
  the winner.
*/
console.log('\n--------------SUMMARY--------------')
console.log(firstSchoolName)
let firstSchoolTotalPoints = 0
summary(firstSchoolStudents, firstSchoolTotalPoints)

console.log(secondSchoolName)
let secondSchoolTotalPoints = 0
summary(secondSchoolStudents, secondSchoolTotalPoints)

await message(
  `Winner: ${
    firstSchoolTotalPoints > secondSchoolTotalPoints
      ? firstSchoolName
      : secondSchoolName
  }`,
)

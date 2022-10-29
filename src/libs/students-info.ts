import process from 'node:process'

import questionnaire from './questionnaire.js'

export interface StudentInfo {
  name: string
  score: number
}

interface Props {
  studentsArray: StudentInfo[]
}

export default function studentsInfo({ studentsArray }: Props) {
  do {
    const studentName = questionnaire(
      `#${studentsArray.length + 1} Student Name: `,
    )

    if (!studentName) {
      console.log('\nInvalid Input. Student name should not be empty.')
      process.exit()
    }

    const studentScore = questionnaire(
      `#${studentsArray.length + 1} Student Score: `,
    )

    if (isNaN(Number(studentScore)) || !studentScore) {
      console.log('\nInvalid Input. Student score is not a number.')
      process.exit()
    }

    studentsArray.push({
      name: studentName,
      score: Number(studentScore),
    })
  } while (studentsArray.length !== 5)
}

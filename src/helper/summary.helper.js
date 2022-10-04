/**
 * This function will display the summary with the
 * sorted students based on name and their total
 * points multiplied to 5.
 *
 * @param {[{ name: String, score: Number }] | []} studentsArray Array of objects.
 * @param {Number} totalPoints Overall points of the students.
 * @returns void
 */
const summary = (studentsArray, totalPoints) => {
  const sortedFirstArray = studentsArray.sort((a, b) =>
    a.name.localeCompare(b.name),
  )

  sortedFirstArray.map((student) => {
    console.log(`${student.name} ${student.score}`)
    totalPoints += student.score
  })

  console.log('Total Points: ', totalPoints * 5, '\n')
}

export default summary

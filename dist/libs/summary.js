export default function summary({ studentsArray, totalPoints }) {
    const sortedArray = studentsArray.sort((a, b) => a.name.localeCompare(b.name));
    sortedArray.map((student) => {
        console.log(`${student.name} ${student.score}`);
        totalPoints += student.score;
    });
    console.log('Total Points: ', totalPoints * 5, '\n');
}
//# sourceMappingURL=summary.js.map
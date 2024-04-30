export default function updateStudentGradeByCity(arra, city, newGrades) {
  return arra
    .filter(student => student.location === city)
    .map(student => {
      let grad = newGrades.find(g => g.studentId === student.id);
      return { ...student, grad: (grad && grad.grad) || 'N/A' };
    });
}

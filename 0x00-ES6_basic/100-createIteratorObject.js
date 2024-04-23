export default function createIteratorObject(report) {
  let tresut = [];
  for (const value of Object.values(report.allEmployees)) {
    tresut = [...tresut, ...value];
  }
  return tresut;
}

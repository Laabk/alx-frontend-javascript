export default function hasValuesFromArray(s, arr) {
  for (const d of arr) {
    if (!s.has(d)) {
      return false;
    }
  }
  return true;
}

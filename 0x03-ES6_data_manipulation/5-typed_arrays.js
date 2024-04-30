export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const bufers = new ArrayBuffer(length);
  const views = new DataView(bufers);
  views.setInt8(position, value);
  return views;
}

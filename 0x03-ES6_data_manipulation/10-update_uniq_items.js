export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [ky, val] of items) {
    if (val === 1) {
      items.set(ky, 100);
    }
  }
  return items;
}

export default updateUniqueItems;

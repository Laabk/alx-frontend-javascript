export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let fiString = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) fiString += `${element.slice(startString.length)}-`;
  });

  return fiString.slice(0, fiString.length - 1);
}

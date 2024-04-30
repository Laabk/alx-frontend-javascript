export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let procs = weakMap.get(endpoint) || 0;

  procs += 1;

  weakMap.set(endpoint, procs);

  if (procs >= 5) {
    throw Error('Endpoint load is high');
  }

  return procs;
}

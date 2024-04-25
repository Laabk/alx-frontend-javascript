export default function guardrail(mathFunction) {
  const que = [];
  let rs;
  try {
    rs = mathFunction();
  } catch (error) {
    rs = `Error: ${error.message}`;
  }
  que.push(res);
  que.push('Guardrail was processed');

  return que;
}

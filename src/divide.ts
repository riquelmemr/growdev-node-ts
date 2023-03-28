function divide(a: number, b: number): number | string {
  if (a === 0 || b === 0) return 'Nenhum número é dividido por zero.'
  return a / b;
}

export default divide;
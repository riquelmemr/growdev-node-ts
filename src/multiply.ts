function multiply(a: number, b: number): number {
  return a * b;
}

// Not Default => se tiver mais módulos
// export { multiply };

// Default => se o arquivo em questão tiver apenas um módulo
export default multiply;
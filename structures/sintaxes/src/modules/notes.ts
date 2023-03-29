function validateNote(note: number): string {
  if (note < 6) return 'Reprovado';
  return 'Aprovado';
}

export default validateNote;
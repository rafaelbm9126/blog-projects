export function collection_keywords(keywords: string[], control: string[]): string[] {
  for (const key of keywords) {
    if (control.indexOf(key) === -1) {
      control.push(key);
    }
  }
  return control;
}

export const REQUIRED_REFERENCE_FILES = [
  'features.md',
  'use-cases.md',
  'product-map.md',
  'glossary.md',
  'testability.md'
] as const;

export function validateReferenceDir(
  referenceDir: string,
  existsFn: (path: string) => boolean
): string[] {
  const errors: string[] = [];

  if (!existsFn(referenceDir)) {
    errors.push(`missing reference directory at ${referenceDir}`);
    return errors;
  }

  for (const file of REQUIRED_REFERENCE_FILES) {
    const filePath = `${referenceDir}/${file}`;
    if (!existsFn(filePath)) {
      errors.push(`missing required reference file: ${file}`);
    }
  }

  return errors;
}

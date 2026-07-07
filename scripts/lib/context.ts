export const REQUIRED_SECTIONS = [
  'Product',
  'Tech Stack',
  'Test Stack',
  'CI/CD',
  'Environments',
  'Quality Goals',
  'Risk Areas',
  'Team',
  'Conventions'
] as const;

export interface ValidateOptions {
  allowPlaceholders: boolean;
}

export function validateContext(markdown: string, options: ValidateOptions): string[] {
  const errors: string[] = [];

  for (const section of REQUIRED_SECTIONS) {
    const re = new RegExp(`^##\\s+${section.replace(/[/]/g, '\\/')}\\s*$`, 'im');
    if (!re.test(markdown)) {
      errors.push(`missing required section: ## ${section}`);
    }
  }

  if (!options.allowPlaceholders) {
    const placeholders = markdown.match(/\[[^\]\n]+\]/g);
    if (placeholders && placeholders.length > 0) {
      errors.push(`${placeholders.length} unfilled placeholder(s) remain, e.g. ${placeholders[0]}`);
    }
  }

  return errors;
}

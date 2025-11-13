export const escapeRegex = (char: string): string => {
  const specialRegexChars = [
    '\\',
    '^',
    '$',
    '.',
    '|',
    '?',
    '*',
    '+',
    '(',
    ')',
    '[',
    ']',
    '{',
    '}',
    '-',
  ];

  return specialRegexChars.includes(char) ? `\\${char}` : char;
};

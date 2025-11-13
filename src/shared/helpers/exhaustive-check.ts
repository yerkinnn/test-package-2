export function exhaustiveCheck(param: never): never {
  throw new Error(`Unsupported case: ${param}`);
}

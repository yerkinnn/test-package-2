/** Converts UUID(v4) to two 32-bit integers */
export function convertUuidToTwo32BitNumbers(uuid: string): [number, number] {
  // Remove hyphens from the UUID
  const cleanUuid = uuid.replace(/-/g, '');

  // Parse the first and second 32-bit parts
  const part1 = parseInt(cleanUuid.substring(0, 8), 16);
  const part2 = parseInt(cleanUuid.substring(8, 16), 16);
  const part3 = parseInt(cleanUuid.substring(16, 24), 16);
  const part4 = parseInt(cleanUuid.substring(24, 32), 16);

  // Combine the parts to form two 32-bit integers
  const key1 = part1 ^ part3; // XOR operation to combine
  const key2 = part2 ^ part4; // XOR operation to combine

  return [key1, key2];
}

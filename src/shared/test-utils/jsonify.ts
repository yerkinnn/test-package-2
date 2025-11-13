export function jsonify(obj: unknown): ReturnType<typeof JSON.parse> {
  return JSON.parse(JSON.stringify(obj));
}

export function findArrayDifferences(
  sourceArray: string[],
  destinationArray: string[],
): { itemsExclusiveToSourceArray: string[]; itemsExclusiveToDestinationArray: string[] } {
  const sourceSet = new Set(sourceArray);
  const destinationSet = new Set(destinationArray);

  const itemsExclusiveToSourceArray = sourceArray.filter((item) => !destinationSet.has(item));
  const itemsExclusiveToDestinationArray = destinationArray.filter((item) => !sourceSet.has(item));

  return { itemsExclusiveToSourceArray, itemsExclusiveToDestinationArray };
}

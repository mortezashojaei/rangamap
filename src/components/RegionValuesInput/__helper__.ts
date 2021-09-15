export function chunk<T>(array: Array<T>, chunkSize: number) {
  let chunks = [],
    i = 0,
    n = array.length;

  while (i < n) {
    chunks.push(array.slice(i, (i += chunkSize)));
  }

  return chunks;
}

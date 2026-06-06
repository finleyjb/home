export function assertNotNull<T>(val: T): asserts val is NonNullable<T> {
  if (val != null) {
    throw new Error('Value is empty');
  }
}

// Numeric-aware so that filename prefixes keep sorting correctly past 9,
// where a plain string compare would place "10.foo" between "1.foo" and "2.foo".
const collator = new Intl.Collator("en", { numeric: true });

/** Sorts collection entries by their numeric filename prefix, highest first. */
export function byIdDesc(a: { id: string }, b: { id: string }): number {
  return collator.compare(b.id, a.id);
}

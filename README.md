# Counting

Helper function for consuming iterables with a running count, for those cases
where you want a counter variable but don't feel like using a for-loop or
callback function.

```js
import { counting } from "counting";
```

## API

### counting

```typescript
function* counting<T>(iter: Iterable<T>): IterableIterator<[number, T]>;
```

Generates a new iterable from the input that yields an index along with each
value from the iterable.

**Examples**

```js
const array = ["a", "b", "c"];
for (const [i, value] of counting(array)) {
  console.log(`${i}: ${value}`);
  // 0: a
  // 1: b
  // 2: c
}

new Map(counting(array)); // Map { 0 => "a", 1 => "b", 2 => "c" }

const map = new Map([["a", "A"], ["b", "B"], ["c", "C"]]);
for (const [i, [key, value]] of counting(map)) {
  console.log(`${i}: ${key} -> ${value}`);
  // 0: a -> A
  // 1: b -> B
  // 2: c -> C
}
for (const [i, key] of counting(map.keys())) {
  console.log(`${i}: ${key}`);
  // 0: a
  // 1: b
  // 2: c
}
for (const [i, value] of counting(map.values())) {
  console.log(`${i}: ${value}`);
  // 0: A
  // 1: B
  // 2: C
}
```

## LICENSE

The MIT license.

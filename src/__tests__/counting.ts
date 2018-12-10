import { counting } from "..";

test("returns an index and value for each value of the generator", () => {
  const iterable = ["a", "b", "c", "d"];
  let i = 0;
  for (const value of counting(iterable)) {
    expect(value[0]).toEqual(i);
    expect(value[1]).toEqual(iterable[i]);
    i++;
  }
  expect(i).toEqual(iterable.length);
});

test("works with arbitrary generators", () => {
  function* generator() {
    yield "a";
    yield { hello: "world" };
    yield ["hey", "yes", "you"];
    yield true;
    yield null;
    yield undefined;
    yield 123;
  }
  expect(Array.from(counting(generator()))).toMatchSnapshot();
});

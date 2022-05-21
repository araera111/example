import { range } from "rambda";

const start = performance.now();

const r = range(1, 10000);

r.forEach((element) => {
  console.log(element);
});
const end = performance.now();

console.log(end - start);

let greet: Function;

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
}

add(10, 5);
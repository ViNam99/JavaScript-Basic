function factorials(number) {
  let multiple = 1;
  for (let i = 1; i <= number; i++) {
    multiple *= i;
  }
  return multiple;
}

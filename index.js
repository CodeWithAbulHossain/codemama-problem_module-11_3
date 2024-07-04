// problem 1
function main(input) {
  let data = input.split("\n");

  const n = Number(data[0]);
  const arr = data[1]
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => a - b);

  let median;
  if (n % 2 == 0) {
    const k = parseInt(n / 2);
    median = (arr[k] + arr[k - 1]) / 2;
  } else {
    median = arr[parseInt(n / 2)];
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < median) sum = sum + arr[i];
  }
  console.log(sum);
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});

// problem 2
function main(input) {
  let num = Number(input);

  let temp;
  let output = 0;
  while (num > 0) {
    temp = num % 10;
    num = parseInt(num / 10);
    output = output * 10 + temp;
  }
  console.log(output);
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});

// problem 3
function main(input) {
  /**
   * Write JavaScript code from here
   */
  const n = Number(input);
  let output = 1;
  for (let i = 1; i <= n; i++) {
    output = output * i;
  }
  console.log(output);
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});

// problem 4
function main(input) {
  let rev = input.split("").reverse().join("");

  if (input === rev) {
    console.log(`${input} is a palindrome number`);
  } else {
    console.log(`${input} is not a palindrome number`);
  }
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});

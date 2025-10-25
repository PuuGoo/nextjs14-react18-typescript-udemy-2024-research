// ========================================
// 6. HÀM VÀ THAM SỐ TRONG JAVASCRIPT
// ========================================

console.log("=== HÀM VÀ THAM SỐ TRONG JAVASCRIPT ===");

// ========================================
// 1. KHAI BÁO HÀM - FUNCTION DECLARATION
// ========================================

console.log("\n=== KHAI BÁO HÀM ===");

// Function Declaration - Được hoisted
function sayHello(name) {
  return `Xin chào, ${name}!`;
}

console.log("Function declaration:", sayHello("Alice"));

// Có thể gọi hàm trước khi khai báo (do hoisting)
console.log("Hoisted function:", hoistedFunction());

function hoistedFunction() {
  return "Tôi được gọi trước khi khai báo!";
}

// ========================================
// 2. BIỂU THỨC HÀM - FUNCTION EXPRESSION
// ========================================

console.log("\n=== BIỂU THỨC HÀM ===");

// Function Expression - Không được hoisted
const sayGoodbye = function (name) {
  return `Tạm biệt, ${name}!`;
};

console.log("Function expression:", sayGoodbye("Bob"));

// Named function expression
const namedExpression = function greetUser(name) {
  return `Chào ${name} từ named expression!`;
};

console.log("Named expression:", namedExpression("Charlie"));

// ========================================
// 3. ARROW FUNCTIONS - HÀM MŨI TÊN (ES6+)
// ========================================

console.log("\n=== ARROW FUNCTIONS ===");

// Arrow function cơ bản
const add = (a, b) => {
  return a + b;
};

// Arrow function rút gọn (một dòng)
const multiply = (a, b) => a * b;

// Arrow function với một tham số (không cần ngoặc đơn)
const square = (x) => x * x;

// Arrow function không tham số
const getCurrentTime = () => new Date().toLocaleTimeString();

// Arrow function với object literal (cần ngoặc đơn)
const createUser = (name, age) => ({ name, age, isActive: true });

console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 7));
console.log("Square:", square(6));
console.log("Current time:", getCurrentTime());
console.log("Create user:", createUser("David", 25));

// ========================================
// 4. THAM SỐ HÀM (PARAMETERS)
// ========================================

console.log("\n=== THAM SỐ HÀM ===");

// Tham số cơ bản
function introduceBasic(name, age, city) {
  return `Tôi là ${name}, ${age} tuổi, sống tại ${city}`;
}

console.log("Basic parameters:", introduceBasic("Emma", 28, "Hanoi"));

// Tham số với giá trị mặc định (Default Parameters)
function greetWithDefault(name = "Khách", greeting = "Xin chào") {
  return `${greeting}, ${name}!`;
}

console.log("Default param 1:", greetWithDefault());
console.log("Default param 2:", greetWithDefault("Frank"));
console.log("Default param 3:", greetWithDefault("Grace", "Chào bạn"));

// Tham số mặc định với biểu thức
function createMessage(text, timestamp = new Date().toLocaleString()) {
  return `[${timestamp}] ${text}`;
}

console.log("Default with expression:", createMessage("Hello World"));

// Tham số mặc định phụ thuộc vào tham số khác
function calculateArea(width, height = width) {
  return width * height;
}

console.log("Square area:", calculateArea(5)); // 5 * 5 = 25
console.log("Rectangle area:", calculateArea(5, 8)); // 5 * 8 = 40

// ========================================
// 5. REST PARAMETERS - THAM SỐ CÒNG LẠI (...)
// ========================================

console.log("\n=== REST PARAMETERS ===");

// Rest parameters - thu thập tất cả tham số còn lại
// numbers là mảng chứa mọi đối số gom bằng dấu ...
function sum(...numbers) {
  // reduce cộng dồn từng phần tử vào tổng, khởi tạo từ 0
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of numbers:", sum(1, 2, 3, 4, 5, 6));
console.log("Sum with different count:", sum(10, 20));

// Rest parameters kết hợp với tham số thường
function logMessage(level, ...messages) {
  // messages là mảng các phần nội dung cần ghép
  console.log(`[${level}]`, messages.join(" "));
}

logMessage("INFO", "System", "started", "successfully");
logMessage("ERROR", "Connection", "failed");

// Rest parameters với arrow function
// Math.max cần từng đối số riêng lẻ nên dùng ...nums để trải ra
const findMax = (...nums) => Math.max(...nums);
console.log("Max number:", findMax(3, 7, 2, 9, 1));

// ========================================
// 6. ARGUMENTS OBJECT (Cách cũ)
// ========================================

console.log("\n=== ARGUMENTS OBJECT ===");

// Arguments object - chỉ hoạt động với function declaration/expression
function oldStyleSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    // arguments là đối tượng dạng mảng chứa toàn bộ tham số truyền vào
    total += arguments[i];
  }
  return total;
}

console.log("Arguments object sum:", oldStyleSum(1, 2, 3, 4));

// Chuyển arguments thành array
function argumentsToArray() {
  // Array.from giúp biến arguments thành mảng thực sự để thao tác linh hoạt
  const argsArray = Array.from(arguments);
  console.log("Arguments as array:", argsArray);
  return argsArray;
}

argumentsToArray("a", "b", "c");

// Lưu ý: Arrow functions không có arguments object
const arrowWithArgs = () => {
  try {
    // Arrow function không sở hữu arguments nên truy cập sẽ lỗi
    console.log(arguments); // ❌ ReferenceError
  } catch (error) {
    console.log("Arrow functions don't have arguments object");
  }
};
arrowWithArgs();

// ========================================
// 7. DESTRUCTURING PARAMETERS - THAM SỐ PHÂN RÃ
// ========================================

console.log("\n=== DESTRUCTURING PARAMETERS ===");

// Object destructuring parameters
function processUser({ name, age, email = "N/A" }) {
  return `User: ${name}, Age: ${age}, Email: ${email}`;
}

const userData = { name: "Helen", age: 30, city: "Saigon" };
console.log("Object destructuring:", processUser(userData));

// Array destructuring parameters
function calculateDistance([x1, y1], [x2, y2]) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

console.log("Distance:", calculateDistance([0, 0], [3, 4])); // 5

// Nested destructuring
function displayAddress({
  name,
  address: { street, city, zipCode = "Unknown" },
}) {
  return `${name} lives at ${street}, ${city} ${zipCode}`;
}

const personData = {
  name: "Ivan",
  address: {
    street: "123 Main St",
    city: "Hanoi",
  },
};

console.log("Nested destructuring:", displayAddress(personData));

// ========================================
// 8. CALLBACK FUNCTIONS - HÀM CALLBACK
// ========================================

console.log("\n=== CALLBACK FUNCTIONS ===");

// Callback function cơ bản
function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (x) => x * 2);
const squared = processArray(numbers, (x) => x * x);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);

// Callback với multiple parameters
function calculator(a, b, operation) {
  return operation(a, b);
}

console.log(
  "Addition:",
  calculator(10, 5, (x, y) => x + y)
);
console.log(
  "Subtraction:",
  calculator(10, 5, (x, y) => x - y)
);
console.log(
  "Multiplication:",
  calculator(10, 5, (x, y) => x * y)
);

// Async callback simulation
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Sample Data" };
    callback(data);
  }, 1000);
}

console.log("Fetching data...");
fetchData((data) => {
  console.log("Data received:", data);
});

// ========================================
// 9. HIGHER-ORDER FUNCTIONS - HÀM BẬC CAO
// ========================================

console.log("\n=== HIGHER-ORDER FUNCTIONS ===");

// Hàm trả về hàm khác
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 7:", double(7));
console.log("Triple 5:", triple(5));

// Hàm nhận hàm làm tham số và trả về hàm
function withLogging(func) {
  return function (...args) {
    console.log(`Calling function with args:`, args);
    const result = func(...args);
    console.log(`Function returned:`, result);
    return result;
  };
}

const loggedAdd = withLogging((a, b) => a + b);
loggedAdd(3, 4);

// Currying - Hàm trả về hàm liên tiếp
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Arrow function currying
const curriedMultiply = (a) => (b) => (c) => a * b * c;

console.log("Curried add:", curriedAdd(1)(2)(3));
console.log("Curried multiply:", curriedMultiply(2)(3)(4));

// ========================================
// 10. CLOSURE - BAO ĐÓNG
// Closure là khả năng của một hàm trong JavaScript khi ghi nhớ và truy cập các biến từ phạm vi bên ngoài hàm đó, ngay cả khi hàm bên ngoài đã hoàn thành thực thi.
// ========================================

console.log("\n=== CLOSURE ===");

// Closure cơ bản
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter1:", counter1()); // 1
console.log("Counter1:", counter1()); // 2
console.log("Counter2:", counter2()); // 1
console.log("Counter1:", counter1()); // 3

// Closure với private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient funds";
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = createBankAccount(100);
console.log("Initial balance:", account.getBalance());
console.log("After deposit 50:", account.deposit(50));
console.log("After withdraw 30:", account.withdraw(30));
console.log("Try withdraw 200:", account.withdraw(200));

// ========================================
// 11. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ========================================

console.log("\n=== IIFE ===");

// IIFE cơ bản
(function () {
  console.log("IIFE executed immediately!");
})();

// IIFE với parameters
(function (name, version) {
  console.log(`App: ${name}, Version: ${version}`);
})("MyApp", "1.0.0");

// IIFE trả về giá trị
const result = (function (x, y) {
  return x * y + 10;
})(5, 6);

console.log("IIFE result:", result);

// IIFE với arrow function
((name) => {
  console.log(`Arrow IIFE: Hello ${name}`);
})("World");

// ========================================
// 12. FUNCTION METHODS - CALL, APPLY, BIND
// ========================================

console.log("\n=== FUNCTION METHODS ===");

const person1 = { name: "John", age: 30 };
const person2 = { name: "Jane", age: 25 };

function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}, ${this.age} years old${punctuation}`;
}

// Call method - truyền từng argument riêng lẻ
console.log("Call method:", introduce.call(person1, "Hello", "!"));
console.log("Call method:", introduce.call(person2, "Hi", "."));

// Apply method - truyền arguments dưới dạng array
console.log("Apply method:", introduce.apply(person1, ["Greetings", "!!!"]));

// Bind method - tạo hàm mới với this đã được bind
const boundIntroduce = introduce.bind(person2);
console.log("Bind method:", boundIntroduce("Hey", "~"));

// Bind với partial application
const sayHi = introduce.bind(person1, "Hi");
console.log("Partial bind:", sayHi("!"));

// ========================================
// 13. RECURSION - ĐỆ QUY
// ========================================

console.log("\n=== RECURSION ===");

// Factorial recursion
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

console.log("Factorial 5:", factorial(5));

// Fibonacci recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i <= 7; i++) {
  console.log(`F(${i}) = ${fibonacci(i)}`);
}

// Countdown recursion
function countdown(n) {
  console.log(n);
  if (n > 0) {
    countdown(n - 1);
  } else {
    console.log("Blast off! 🚀");
  }
}

console.log("Countdown from 5:");
countdown(5);

// Tree traversal recursion
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] },
      ],
    },
    {
      value: 3,
      children: [{ value: 6, children: [] }],
    },
  ],
};

function traverseTree(node, depth = 0) {
  const indent = "  ".repeat(depth);
  console.log(`${indent}Node: ${node.value}`);

  node.children.forEach((child) => {
    traverseTree(child, depth + 1);
  });
}

console.log("Tree traversal:");
traverseTree(tree);

// ========================================
// 14. FUNCTION SCOPE VÀ THIS
// ========================================

console.log("\n=== FUNCTION SCOPE VÀ THIS ===");

// Global scope
var globalVar = "I'm global";

function outerFunction() {
  var outerVar = "I'm in outer function";

  function innerFunction() {
    var innerVar = "I'm in inner function";
    console.log("Inner can access:", { globalVar, outerVar, innerVar });
  }

  innerFunction();
  // console.log(innerVar); // ❌ ReferenceError
}

outerFunction();

// This trong different contexts
const obj = {
  name: "Object Method",
  regularFunction: function () {
    console.log("Regular function this:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow function this:", this.name); // undefined hoặc global
  },
  nestedExample: function () {
    console.log("Outer this:", this.name);

    // Regular function trong method
    function inner() {
      console.log("Inner regular this:", this.name); // undefined
    }

    // Arrow function trong method
    const innerArrow = () => {
      console.log("Inner arrow this:", this.name); // "Object Method"
    };

    inner();
    innerArrow();
  },
};

obj.regularFunction();
obj.arrowFunction();
obj.nestedExample();

// ========================================
// 15. GENERATOR FUNCTIONS - HÀM SINH
// ========================================

console.log("\n=== GENERATOR FUNCTIONS ===");

// Generator function cơ bản
function* simpleGenerator() {
  console.log("Generator started");
  yield 1;
  console.log("After first yield");
  yield 2;
  console.log("After second yield");
  yield 3;
  console.log("Generator finished");
}

const gen = simpleGenerator();
console.log("Generator next 1:", gen.next());
console.log("Generator next 2:", gen.next());
console.log("Generator next 3:", gen.next());
console.log("Generator next 4:", gen.next());

// Generator với infinite sequence
function* infiniteCounter() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

const counter = infiniteCounter();
console.log("Infinite counter:");
for (let i = 0; i < 5; i++) {
  console.log(counter.next().value);
}

// Generator với yield*
function* innerGenerator() {
  yield "a";
  yield "b";
}

function* outerGenerator() {
  yield 1;
  yield* innerGenerator();
  yield 2;
}

console.log("Generator with yield*:");
for (const value of outerGenerator()) {
  console.log(value);
}

// ========================================
// 16. ASYNC/AWAIT VÀ PROMISES
// ========================================

console.log("\n=== ASYNC/AWAIT VÀ PROMISES ===");

// Promise-based function
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Async function
async function asyncExample() {
  console.log("Async function started");

  await delay(1000);
  console.log("After 1 second delay");

  return "Async function completed";
}

// Using async function
asyncExample().then((result) => {
  console.log("Async result:", result);
});

// Error handling in async functions
async function asyncWithError() {
  try {
    await delay(500);
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Caught error:", error.message);
    return "Error handled";
  }
}

asyncWithError().then((result) => {
  console.log("Error handling result:", result);
});

// ========================================
// 17. FUNCTION COMPOSITION
// ========================================

console.log("\n=== FUNCTION COMPOSITION ===");

// Simple function composition
const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const squareNum = (x) => x * x;

// Manual composition
const compose = (f, g) => (x) => f(g(x));
const addOneThenDouble = compose(multiplyByTwo, addOne);

console.log("Compose example:", addOneThenDouble(3)); // (3 + 1) * 2 = 8

// Multiple function composition
const pipe =
  (...functions) =>
  (value) =>
    functions.reduce((acc, fn) => fn(acc), value);

const pipeline = pipe(addOne, multiplyByTwo, squareNum);
console.log("Pipeline example:", pipeline(2)); // ((2 + 1) * 2)² = 36

// ========================================
// 18. MEMOIZATION - GHI NHỚ KẾT QUẢ
// ========================================

console.log("\n=== MEMOIZATION ===");

// Memoization decorator
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Cache hit for", args);
      return cache.get(key);
    }

    console.log("Computing for", args);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Memoized fibonacci
const memoizedFib = memoize(function (n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log("Memoized Fibonacci:");
console.log("fib(10):", memoizedFib(10));
console.log("fib(10) again:", memoizedFib(10)); // Should use cache

// ========================================
// 19. BEST PRACTICES
// ========================================

console.log("\n=== BEST PRACTICES ===");

// 1. Sử dụng tên hàm có ý nghĩa
function calculateTotalPrice(items, taxRate) {
  return items.reduce((total, item) => total + item.price, 0) * (1 + taxRate);
}

// 2. Keep functions small and focused
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 3. Use pure functions when possible
function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
}

// 4. Error handling
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// 5. Documentation with JSDoc
/**
 * Calculates the area of a circle
 * @param {number} radius - The radius of the circle
 * @returns {number} The area of the circle
 */
function calculateCircleArea(radius) {
  if (radius < 0) {
    throw new Error("Radius cannot be negative");
  }
  return Math.PI * radius * radius;
}

console.log("Best practices examples:");
console.log(
  "Total price:",
  calculateTotalPrice([{ price: 10 }, { price: 20 }], 0.1)
);
console.log("Email valid:", validateEmail("test@example.com"));
console.log("Currency:", formatCurrency(1234.56));
console.log("Circle area:", calculateCircleArea(5));

// ========================================
// 20. TÓM TẮT VÀ SO SÁNH
// ========================================

console.log("\n=== TÓM TẮT VÀ SO SÁNH ===");

const functionComparison = {
  "Function Declaration": {
    Hoisting: "✅ Yes",
    "this binding": "Dynamic",
    "arguments object": "✅ Yes",
    Syntax: "function name() {}",
  },
  "Function Expression": {
    Hoisting: "❌ No",
    "this binding": "Dynamic",
    "arguments object": "✅ Yes",
    Syntax: "const name = function() {}",
  },
  "Arrow Function": {
    Hoisting: "❌ No",
    "this binding": "Lexical (inherited)",
    "arguments object": "❌ No",
    Syntax: "const name = () => {}",
  },
};

console.table(functionComparison);

console.log("\n🎉 Hoàn thành bài học về Hàm và Tham số trong JavaScript!");

// ========================================
// 21. BÀI TẬP THỰC HÀNH
// ========================================

console.log("\n=== BÀI TẬP THỰC HÀNH ===");

// Bài tập 1: Tạo calculator với closure
function createCalculator() {
  let result = 0;

  return {
    add: (num) => {
      result += num;
      return result;
    },
    subtract: (num) => {
      result -= num;
      return result;
    },
    multiply: (num) => {
      result *= num;
      return result;
    },
    divide: (num) => {
      if (num !== 0) result /= num;
      return result;
    },
    clear: () => {
      result = 0;
      return result;
    },
    getResult: () => result,
  };
}

const calc = createCalculator();
console.log("Calculator test:");
console.log("Add 10:", calc.add(10));
console.log("Multiply by 2:", calc.multiply(2));
console.log("Subtract 5:", calc.subtract(5));

// Bài tập 2: Function pipeline
const processText = pipe(
  (text) => text.toLowerCase(),
  (text) => text.trim(),
  (text) => text.split(" "),
  (words) => words.filter((word) => word.length > 2),
  (words) => words.join("-")
);

console.log("Text processing:", processText("  Hello Beautiful World  "));

// Bài tập 3: Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedLog = debounce((message) => {
  console.log("Debounced:", message);
}, 1000);

// Test debounce
debouncedLog("First call");
debouncedLog("Second call");
debouncedLog("Third call"); // Only this will execute after 1 second

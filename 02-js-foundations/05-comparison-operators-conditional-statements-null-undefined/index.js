// ========================================
// 5. TOÁN TỬ SO SÁNH, CÂU ĐIỀU KIỆN VÀ KIỂU DỮ LIỆU UNDEFINED, NULL
// ========================================

console.log("=== TOÁN TỬ SO SÁNH, CÂU ĐIỀU KIỆN VÀ UNDEFINED/NULL ===");

// ========================================
// 1. TOÁN TỬ SO SÁNH (COMPARISON OPERATORS)
// ========================================

console.log("\n=== TOÁN TỬ SO SÁNH CỞ BẢN ===");

const a = 10;
const b = 20;
const c = "10";

// Toán tử bằng (==) - So sánh giá trị với chuyển đổi kiểu
console.log("10 == '10':", a == c); // true - JavaScript chuyển đổi kiểu tự động
console.log("10 == 20:", a == b); // false

// Toán tử bằng nghiêm ngặt (===) - So sánh cả giá trị và kiểu dữ liệu
console.log("10 === '10':", a === c); // false - khác kiểu dữ liệu
console.log("10 === 10:", a === 10); // true

// Toán tử không bằng (!=)
console.log("10 != '10':", a != c); // false
console.log("10 != 20:", a != b); // true

// Toán tử không bằng nghiêm ngặt (!==)
console.log("10 !== '10':", a !== c); // true - khác kiểu
console.log("10 !== 10:", a !== 10); // false

// Toán tử so sánh lớn hơn, nhỏ hơn
console.log("10 > 20:", a > b); // false
console.log("10 < 20:", a < b); // true
console.log("10 >= 10:", a >= 10); // true
console.log("10 <= 5:", a <= 5); // false

// ========================================
// 2. TOÁN TỬ SO SÁNH VỚI CÁC TRƯỜNG HỢP ĐỚC BIỆT
// ========================================

console.log("\n=== TRƯỜNG HỢP ĐẶC BIỆT ===");

// So sánh với boolean
console.log("true == 1:", true == 1); // true
console.log("true === 1:", true === 1); // false
console.log("false == 0:", false == 0); // true
console.log("false === 0:", false === 0); // false

// So sánh với string
console.log("'5' > '10':", "5" > "10"); // true - so sánh theo alphabet
console.log("'5' > 10:", "5" > 10); // false - chuyển đổi thành số
console.log("'abc' > 'def':", "abc" > "def"); // false

// So sánh với NaN
console.log("NaN == NaN:", NaN == NaN); // false - NaN không bằng chính nó
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true - cách kiểm tra đúng

// So sánh với Infinity
console.log("Infinity > 1000:", Infinity > 1000); // true
console.log("-Infinity < -1000:", -Infinity < -1000); // true

// ========================================
// 3. KIỂU DỮ LIỆU NULL
// ========================================

console.log("\n=== KIỂU DỮ LIỆU NULL ===");

// Null đại diện cho "không có giá trị" hoặc "rỗng"
let emptyValue = null;
console.log("Giá trị null:", emptyValue);
console.log("Type của null:", typeof emptyValue); // "object" - đây là bug lịch sử của JS

// Kiểm tra null
function checkNull(value) {
  if (value === null) {
    console.log("Giá trị là null");
  } else {
    console.log("Giá trị không phải null:", value);
  }
}

checkNull(null);
checkNull(0);
checkNull("");
checkNull(false);

// So sánh null với các giá trị khác
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0); // false
console.log("null == '':", null == ""); // false
console.log("null == false:", null == false); // false

// ========================================
// 4. KIỂU DỮ LIỆU UNDEFINED
// ========================================

console.log("\n=== KIỂU DỮ LIỆU UNDEFINED ===");

// Undefined xuất hiện khi:
// 1. Biến được khai báo nhưng chưa gán giá trị
let notAssigned;
console.log("Biến chưa gán giá trị:", notAssigned);

// 2. Thuộc tính object không tồn tại
const person = { name: "John" };
console.log("Thuộc tính không tồn tại:", person.age);

// 3. Hàm không return gì
function noReturn() {
  console.log("Hàm không return");
}
const result = noReturn();
console.log("Kết quả hàm không return:", result);

// 4. Tham số hàm không được truyền
function greet(name, greeting) {
  console.log("Name:", name, "- Greeting:", greeting);
}
greet("Alice"); // greeting sẽ là undefined

// Kiểm tra undefined
console.log("Type của undefined:", typeof undefined); // "undefined"

function checkUndefined(value) {
  if (value === undefined) {
    console.log("Giá trị là undefined");
  } else if (typeof value === "undefined") {
    console.log("Kiểu dữ liệu là undefined");
  } else {
    console.log("Giá trị đã được định nghĩa:", value);
  }
}

checkUndefined(undefined);
checkUndefined(null);
checkUndefined(0);
checkUndefined("");

// ========================================
// 5. SO SÁNH NULL VÀ UNDEFINED
// ========================================

console.log("\n=== SO SÁNH NULL VÀ UNDEFINED ===");

const comparison = {
  "Ý nghĩa": {
    null: "Có chủ ý gán giá trị rỗng",
    undefined: "Chưa được gán giá trị hoặc không tồn tại",
  },
  Typeof: {
    null: "object (bug của JavaScript)",
    undefined: "undefined",
  },
  "JSON.stringify": {
    null: "null",
    undefined: "undefined bị bỏ qua",
  },
};

console.table(comparison);

// Ví dụ thực tế
let userInput = null; // Người dùng chưa nhập gì
let configOption; // Tùy chọn chưa được thiết lập

console.log("User input:", userInput);
console.log("Config option:", configOption);

// JSON stringify
const data = {
  name: "John",
  age: null,
  address: undefined,
};
console.log("JSON stringify:", JSON.stringify(data)); // address sẽ bị bỏ qua

// ========================================
// 6. CÂU ĐIỀU KIỆN IF/ELSE
// ========================================

console.log("\n=== CÂU ĐIỀU KIỆN IF/ELSE ===");

// If cơ bản
const age = 18;
if (age >= 18) {
  console.log("Đủ tuổi trưởng thành");
}

// If-else
const weather = "sunny";
if (weather === "sunny") {
  console.log("Trời đẹp, đi chơi nào!");
} else {
  console.log("Ở nhà xem phim");
}

// If-else if-else
const score = 85;
if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 80) {
  console.log("Giỏi");
} else if (score >= 70) {
  console.log("Khá");
} else if (score >= 50) {
  console.log("Trung bình");
} else {
  console.log("Cần cố gắng thêm");
}

// Nested if (if lồng nhau)
const isLoggedIn = true;
const hasPermission = true;

if (isLoggedIn) {
  console.log("Người dùng đã đăng nhập");
  if (hasPermission) {
    console.log("Có quyền truy cập trang admin");
  } else {
    console.log("Không có quyền truy cập trang admin");
  }
} else {
  console.log("Vui lòng đăng nhập");
}

// ========================================
// 7. TOÁN TỬ TERNARY (? :)
// ========================================

console.log("\n=== TOÁN TỬ TERNARY ===");

// Cú pháp: condition ? valueIfTrue : valueIfFalse
const temperature = 25;
const clothing = temperature > 20 ? "Áo thun" : "Áo khoác";
console.log("Nên mặc:", clothing);

// Ternary lồng nhau (nên tránh vì khó đọc)
const time = 14;
const greeting =
  time < 12
    ? "Chào buổi sáng"
    : time < 18
    ? "Chào buổi chiều"
    : "Chào buổi tối";
console.log(greeting);

// Ternary với null/undefined
const userName = null;
const displayName = userName ? userName : "Khách";
console.log("Tên hiển thị:", displayName);

// ========================================
// 8. TOÁN TỬ LOGIC (&&, ||, !)
// ========================================

console.log("\n=== TOÁN TỬ LOGIC ===");

// AND (&&) - tất cả phải đúng
const isAdult = true;
const hasLicense = true;
const canDrive = isAdult && hasLicense;
console.log("Có thể lái xe:", canDrive);

// OR (||) - chỉ cần một điều kiện đúng
const isWeekend = false;
const isHoliday = true;
const canRest = isWeekend || isHoliday;
console.log("Có thể nghỉ ngơi:", canRest);

// NOT (!) - đảo ngược boolean
const isRaining = false;
const shouldTakeUmbrella = !isRaining;
console.log("Không cần ô:", shouldTakeUmbrella);

// Short-circuit evaluation(Short-circuit evaluation (đánh giá ngắn mạch / rút gọn) – cơ chế mà JavaScript dừng việc kiểm tra khi kết quả đã được xác định.)
// && - dừng lại ở falsy đầu tiên
console.log(
  "false && console.log('không in'):",
  false && console.log("không in")
);
console.log("true && 'in ra':", true && "in ra");

// || - dừng lại ở truthy đầu tiên
console.log("true || 'không kiểm tra':", true || "không kiểm tra");
console.log("false || 'kiểm tra tiếp':", false || "kiểm tra tiếp");

// ========================================
// 9. TRUTHY VÀ FALSY VALUES
// ========================================

console.log("\n=== TRUTHY VÀ FALSY VALUES ===");

// Falsy values - được coi là false trong điều kiện
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("Falsy values:");
falsyValues.forEach((value) => {
  console.log(`${value} (${typeof value}):`, Boolean(value));
});

// Truthy values - được coi là true trong điều kiện
const truthyValues = [
  true,
  1,
  -1,
  "hello",
  "0",
  "false",
  [],
  {},
  function () {},
];
console.log("\nTruthy values:");
truthyValues.forEach((value) => {
  console.log(`${value} (${typeof value}):`, Boolean(value));
});

// Sử dụng trong điều kiện
function checkValue(value) {
  if (value) {
    console.log(`${value} là truthy`);
  } else {
    console.log(`${value} là falsy`);
  }
}

checkValue(0);
checkValue("");
checkValue("hello");
checkValue([]);
checkValue(null);

// ========================================
// 10. NULLISH COALESCING OPERATOR (??)
// ========================================

console.log("\n=== NULLISH COALESCING OPERATOR (??) ===");

// ?? chỉ kiểm tra null và undefined, không kiểm tra falsy khác
const userAge = 0;
const userHeight = null;
const userWeight = undefined;
const userName2 = "";

// So sánh || với ??
console.log("userAge || 'default':", userAge || "default"); // "default" - vì 0 là falsy
console.log("userAge ?? 'default':", userAge ?? "default"); // 0 - vì 0 không phải null/undefined

console.log("userName2 || 'guest':", userName2 || "guest"); // "guest" - vì "" là falsy
console.log("userName2 ?? 'guest':", userName2 ?? "guest"); // "" - vì "" không phải null/undefined

console.log("userHeight ?? 'unknown':", userHeight ?? "unknown"); // "unknown"
console.log("userWeight ?? 'not set':", userWeight ?? "not set"); // "not set"

// ========================================
// 11. OPTIONAL CHAINING (?.) - Optional chaining (?.) cho phép bạn truy cập an toàn vào thuộc tính (property) hoặc phương thức (method) của một object có thể bị null hoặc undefined, mà không gây lỗi.
// ========================================

console.log("\n=== OPTIONAL CHAINING (?.) ===");

const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Hanoi",
  },
};

const user2 = {
  name: "Bob",
  // không có address
};

// Truy cập an toàn với optional chaining
console.log("user.address?.street:", user.address?.street);
console.log("user2.address?.street:", user2.address?.street); // undefined thay vì lỗi

// Optional chaining với array
const users = [
  { name: "Alice", hobbies: ["reading", "swimming"] },
  { name: "Bob" },
];

console.log("users[0]?.hobbies?.[0]:", users[0]?.hobbies?.[0]);
console.log("users[1]?.hobbies?.[0]:", users[1]?.hobbies?.[0]);

// Optional chaining với method
const api = {
  getData() {
    return "data";
  },
};

const api2 = {};

console.log("api.getData?.():", api.getData?.());
console.log("api2.getData?.():", api2.getData?.()); // undefined, không lỗi

// ========================================
// 12. SWITCH STATEMENT
// ========================================

console.log("\n=== SWITCH STATEMENT ===");

const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("Thứ Hai");
    break;
  case 2:
    console.log("Thứ Ba");
    break;
  case 3:
    console.log("Thứ Tư");
    break;
  case 4:
    console.log("Thứ Năm");
    break;
  case 5:
    console.log("Thứ Sáu");
    break;
  case 6:
    console.log("Thứ Bảy");
    break;
  case 7:
    console.log("Chủ Nhật");
    break;
  default:
    console.log("Ngày không hợp lệ");
}

// Switch với multiple cases
const grade = "B";

switch (grade) {
  case "A":
  case "A+":
    console.log("Xuất sắc");
    break;
  case "B":
  case "B+":
    console.log("Giỏi");
    break;
  case "C":
    console.log("Khá");
    break;
  case "D":
    console.log("Trung bình");
    break;
  case "F":
    console.log("Trượt");
    break;
  default:
    console.log("Điểm không hợp lệ");
}

// ========================================
// 13. XỬ LÝ LỖI VỚI NULL/UNDEFINED
// ========================================

console.log("\n=== XỬ LÝ LỖI VỚI NULL/UNDEFINED ===");

// Hàm kiểm tra giá trị
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

function isNullish(value) {
  return value == null; // kiểm tra cả null và undefined
}

// Test functions
const testValues = [null, undefined, 0, "", false, "hello"];
testValues.forEach((value) => {
  console.log(
    `${value}: isNullOrUndefined = ${isNullOrUndefined(
      value
    )}, isNullish = ${isNullish(value)}`
  );
});

// Hàm với default parameters
function createUser(name = "Anonymous", age = 0, email = null) {
  return {
    name,
    age,
    email: email ?? "no-email@example.com",
  };
}

console.log("User 1:", createUser());
console.log("User 2:", createUser("Alice", 25));
console.log("User 3:", createUser("Bob", 30, "bob@example.com"));

// Defensive programming
function processUserData(userData) {
  if (!userData) {
    console.log("Không có dữ liệu người dùng");
    return;
  }

    const name = userData.name ?? "Unknown";
    const age = userData.age ?? 0;
    const email = userData.email ?? "No email provided";

    console.log(`Processing: ${name}, ${age} years old, ${email}`);
}

processUserData(null);
processUserData({});
processUserData({ name: "Charlie", age: 28 });

// ========================================
// 14. BEST PRACTICES (THỰC HÀNH TỐT)
// ========================================

console.log("\n=== BEST PRACTICES ===");

// 1. Sử dụng === thay vì ==
console.log("✅ Sử dụng strict equality:");
const num1 = 5;
const str1 = "5";
if (num1 === 5) console.log("Số 5");
if (str1 === "5") console.log("Chuỗi '5'");

// 2. Kiểm tra null/undefined một cách rõ ràng
function validateInput(input) {
  if (input === null) {
    return "Input is null";
  }
  if (input === undefined) {
    return "Input is undefined";
  }
  if (input === "") {
    return "Input is empty string";
  }
  return "Input is valid";
}

// 3. Sử dụng nullish coalescing cho default values
function getDisplayName(user) {
  return user?.name ?? "Guest User";
}

// 4. Sử dụng optional chaining cho nested objects
function getUserCity(user) {
  return user?.address?.city ?? "Unknown City";
}

// 5. Tránh comparison operators với null/undefined
console.log("❌ Tránh: null < 1:", null < 1); // true (null chuyển thành 0)
console.log("✅ Tốt hơn: kiểm tra trước khi so sánh");

// ========================================
// 15. TÓM TẮT
// ========================================

console.log("\n=== TÓM TẮT ===");

const summary = {
  "So sánh": {
    "==": "Chuyển đổi kiểu dữ liệu",
    "===": "Nghiêm ngặt (không chuyển đổi)",
    "!=": "Không bằng (chuyển đổi kiểu)",
    "!==": "Không bằng nghiêm ngặt",
  },
  "Null vs Undefined": {
    null: "Có chủ ý gán 'rỗng'",
    undefined: "Chưa được gán hoặc không tồn tại",
  },
  "Toán tử hữu ích": {
    "??": "Nullish coalescing (chỉ null/undefined)",
    "?.": "Optional chaining (truy cập an toàn)",
    "||": "Logical OR (tất cả falsy values)",
    "&&": "Logical AND (short-circuit)",
  },
};

console.table(summary);

console.log(
  "\n🎉 Hoàn thành bài học về toán tử so sánh, câu điều kiện, null và undefined!"
);

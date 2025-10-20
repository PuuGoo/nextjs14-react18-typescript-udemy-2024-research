// ========================================
// 4. BIẾN, KIỂU DỮ LIỆU VÀ SỰ KHÁC NHAU GIỮA LET, CONST, VAR
// ========================================

console.log("=== BIẾN VÀ KIỂU DỮ LIỆU TRONG JAVASCRIPT ===");

// ========================================
// 1. KHAI BÁO BIẾN VỚI VAR, LET, CONST
// ========================================

// VAR - Cách khai báo cũ (ES5)
var varVariable = "Tôi là var";
console.log("var:", varVariable);

// LET - Khai báo biến có thể thay đổi (ES6+)
let letVariable = "Tôi là let";
console.log("let:", letVariable);

// CONST - Khai báo hằng số không thể thay đổi (ES6+)
const constVariable = "Tôi là const";
console.log("const:", constVariable);

// ========================================
// 2. SỰ KHÁC NHAU VỀ SCOPE (PHẠM VI)
// ========================================

console.log("\n=== SCOPE (PHẠM VI) ===");

// Function Scope vs Block Scope
function scopeExample() {
  // VAR có function scope
  if (true) {
    var varInBlock = "var trong block";
    let letInBlock = "let trong block";
    const constInBlock = "const trong block";
  }

  
  console.log("Truy cập var ngoài block:", varInBlock); // Hoạt động
  console.log(letInBlock); // Lỗi: ReferenceError
  // console.log(constInBlock); // Lỗi: ReferenceError
}
scopeExample();

// ========================================
// 3. HOISTING (NÂNG BIẾN)
// ========================================

// Hoisting là gì? Biến và hàm được "nâng" lên đầu phạm vi của chúng trước khi code được thực thi.
/* Ghi nhớ ngắn gọn:
var được hoisting và khởi tạo bằng undefined.

let và const được hoisting nhưng không khởi tạo, dẫn đến ReferenceError nếu truy cập sớm.

Đây là lý do nên tránh dùng var trong code hiện đại.
*/
console.log("\n=== HOISTING ===");
  
// VAR bị hoisting và có giá trị undefined
console.log("var trước khai báo:", hoistedVar); // undefined
var hoistedVar = "Giá trị var";

// LET và CONST cũng bị hoisting nhưng nằm trong Temporal Dead Zone
// console.log(hoistedLet); // Lỗi: ReferenceError
let hoistedLet = "Giá trị let";

// console.log(hoistedConst); // Lỗi: ReferenceError
const hoistedConst = "Giá trị const";

// ========================================
// 4. KHẢ NĂNG THAY ĐỔI GIÁ TRỊ
// ========================================

console.log("\n=== THAY ĐỔI GIÁ TRỊ ===");

// VAR - có thể thay đổi và khai báo lại
var varValue = "Giá trị ban đầu";
varValue = "Giá trị mới";
var varValue = "Khai báo lại"; // Được phép
console.log("var sau thay đổi:", varValue);

// LET - có thể thay đổi nhưng không thể khai báo lại
let letValue = "Giá trị ban đầu";
letValue = "Giá trị mới"; // Được phép
// let letValue = "Khai báo lại"; // Lỗi: SyntaxError
console.log("let sau thay đổi:", letValue);

// CONST - không thể thay đổi (với primitive types)
const constValue = "Giá trị không đổi";
// constValue = "Thay đổi"; // Lỗi: TypeError
console.log("const value:", constValue);

// ========================================
// 5. CONST VỚI OBJECT VÀ ARRAY
// ========================================

console.log("\n=== CONST VỚI OBJECT VÀ ARRAY ===");

// Const với object - có thể thay đổi thuộc tính
const person = {
  name: "Nguyễn Văn A",
  age: 25,
};
person.age = 26; // Được phép thay đổi thuộc tính
person.city = "Hà Nội"; // Được phép thêm thuộc tính
console.log("Object const sau thay đổi:", person);

// Const với array - có thể thay đổi phần tử
const numbers = [1, 2, 3];
numbers.push(4); // Được phép thêm phần tử
numbers[0] = 10; // Được phép thay đổi phần tử
console.log("Array const sau thay đổi:", numbers);

// ========================================
// 6. KIỂU DỮ LIỆU PRIMITIVE (NGUYÊN THỦY)
// ========================================

console.log("\n=== KIỂU DỮ LIỆU PRIMITIVE ===");

// Number - Số
const numberInt = 42;
const numberFloat = 3.14;
const numberNegative = -100;
console.log("Số nguyên:", numberInt, "- Type:", typeof numberInt);
console.log("Số thực:", numberFloat, "- Type:", typeof numberFloat);
console.log("Số âm:", numberNegative, "- Type:", typeof numberNegative);

// String - Chuỗi
const string1 = "Hello World"; // Dấu nháy đôi
const string2 = "JavaScript"; // Dấu nháy đơn
const string3 = `Template literal với ${string2}`; // Template literal
console.log("Chuỗi 1:", string1, "- Type:", typeof string1);
console.log("Chuỗi 2:", string2, "- Type:", typeof string2);
console.log("Template literal:", string3, "- Type:", typeof string3);

// Boolean - Logic
const isTrue = true;
const isFalse = false;
console.log("Boolean true:", isTrue, "- Type:", typeof isTrue);
console.log("Boolean false:", isFalse, "- Type:", typeof isFalse);

// Undefined - Chưa định nghĩa
let undefinedVar;
console.log("Undefined:", undefinedVar, "- Type:", typeof undefinedVar);

// Null - Rỗng
const nullValue = null;
console.log("Null:", nullValue, "- Type:", typeof nullValue); // Bug: trả về "object"

// Symbol - Định danh duy nhất (ES6)
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log("Symbol 1:", symbol1, "- Type:", typeof symbol1);
console.log("Symbol bằng nhau?", symbol1 === symbol2); // false

// BigInt - Số nguyên lớn (ES2020)
const bigNumber = BigInt(9007199254740991);
const bigNumber2 = 9007199254740991n; // Cú pháp ngắn
console.log("BigInt 1:", bigNumber, "- Type:", typeof bigNumber);
console.log("BigInt 2:", bigNumber2, "- Type:", typeof bigNumber2);

// ========================================
// 7. KIỂU DỮ LIỆU REFERENCE (THAM CHIẾU)
// ========================================

console.log("\n=== KIỂU DỮ LIỆU REFERENCE ===");

// Object - Đối tượng
const student = {
  name: "Trần Thị B",
  age: 20,
  subjects: ["Math", "Physics", "Chemistry"],
  address: {
    city: "Hồ Chí Minh",
    district: "Quận 1",
  },
};
console.log("Object:", student, "- Type:", typeof student);

// Array - Mảng
const fruits = ["apple", "banana", "orange"];
const mixedArray = [1, "hello", true, null, undefined];
console.log("Array fruits:", fruits, "- Type:", typeof fruits);
console.log("Mixed array:", mixedArray, "- Type:", typeof mixedArray);

// Function - Hàm
function greet(name) {
  return `Xin chào, ${name}!`;
}
const arrowFunction = (x, y) => x + y;
console.log("Function:", greet, "- Type:", typeof greet);
console.log("Arrow Function:", arrowFunction, "- Type:", typeof arrowFunction);

// Date - Ngày tháng
const currentDate = new Date();
console.log("Date:", currentDate, "- Type:", typeof currentDate);

// RegExp - Biểu thức chính quy
const regex = /[a-z]+/gi;
console.log("RegExp:", regex, "- Type:", typeof regex);

// ========================================
// 8. CHUYỂN ĐỔI KIỂU DỮ LIỆU
// ========================================

console.log("\n=== CHUYỂN ĐỔI KIỂU DỮ LIỆU ===");

// Chuyển sang String
const num = 123;
const strFromNum = String(num);
const strFromNum2 = num.toString();
const strFromNum3 = "" + num;
console.log("Number to String:", strFromNum, typeof strFromNum);

// Chuyển sang Number
const str = "456";
const numFromStr = Number(str);
const numFromStr2 = parseInt(str);
const numFromStr3 = parseFloat("456.78");
const numFromStr4 = +str;
console.log("String to Number:", numFromStr, typeof numFromStr);
console.log("parseInt:", numFromStr2, typeof numFromStr2);
console.log("parseFloat:", numFromStr3, typeof numFromStr3);

// Chuyển sang Boolean
const truthyValues = [1, "hello", [], {}];
const falsyValues = [0, "", null, undefined, NaN, false];
console.log(
  "Truthy values:",
  truthyValues.map((val) => Boolean(val))
);
console.log(
  "Falsy values:",
  falsyValues.map((val) => Boolean(val))
);

// ========================================
// 9. SO SÁNH == VS ===
// ========================================

console.log("\n=== SO SÁNH == VS === ===");

console.log("5 == '5':", 5 == "5"); // true (chuyển đổi kiểu)
console.log("5 === '5':", 5 === "5"); // false (không chuyển đổi)
console.log("true == 1:", true == 1); // true
console.log("true === 1:", true === 1); // false
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// ========================================
// 10. TEMPORAL DEAD ZONE
// ========================================

console.log("\n=== TEMPORAL DEAD ZONE ===");

function temporalDeadZoneExample() {
  console.log("Bắt đầu function");

  // Không thể truy cập let/const trước khi khai báo
  // console.log(tdz); // ReferenceError

  let tdz = "Sau khi khai báo";
  console.log("TDZ variable:", tdz);
}
temporalDeadZoneExample();

// ========================================
// 11. BEST PRACTICES (THỰC HÀNH TỐT)
// ========================================

console.log("\n=== BEST PRACTICES ===");

// 1. Ưu tiên sử dụng const
const API_URL = "https://api.example.com";
const MAX_USERS = 100;

// 2. Sử dụng let khi cần thay đổi giá trị
let counter = 0;
let userName = "";

// 3. Tránh sử dụng var trong code mới
// var oldStyle = "Không nên dùng"; // ❌

// 4. Đặt tên biến có ý nghĩa
const userAge = 25; // ✅ Tốt
const a = 25; // ❌ Không rõ ràng

// 5. Sử dụng camelCase cho tên biến
const firstName = "Nguyễn";
const lastName = "Văn A";
const fullName = `${firstName} ${lastName}`;

console.log("Best practices applied!");

// ========================================
// 12. TÓM TẮT KHÁC BIỆT
// ========================================

console.log("\n=== TÓM TẮT KHÁC BIỆT VAR, LET, CONST ===");

const comparison = {
  "Đặc điểm": {
    var: "Function scoped, Hoisted, Có thể khai báo lại",
    let: "Block scoped, Temporal Dead Zone, Không thể khai báo lại",
    const: "Block scoped, Temporal Dead Zone, Không thể thay đổi",
  },
  Scope: {
    var: "Function scope",
    let: "Block scope",
    const: "Block scope",
  },
  Hoisting: {
    var: "Có (với undefined)",
    let: "Có (nhưng TDZ)",
    const: "Có (nhưng TDZ)",
  },
  "Thay đổi giá trị": {
    var: "Có",
    let: "Có",
    const: "Không (với primitive)",
  },
  "Khai báo lại": {
    var: "Có",
    let: "Không",
    const: "Không",
  },
};

console.table(comparison);

console.log("\n🎉 Hoàn thành bài học về biến và kiểu dữ liệu!");

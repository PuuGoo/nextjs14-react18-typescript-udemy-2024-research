// ========================================
// CHƯƠNG 6: HÀM VÀ THAM SỐ TRONG JAVASCRIPT
// ========================================
// Tổng quan: Hàm là khối code có thể tái sử dụng
// Tham số giúp truyền dữ liệu vào hàm

// ========================================
// 1. KHAI BÁO HÀM CƠ BẢN (FUNCTION DECLARATION)
// ========================================

console.log("\n=== 1. KHAI BÁO HÀM CƠ BẢN ===");

// Function Declaration có tính hoisting (được đưa lên đầu scope)
// Có thể gọi hàm trước khi khai báo
// Syntax: function tenHam(thamSo) { code }

// Ví dụ 1: Hàm không có tham số
function chaoMung() {
  // Hàm đơn giản in ra lời chào
  console.log("Xin chào các bạn!");
  return "Chào mừng đến với JavaScript";
}
console.log("Ví dụ 1 - Gọi hàm:", chaoMung());

// Ví dụ 2: Hàm có tham số và return
function tinhTong(a, b) {
  // Nhận 2 tham số a và b
  // Tính tổng và trả về kết quả
  const ketQua = a + b;
  return ketQua;
}
console.log("Ví dụ 2 - Tổng 5 + 3:", tinhTong(5, 3));
console.log("Ví dụ 2 - Tổng 10 + 20:", tinhTong(10, 20));

// ========================================
// 2. BIỂU THỨC HÀM (FUNCTION EXPRESSION)
// ========================================

console.log("\n=== 2. BIỂU THỨC HÀM ===");

// Function Expression gán hàm vào biến
// KHÔNG có hoisting, phải khai báo trước khi dùng
// Thường dùng khi cần truyền hàm như một giá trị

// Ví dụ 1: Function Expression cơ bản
const tinhHieu = function (x, y) {
  // Hàm được gán vào biến tinhHieu
  // Tính hiệu của 2 số
  return x - y;
};
console.log("Ví dụ 1 - Hiệu 10 - 3:", tinhHieu(10, 3));
console.log("Ví dụ 1 - Hiệu 50 - 20:", tinhHieu(50, 20));

// Ví dụ 2: Function Expression với logic phức tạp
const kiemTraChanLe = function (so) {
  // Kiểm tra số chẵn hay lẻ
  if (so % 2 === 0) {
    return `${so} là số chẵn`;
  } else {
    return `${so} là số lẻ`;
  }
};
console.log("Ví dụ 2:", kiemTraChanLe(7));
console.log("Ví dụ 2:", kiemTraChanLe(12));

// ========================================
// 3. ARROW FUNCTION (HÀM MŨI TÊN - ES6)
// ========================================

console.log("\n=== 3. ARROW FUNCTION ===");

// Arrow Function: cú pháp ngắn gọn hơn
// Không có 'this' riêng, không có 'arguments'
// Syntax: (thamSo) => { code } hoặc thamSo => giaTri

// Ví dụ 1: Arrow function cơ bản
const tinhTich = (a, b) => {
  // Dùng dấu {} khi có nhiều dòng code
  const ketQua = a * b;
  return ketQua;
};
console.log("Ví dụ 1 - Tích 4 * 5:", tinhTich(4, 5));
console.log("Ví dụ 1 - Tích 7 * 8:", tinhTich(7, 8));

// Ví dụ 2: Arrow function rút gọn (implicit return)
const tinhBinhPhuong = (n) => n * n; // Bỏ () nếu 1 tham số, bỏ {} và return
const tinhLapPhuong = (n) => n * n * n;
console.log("Ví dụ 2 - Bình phương 5:", tinhBinhPhuong(5));
console.log("Ví dụ 2 - Lập phương 3:", tinhLapPhuong(3));

// ========================================
// 4. THAM SỐ MẶC ĐỊNH (DEFAULT PARAMETERS)
// ========================================

console.log("\n=== 4. THAM SỐ MẶC ĐỊNH ===");

// Default Parameters (ES6): gán giá trị mặc định cho tham số
// Nếu không truyền giá trị, sẽ dùng giá trị mặc định
// Giúp tránh lỗi undefined

// Ví dụ 1: Hàm với tham số mặc định
function chaoNguoi(ten = "Khách", tuoi = 18) {
  // Nếu không truyền ten, mặc định là "Khách"
  // Nếu không truyền tuoi, mặc định là 18
  return `Xin chào ${ten}, ${tuoi} tuổi`;
}
console.log("Ví dụ 1 - Đầy đủ tham số:", chaoNguoi("Nam", 25));
console.log("Ví dụ 1 - Thiếu tham số:", chaoNguoi("Lan"));
console.log("Ví dụ 1 - Không có tham số:", chaoNguoi());

// Ví dụ 2: Tính diện tích hình chữ nhật với chiều rộng mặc định
const tinhDienTich = (chieuDai, chieuRong = 10) => {
  // Mặc định chieuRong = 10 nếu không truyền
  const dienTich = chieuDai * chieuRong;
  return `Diện tích: ${dienTich} m²`;
};
console.log("Ví dụ 2 - Có 2 tham số:", tinhDienTich(5, 8));
console.log("Ví dụ 2 - Chỉ có chiều dài:", tinhDienTich(7));

// ========================================
// 5. REST PARAMETERS (THAM SỐ CÒN LẠI)
// ========================================

console.log("\n=== 5. REST PARAMETERS ===");

// Rest Parameters (...tenBien): nhóm các tham số còn lại thành mảng
// Cho phép hàm nhận số lượng tham số không xác định
// Phải đặt ở cuối danh sách tham số

// Ví dụ 1: Tính tổng nhiều số
function tongNhieuSo(...cacSo) {
  // ...cacSo sẽ là mảng chứa tất cả tham số truyền vào
  let tong = 0;
  for (let so of cacSo) {
    tong += so;
  }
  return tong;
}
console.log("Ví dụ 1 - Tổng 2 số:", tongNhieuSo(1, 2));
console.log("Ví dụ 1 - Tổng 5 số:", tongNhieuSo(1, 2, 3, 4, 5));
console.log("Ví dụ 1 - Tổng 7 số:", tongNhieuSo(10, 20, 30, 40, 50, 60, 70));

// Ví dụ 2: Kết hợp tham số thường và rest
function giaoVien(tenGiaoVien, ...tenHocSinh) {
  // Tham số đầu là tên giáo viên
  // Các tham số còn lại là danh sách học sinh
  console.log(`Giáo viên: ${tenGiaoVien}`);
  console.log(`Có ${tenHocSinh.length} học sinh:`);
  tenHocSinh.forEach((hs, index) => {
    console.log(`  ${index + 1}. ${hs}`);
  });
  return tenHocSinh.length;
}
console.log(
  "Ví dụ 2 - Số học sinh:",
  giaoVien("Cô Lan", "An", "Bình", "Chi", "Dũng")
);

// ========================================
// 6. ARGUMENTS OBJECT (ĐỐI TƯỢNG ARGUMENTS)
// ========================================

console.log("\n=== 6. ARGUMENTS OBJECT ===");

// arguments: đối tượng giống mảng chứa tất cả tham số
// Chỉ có trong function thông thường (KHÔNG có trong arrow function)
// Không phải mảng thực sự, không có các method như map, filter

// Ví dụ 1: Sử dụng arguments để tính tổng
function tinhTongArguments() {
  // arguments chứa tất cả tham số được truyền vào
  console.log("  Type của arguments:", typeof arguments);
  console.log("  Có phải Array?", Array.isArray(arguments));

  let tong = 0;
  for (let i = 0; i < arguments.length; i++) {
    tong += arguments[i];
  }
  return tong;
}
console.log("Ví dụ 1 - Tổng:", tinhTongArguments(5, 10, 15, 20));

// Ví dụ 2: Chuyển arguments thành mảng thực
function xuLyArguments() {
  // Cách 1: Dùng Array.from()
  const mang1 = Array.from(arguments);
  console.log("  Cách 1 - Array.from():", mang1);

  // Cách 2: Dùng spread operator
  const mang2 = [...arguments];
  console.log("  Cách 2 - Spread:", mang2);

  // Bây giờ có thể dùng các method của Array
  const ketQua = mang2.map((x) => x * 2);
  return ketQua;
}
console.log("Ví dụ 2 - Nhân đôi:", xuLyArguments(1, 2, 3, 4));

// ========================================
// 7. CALLBACK FUNCTION (HÀM GỌI LẠI)
// ========================================

console.log("\n=== 7. CALLBACK FUNCTION ===");

// Callback: hàm được truyền như tham số vào hàm khác
// Hàm nhận callback sẽ gọi (execute) callback đó
// Rất phổ biến trong lập trình bất đồng bộ

// Ví dụ 1: Callback đơn giản
function thucHienPhepTinh(a, b, callback) {
  // Hàm này nhận 2 số và 1 callback function
  const ketQua = callback(a, b);
  console.log(`  Kết quả: ${ketQua}`);
  return ketQua;
}

// Các callback khác nhau cho các phép tính khác nhau
const phepCong = (x, y) => x + y;
const phepNhan = (x, y) => x * y;

console.log("Ví dụ 1 - Phép cộng:");
thucHienPhepTinh(5, 3, phepCong);

console.log("Ví dụ 1 - Phép nhân:");
thucHienPhepTinh(5, 3, phepNhan);

// Ví dụ 2: Callback với xử lý mảng
function xuLyMang(mang, callbackXuLy) {
  // Duyệt qua từng phần tử và áp dụng callback
  const ketQua = [];
  for (let i = 0; i < mang.length; i++) {
    const phanTuMoi = callbackXuLy(mang[i], i);
    ketQua.push(phanTuMoi);
  }
  return ketQua;
}

const soGoc = [1, 2, 3, 4, 5];
console.log("Ví dụ 2 - Mảng gốc:", soGoc);
console.log(
  "Ví dụ 2 - Nhân 3:",
  xuLyMang(soGoc, (x) => x * 3)
);
console.log(
  "Ví dụ 2 - Bình phương:",
  xuLyMang(soGoc, (x) => x * x)
);

// ========================================
// 8. HIGHER-ORDER FUNCTION (HÀM BẬC CAO)
// ========================================

console.log("\n=== 8. HIGHER-ORDER FUNCTION ===");

// Higher-Order Function: hàm nhận hàm khác làm tham số
// hoặc trả về một hàm khác
// Giúp code linh hoạt, dễ tái sử dụng

// Ví dụ 1: Hàm trả về hàm khác (Function Factory)
function taoHamNhan(soNhan) {
  // Trả về một hàm mới
  // Hàm mới này sẽ nhân số đầu vào với soNhan
  return function (soCanNhan) {
    return soCanNhan * soNhan;
  };
}

const nhanVoi2 = taoHamNhan(2);
const nhanVoi5 = taoHamNhan(5);
console.log("Ví dụ 1 - Nhân 10 với 2:", nhanVoi2(10));
console.log("Ví dụ 1 - Nhân 10 với 5:", nhanVoi5(10));

// Ví dụ 2: Hàm nhận và trả về hàm
function taoHamLapLai(fn, soLan) {
  // Trả về hàm mới thực thi fn nhiều lần
  return function (...args) {
    let ketQuaCuoi;
    for (let i = 0; i < soLan; i++) {
      ketQuaCuoi = fn(...args);
      console.log(`  Lần ${i + 1}:`, ketQuaCuoi);
    }
    return ketQuaCuoi;
  };
}

const hamChao = (ten) => `Chào ${ten}!`;
const chao3Lan = taoHamLapLai(hamChao, 3);
console.log("Ví dụ 2 - Lặp 3 lần:");
chao3Lan("Nam");

// ========================================
// 9. CLOSURE (BẢO ĐÓNG)
// ========================================

console.log("\n=== 9. CLOSURE ===");

// Closure: hàm bên trong có thể truy cập biến của hàm bên ngoài
// Ngay cả sau khi hàm bên ngoài đã thực thi xong
// Giúp tạo private variables và data encapsulation

// Ví dụ 1: Closure cơ bản với counter
function taoBoDeM() {
  // Biến count là private, chỉ truy cập qua các hàm bên trong
  let count = 0;

  return {
    tang: function () {
      count++;
      return count;
    },
    giam: function () {
      count--;
      return count;
    },
    layGiaTri: function () {
      return count;
    },
  };
}

const counter1 = taoBoDeM();
const counter2 = taoBoDeM(); // Counter độc lập
console.log("Ví dụ 1 - Counter 1 tăng:", counter1.tang());
console.log("Ví dụ 1 - Counter 1 tăng:", counter1.tang());
console.log("Ví dụ 1 - Counter 2 tăng:", counter2.tang());
console.log("Ví dụ 1 - Counter 1 giảm:", counter1.giam());
console.log("Ví dụ 1 - Counter 1 giá trị:", counter1.layGiaTri());

// Ví dụ 2: Closure với tính toán
function taoMayTinhCaNhan() {
  // Mỗi máy tính có bộ nhớ riêng
  let boNho = 0;

  return {
    cong: function (so) {
      boNho += so;
      return `Cộng ${so}, kết quả: ${boNho}`;
    },
    nhan: function (so) {
      boNho *= so;
      return `Nhân ${so}, kết quả: ${boNho}`;
    },
    xoaBoNho: function () {
      boNho = 0;
      return "Đã xóa bộ nhớ";
    },
  };
}

const mayTinh = taoMayTinhCaNhan();
console.log("Ví dụ 2 -", mayTinh.cong(5));
console.log("Ví dụ 2 -", mayTinh.cong(3));
console.log("Ví dụ 2 -", mayTinh.nhan(2));
console.log("Ví dụ 2 -", mayTinh.xoaBoNho());

// ========================================
// 10. IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// ========================================

console.log("\n=== 10. IIFE ===");

// IIFE: hàm tự gọi ngay sau khi khai báo
// Tạo scope riêng, tránh ô nhiễm global scope
// Syntax: (function() { code })() hoặc (() => { code })()

// Ví dụ 1: IIFE cơ bản
(function () {
  // Hàm này chạy ngay lập tức
  const message = "Đây là IIFE!";
  console.log("Ví dụ 1 -", message);
  console.log("Ví dụ 1 - Hàm tự động chạy không cần gọi");
})();

// Ví dụ 2: IIFE với tham số và return
const ketQuaTinhToan = (function (a, b) {
  // IIFE có thể nhận tham số
  const tong = a + b;
  const tich = a * b;
  console.log(`Ví dụ 2 - Tổng ${a} + ${b} = ${tong}`);
  console.log(`Ví dụ 2 - Tích ${a} * ${b} = ${tich}`);
  // Trả về kết quả để gán vào biến
  return { tong, tich };
})(10, 5); // Truyền tham số ngay khi gọi

console.log("Ví dụ 2 - Kết quả:", ketQuaTinhToan);

// ========================================
// 11. DESTRUCTURING PARAMETERS (THAM SỐ PHÂN RÃ)
// ========================================

console.log("\n=== 11. DESTRUCTURING PARAMETERS ===");

// Destructuring Parameters: phân rã object/array ngay trong tham số
// Giúp code ngắn gọn, dễ đọc hơn
// Có thể kết hợp với default values

// Ví dụ 1: Destructuring object parameters
function thongTinNguoiDung({ ten, tuoi, ngheNghiep = "Chưa rõ" }) {
  // Phân rã object ngay trong tham số
  // ngheNghiep có giá trị mặc định
  return `${ten}, ${tuoi} tuổi, nghề: ${ngheNghiep}`;
}

const user1 = { ten: "Nam", tuoi: 25, ngheNghiep: "Lập trình viên" };
const user2 = { ten: "Lan", tuoi: 22 }; // Không có ngheNghiep
console.log("Ví dụ 1 - User 1:", thongTinNguoiDung(user1));
console.log("Ví dụ 1 - User 2:", thongTinNguoiDung(user2));

// Ví dụ 2: Destructuring array parameters
function tinhToanToa([x1, y1], [x2, y2]) {
  // Phân rã 2 mảng toạ độ
  const khoangCach = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  console.log(`  Điểm 1: (${x1}, ${y1})`);
  console.log(`  Điểm 2: (${x2}, ${y2})`);
  return khoangCach.toFixed(2);
}

console.log("Ví dụ 2 - Khoảng cách:", tinhToanToa([0, 0], [3, 4]), "đơn vị");

// ========================================
// 12. NAMED PARAMETERS (THAM SỐ ĐẶT TÊN)
// ========================================

console.log("\n=== 12. NAMED PARAMETERS ===");

// Named Parameters: dùng object để truyền tham số
// Không phụ thuộc vào thứ tự tham số
// Dễ đọc, dễ bảo trì khi có nhiều tham số

// Ví dụ 1: So sánh tham số thông thường và named parameters
function taoTaiKhoan1(username, password, email, age, role) {
  // Khó nhớ thứ tự, dễ nhầm lẫn
  return { username, password, email, age, role };
}

function taoTaiKhoan2({ username, password, email, age, role }) {
  // Rõ ràng hơn, không quan tâm thứ tự
  return { username, password, email, age, role };
}

console.log("Ví dụ 1 - Cách cũ:");
console.log(taoTaiKhoan1("user123", "pass123", "user@mail.com", 25, "user"));

console.log("Ví dụ 1 - Named parameters:");
console.log(
  taoTaiKhoan2({
    role: "admin",
    email: "admin@mail.com",
    username: "admin123",
    age: 30,
    password: "admin123",
  })
);

// Ví dụ 2: Named parameters với giá trị mặc định
function cauHinhHeThong({
  theme = "light",
  language = "vi",
  fontSize = 14,
  autoSave = true,
} = {}) {
  // Mặc định là object rỗng nếu không truyền gì
  console.log("  Cấu hình hệ thống:");
  console.log(`  - Chủ đề: ${theme}`);
  console.log(`  - Ngôn ngữ: ${language}`);
  console.log(`  - Cỡ chữ: ${fontSize}px`);
  console.log(`  - Tự động lưu: ${autoSave ? "Có" : "Không"}`);
  return { theme, language, fontSize, autoSave };
}

console.log("Ví dụ 2 - Cấu hình tùy chỉnh:");
cauHinhHeThong({ theme: "dark", fontSize: 16 });

console.log("Ví dụ 2 - Dùng mặc định:");
cauHinhHeThong();

// ========================================
// 13. PURE FUNCTION (HÀM THUẦN TÚY)
// ========================================

console.log("\n=== 13. PURE FUNCTION ===");

// Pure Function: hàm không có side effects (tác dụng phụ)
// - Luôn trả về cùng kết quả với cùng input
// - Không thay đổi biến bên ngoài
// - Dễ test, dễ debug, dễ tái sử dụng

// Ví dụ 1: So sánh Pure và Impure Function
let tongToanCuc = 0; // Biến global

// Impure Function: thay đổi biến bên ngoài
function impureTong(so) {
  tongToanCuc += so; // Side effect: thay đổi biến global
  return tongToanCuc;
}

// Pure Function: không thay đổi gì bên ngoài
function pureTong(tongHienTai, so) {
  return tongHienTai + so; // Chỉ tính toán và trả về
}

console.log("Ví dụ 1 - Impure function:");
console.log("  Lần 1:", impureTong(5)); // 5
console.log("  Lần 2:", impureTong(5)); // 10 (khác nhau!)
console.log("  Biến global:", tongToanCuc);

console.log("Ví dụ 1 - Pure function:");
console.log("  Lần 1:", pureTong(0, 5)); // 5
console.log("  Lần 2:", pureTong(0, 5)); // 5 (giống nhau)
console.log("  Lần 3:", pureTong(10, 5)); // 15

// Ví dụ 2: Pure function với object
const nguoiDungGoc = { ten: "Nam", tuoi: 25 };

// Impure: thay đổi object gốc
function impureCapNhat(obj, tuoiMoi) {
  obj.tuoi = tuoiMoi; // Mutate object
  return obj;
}

// Pure: tạo object mới
function pureCapNhat(obj, tuoiMoi) {
  return { ...obj, tuoi: tuoiMoi }; // Tạo bản sao mới
}

console.log("Ví dụ 2 - Object gốc:", nguoiDungGoc);
const nguoiDungMoi = pureCapNhat(nguoiDungGoc, 30);
console.log("Ví dụ 2 - Object mới:", nguoiDungMoi);
console.log("Ví dụ 2 - Object gốc không đổi:", nguoiDungGoc);

// ========================================
// 14. CURRYING (HÀM KARI)
// ========================================

console.log("\n=== 14. CURRYING ===");

// Currying: chuyển hàm nhiều tham số thành chuỗi hàm 1 tham số
// f(a, b, c) => f(a)(b)(c)
// Giúp tạo các hàm chuyên biệt từ hàm tổng quát

// Ví dụ 1: Currying cơ bản
// Hàm thông thường
function tongBinhThuong(a, b, c) {
  return a + b + c;
}

// Hàm currying
function tongCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Cách gọi khác nhau
console.log("Ví dụ 1 - Bình thường:", tongBinhThuong(1, 2, 3));
console.log("Ví dụ 1 - Currying:", tongCurry(1)(2)(3));

// Lợi ích: tạo hàm chuyên biệt
const cong1 = tongCurry(1);
const cong1Va2 = cong1(2);
console.log("Ví dụ 1 - Hàm chuyên biệt:", cong1Va2(3));

// Ví dụ 2: Currying thực tế với arrow function
const nhanSo = (a) => (b) => (c) => a * b * c;

console.log("Ví dụ 2 - Nhân 3 số:", nhanSo(2)(3)(4));

// Tạo các hàm nhân với số cố định
const nhanVoi10 = nhanSo(10);
const nhanVoi10Va2 = nhanVoi10(2);
console.log("Ví dụ 2 - 10 * 2 * 5:", nhanVoi10Va2(5));

// ========================================
// 15. RECURSION (ĐỆ QUY)
// ========================================

console.log("\n=== 15. RECURSION ===");

// Recursion: hàm tự gọi chính nó
// Cần có điều kiện dừng (base case) để tránh vòng lặp vô hạn
// Hữu ích cho các bài toán có cấu trúc lặp lại

// Ví dụ 1: Tính giai thừa (factorial)
function giaiThua(n) {
  // Base case: điều kiện dừng
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: gọi lại chính nó
  console.log(`  Tính ${n}! = ${n} * ${n - 1}!`);
  return n * giaiThua(n - 1);
}

console.log("Ví dụ 1 - Giai thừa 5:");
console.log("Kết quả:", giaiThua(5));

// Ví dụ 2: Dãy Fibonacci
function fibonacci(n) {
  // Dãy Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...
  // f(n) = f(n-1) + f(n-2)

  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Ví dụ 2 - Dãy Fibonacci 10 số đầu:");
for (let i = 0; i < 10; i++) {
  console.log(`  f(${i}) = ${fibonacci(i)}`);
}

// ========================================
// 16. MEMOIZATION (GHI NHỚ KẾT QUẢ)
// ========================================

console.log("\n=== 16. MEMOIZATION ===");

// Memoization: lưu kết quả đã tính để tái sử dụng
// Tránh tính toán lại với cùng input
// Tối ưu hiệu năng, đặc biệt với recursion

// Ví dụ 1: Fibonacci với memoization
function fibonacciMemo() {
  const cache = {}; // Lưu kết quả đã tính

  return function fib(n) {
    // Kiểm tra cache trước
    if (n in cache) {
      console.log(`  Lấy từ cache: fib(${n}) = ${cache[n]}`);
      return cache[n];
    }

    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Tính và lưu vào cache
    console.log(`  Tính mới: fib(${n})`);
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fibMemo = fibonacciMemo();
console.log("Ví dụ 1 - Fibonacci với memoization:");
console.log("Lần 1 - fib(8):", fibMemo(8));
console.log("Lần 2 - fib(8):", fibMemo(8)); // Nhanh hơn nhiều!

// Ví dụ 2: Memoization tổng quát
function memoize(fn) {
  // Hàm tạo memoized version của bất kỳ hàm nào
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log(`  Cache hit: ${key}`);
      return cache[key];
    }

    console.log(`  Cache miss: ${key}`);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Áp dụng memoization cho hàm tính tổng
const tinhTongCham = (a, b, c) => {
  // Giả lập tính toán phức tạp
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum = a + b + c;
  }
  return sum;
};

const tinhTongNhanh = memoize(tinhTongCham);
console.log("Ví dụ 2 - Lần 1:", tinhTongNhanh(1, 2, 3));
console.log("Ví dụ 2 - Lần 2 (nhanh hơn):", tinhTongNhanh(1, 2, 3));

// ========================================
// 17. FUNCTION COMPOSITION (KẾT HỢP HÀM)
// ========================================

console.log("\n=== 17. FUNCTION COMPOSITION ===");

// Function Composition: kết hợp nhiều hàm thành một
// Kết quả của hàm này là input của hàm khác
// compose(f, g)(x) = f(g(x))

// Ví dụ 1: Composition thủ công
const themHai = (x) => x + 2;
const nhanHai = (x) => x * 2;
const binhPhuong = (x) => x * x;

// Thực hiện tuần tự
const ketQua1 = themHai(5); // 7
const ketQua2 = nhanHai(ketQua1); // 14
const ketQua3 = binhPhuong(ketQua2); // 196

console.log("Ví dụ 1 - Từng bước:", ketQua3);

// Composition tự động
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);
const xuLyPhucTap = compose(binhPhuong, nhanHai, themHai);

console.log("Ví dụ 1 - Composition:", xuLyPhucTap(5));

// Ví dụ 2: Pipe (ngược lại với compose)
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

// Pipe: thực hiện từ trái qua phải (dễ đọc hơn)
const xuLyTheoPipe = pipe(
  themHai, // Bước 1: +2
  nhanHai, // Bước 2: *2
  binhPhuong // Bước 3: ^2
);

console.log("Ví dụ 2 - Pipe (5):", xuLyTheoPipe(5));
console.log("Ví dụ 2 - Pipe (10):", xuLyTheoPipe(10));

// Ví dụ thực tế: xử lý chuỗi
const vietHoa = (str) => str.toUpperCase();
const loaiBoDauCach = (str) => str.trim();
const themChamThan = (str) => str + "!";

const xuLyChuoi = pipe(loaiBoDauCach, vietHoa, themChamThan);
console.log("Ví dụ 2 - Xử lý chuỗi:", xuLyChuoi("  xin chào  "));

// ========================================
// 18. PARTIAL APPLICATION (ÁP DỤNG MỘT PHẦN)
// ========================================

console.log("\n=== 18. PARTIAL APPLICATION ===");

// Partial Application: fix một số tham số của hàm
// Tạo hàm mới với ít tham số hơn
// Khác currying: không bắt buộc từng tham số riêng lẻ

// Ví dụ 1: Partial application thủ công
function tinhTien(soLuong, donGia, thue) {
  return soLuong * donGia * (1 + thue);
}

// Tạo hàm tính tiền cho sản phẩm giá 50k với thuế 10%
function tinhTienSanPham50k(soLuong) {
  return tinhTien(soLuong, 50000, 0.1);
}

console.log("Ví dụ 1 - Mua 3 sản phẩm:", tinhTienSanPham50k(3));
console.log("Ví dụ 1 - Mua 5 sản phẩm:", tinhTienSanPham50k(5));

// Ví dụ 2: Partial application với bind()
function greet(greeting, name, punctuation) {
  return `${greeting} ${name}${punctuation}`;
}

// bind() có thể fix các tham số đầu
const greetXinChao = greet.bind(null, "Xin chào");
const greetXinChaoNgoc = greet.bind(null, "Xin chào", "Ngọc");

console.log("Ví dụ 2 - Partial 1 tham số:", greetXinChao("Nam", "!"));
console.log("Ví dụ 2 - Partial 2 tham số:", greetXinChaoNgoc("?"));

// Tạo hàm partial tổng quát
function partial(fn, ...argsFixed) {
  return function (...argsNew) {
    return fn(...argsFixed, ...argsNew);
  };
}

const nhan = (a, b, c) => a * b * c;
const nhanVoi2Va3 = partial(nhan, 2, 3);
console.log("Ví dụ 2 - Partial function:", nhanVoi2Va3(4)); // 2 * 3 * 4

// ========================================
// 19. FUNCTION PARAMETERS BEST PRACTICES
// ========================================

console.log("\n=== 19. BEST PRACTICES ===");

// Các nguyên tắc tốt khi làm việc với hàm và tham số

// Ví dụ 1: Giới hạn số lượng tham số (tối đa 3-4)
// ❌ Tránh: quá nhiều tham số
function taoNguoiDungXau(ten, tuoi, email, sdt, diaChi, ngheNghiep, luong) {
  // Khó nhớ thứ tự, dễ nhầm
  return { ten, tuoi, email, sdt, diaChi, ngheNghiep, luong };
}

// ✅ Nên dùng: object parameter
function taoNguoiDungTot({ ten, tuoi, email, sdt, diaChi, ngheNghiep, luong }) {
  // Rõ ràng, không quan tâm thứ tự
  return { ten, tuoi, email, sdt, diaChi, ngheNghiep, luong };
}

console.log("Ví dụ 1 - Cách tốt:");
console.log(
  taoNguoiDungTot({
    ten: "Lan",
    email: "lan@mail.com",
    tuoi: 25,
    sdt: "0123456789",
    diaChi: "HN",
    ngheNghiep: "Dev",
    luong: 20000000,
  })
);

// Ví dụ 2: Validation tham số
function tinhLuong(luongCoBan, heSo = 1) {
  // Kiểm tra tham số đầu vào
  if (typeof luongCoBan !== "number" || luongCoBan < 0) {
    throw new Error("Lương cơ bản phải là số dương");
  }

  if (typeof heSo !== "number" || heSo < 0) {
    throw new Error("Hệ số phải là số dương");
  }

  return luongCoBan * heSo;
}

console.log("Ví dụ 2 - Tính lương hợp lệ:", tinhLuong(5000000, 2.5));

try {
  console.log("Ví dụ 2 - Tham số sai:", tinhLuong(-5000000));
} catch (error) {
  console.log("Ví dụ 2 - Lỗi:", error.message);
}

// ========================================
// 20. ADVANCED FUNCTION PATTERNS
// ========================================

console.log("\n=== 20. ADVANCED PATTERNS ===");

// Các pattern nâng cao với hàm

// Ví dụ 1: Function Overloading (mô phỏng)
// JavaScript không hỗ trợ overloading thực sự
// Nhưng có thể mô phỏng bằng cách kiểm tra arguments
function xuLyDuLieu(...args) {
  // Xử lý khác nhau dựa vào số lượng và kiểu tham số
  if (args.length === 0) {
    return "Không có dữ liệu";
  }

  if (args.length === 1) {
    if (typeof args[0] === "number") {
      return `Số: ${args[0]}`;
    }
    if (typeof args[0] === "string") {
      return `Chuỗi: ${args[0]}`;
    }
    if (Array.isArray(args[0])) {
      return `Mảng có ${args[0].length} phần tử`;
    }
  }

  if (args.length === 2) {
    return `Hai tham số: ${args[0]} và ${args[1]}`;
  }

  return `Nhiều tham số: ${args.join(", ")}`;
}

console.log("Ví dụ 1 - Không tham số:", xuLyDuLieu());
console.log("Ví dụ 1 - Một số:", xuLyDuLieu(42));
console.log("Ví dụ 1 - Một chuỗi:", xuLyDuLieu("Hello"));
console.log("Ví dụ 1 - Một mảng:", xuLyDuLieu([1, 2, 3]));
console.log("Ví dụ 1 - Hai tham số:", xuLyDuLieu(10, 20));

// Ví dụ 2: Fluent Interface (Method Chaining)
class MayTinhFlowAPI {
  constructor(value = 0) {
    this.value = value;
  }

  cong(n) {
    this.value += n;
    return this; // Trả về this để chain tiếp
  }

  tru(n) {
    this.value -= n;
    return this;
  }

  nhan(n) {
    this.value *= n;
    return this;
  }

  chia(n) {
    if (n === 0) throw new Error("Không chia được cho 0");
    this.value /= n;
    return this;
  }

  ketQua() {
    return this.value;
  }
}

console.log("Ví dụ 2 - Method Chaining:");
const calc = new MayTinhFlowAPI(10);
const result = calc
  .cong(5) // 10 + 5 = 15
  .nhan(2) // 15 * 2 = 30
  .tru(10) // 30 - 10 = 20
  .chia(4) // 20 / 4 = 5
  .ketQua();
console.log("Kết quả:", result);

// ========================================
// KẾT THÚC: TÓM TẮT KIẾN THỨC
// ========================================

console.log("\n" + "=".repeat(50));
console.log("TÓM TẮT: HÀM VÀ THAM SỐ TRONG JAVASCRIPT");
console.log("=".repeat(50));
console.log(`
1. Function Declaration - Khai báo hàm cơ bản
2. Function Expression - Biểu thức hàm
3. Arrow Function - Hàm mũi tên (ES6)
4. Default Parameters - Tham số mặc định
5. Rest Parameters - Tham số còn lại (...)
6. Arguments Object - Đối tượng arguments
7. Callback Function - Hàm gọi lại
8. Higher-Order Function - Hàm bậc cao
9. Closure - Bảo đóng
10. IIFE - Hàm tự gọi
11. Destructuring Parameters - Tham số phân rã
12. Named Parameters - Tham số đặt tên
13. Pure Function - Hàm thuần túy
14. Currying - Hàm kari
15. Recursion - Đệ quy
16. Memoization - Ghi nhớ kết quả
17. Function Composition - Kết hợp hàm
18. Partial Application - Áp dụng một phần
19. Best Practices - Thực hành tốt nhất
20. Advanced Patterns - Các mẫu nâng cao
`);

console.log("✅ Đã hoàn thành tất cả ví dụ!");
console.log("💡 Chạy file: node index.js");

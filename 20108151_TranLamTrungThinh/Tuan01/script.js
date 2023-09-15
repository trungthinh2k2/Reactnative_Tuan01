// Bài 1
console.log("Challenge_1:")
    // Hàm tính BMI
function BMI(mass, height) {
    return mass / (height * height);
}

// Dữ liệu 1
var markMass1 = 78; // cân nặng của Mark
var markHeight1 = 1.69; // Chiều cao của Mark

var johnMass1 = 92; // cân nặng của John
var johnHeight1 = 1.95; //Chiều cao của John

var markBMI1 = BMI(markMass1, markHeight1);
var johnBMI1 = BMI(johnMass1, johnHeight1);

var markHigherBMI1 = markBMI1 > johnBMI1;

// Dữ liệu 2
var markMass2 = 95; // cân nặng của Mark
var markHeight2 = 1.88; // Chiều cao của Mark

var johnMass2 = 85; // cân nặng của John
var johnHeight2 = 1.76; // Chiều cao của John

var markBMI2 = BMI(markMass2, markHeight2);
var johnBMI2 = BMI(johnMass2, johnHeight2);

var markHigherBMI2 = markBMI2 > johnBMI2;

// Kết quả
console.log("Dữ liệu 1:");
console.log("Chỉ số BMI của Mark: " + markBMI1);
console.log("Chỉ số BMI của John: " + johnBMI1);
console.log("BMI của Mark cao hơn John?" + markHigherBMI1);

console.log("Dữ liệu 2:");
console.log("Chỉ số BMI của Mark: " + markBMI2);
console.log("Chỉ số BMI của John: " + johnBMI2);
console.log("BMI của Mark cao hơn John?" + markHigherBMI2);

// Bài 2:
console.log("Challenge_2: ")

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else if (markBMI1 < johnBMI1) {
    console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
} else {
    console.log("Mark and John have the same BMI.");
}

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else if (markBMI2 < johnBMI2) {
    console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
} else {
    console.log("Mark and John have the same BMI.");
}

//  Bài 3:
console.log("Challenge_3:")

// Tính điểm trung bình
const trungBinh = (diem) => diem.reduce((tong, diem) => tong + diem, 0) / diem.length;

// Dữ liệu
const diemDolphins1 = [96, 108, 89];
const diemKoalas1 = [88, 91, 110];

const trungBinhDolphins1 = trungBinh(diemDolphins1);
const trungBinhKoalas1 = trungBinh(diemKoalas1);

// Determine the winner and print the result
const diemMin = 100;

console.log("Điểm trung bình đội Dolphins: " + trungBinhDolphins1)
console.log("Điểm trung bình đội Koalas: " + trungBinhKoalas1)

if (trungBinhDolphins1 > trungBinhKoalas1) {
    console.log(`Điểm trung bình đội Dolphins (${trungBinhDolphins1.toFixed(1)}) lớn hơn đội Koalas (${trungBinhKoalas1.toFixed(1)})`)
} else if (trungBinhDolphins1 < trungBinhKoalas1) {
    console.log(`Điểm trung bình đội Dolphins (${trungBinhDolphins1.toFixed(1)}) nhỏ hơn đội Koalas (${trungBinhKoalas1.toFixed(1)})`)
} else
    console.log(`Điểm trung bình của 2 đội bằng nhau (${trungBinhDolphins1.toFixed(1)})`)

if (trungBinhDolphins1 >= diemMin && trungBinhDolphins1 > trungBinhKoalas1) {
    console.log(`Dolphins win with an average score of ${trungBinhDolphins1}`);
} else if (trungBinhKoalas1 >= diemMin && trungBinhKoalas1 > trungBinhDolphins1) {
    console.log(`Koalas win with an average score of ${trungBinhKoalas1}`);
} else if (trungBinhDolphins1 >= diemMin && trungBinhKoalas1 >= diemMin && trungBinhDolphins1 === trungBinhKoalas1) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy.");
}

// Dữ liệu
const diemDolphins2 = [97, 112, 101];
const diemKoalas2 = [109, 95, 123];

const trungBinhDolphins2 = trungBinh(diemDolphins2);
const trungBinhKoalas2 = trungBinh(diemKoalas2);

console.log("Điểm trung bình đội Dolphins: " + trungBinhDolphins2)
console.log("Điểm trung bình đội Koalas: " + trungBinhKoalas2)

if (trungBinhDolphins2 > trungBinhKoalas2) {
    console.log(`Điểm trung bình đội Dolphins (${trungBinhDolphins2.toFixed(1)}) lớn hơn đội Koalas (${trungBinhKoalas2.toFixed(1)})`)
} else if (trungBinhDolphins2 < trungBinhKoalas2) {
    console.log(`Điểm trung bình đội Dolphins (${trungBinhDolphins2.toFixed(1)}) nhỏ hơn đội Koalas (${trungBinhKoalas2.toFixed(1)})`)
} else
    console.log(`Điểm trung bình của 2 đội bằng nhau (${trungBinhDolphins2.toFixed(1)})`)

if (trungBinhDolphins2 >= diemMin && trungBinhDolphins2 > trungBinhKoalas2) {
    console.log(`Dolphins win with an average score of ${trungBinhDolphins2}`);
} else if (trungBinhKoalas2 >= diemMin && trungBinhKoalas2 > trungBinhDolphins2) {
    console.log(`Koalas win with an average score of ${trungBinhKoalas2}`);
} else if (trungBinhDolphins2 >= diemMin && trungBinhKoalas2 >= diemMin && trungBinhDolphins2 === trungBinhKoalas2) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy.");
}

// Dữ liệu
const diemDolphins3 = [97, 112, 101];
const diemKoalas3 = [109, 95, 106];

const trungBinhDolphins3 = trungBinh(diemDolphins3);
const trungBinhKoalas3 = trungBinh(diemKoalas3);


console.log("Điểm trung bình đội Dolphins: " + trungBinhDolphins3)
console.log("Điểm trung bình đội Koalas: " + trungBinhKoalas3)

if (trungBinhDolphins3 > trungBinhKoalas3) {
    console.log(`Điểm trung bình đội Dolphins (${trungBinhDolphins3.toFixed(1)}) lớn hơn đội Koalas (${trungBinhKoalas3.toFixed(1)})`)
} else if (trungBinhDolphins3 < trungBinhKoalas3) {
    console.log(`Điểm trung bình đội Dolphins (${trungBinhDolphins3.toFixed(1)}) nhỏ hơn đội Koalas (${trungBinhKoalas3.toFixed(1)})`)
} else
    console.log(`Điểm trung bình của 2 đội bằng nhau (${trungBinhDolphins3.toFixed(1)})`)

if (trungBinhDolphins3 >= diemMin && trungBinhDolphins3 > trungBinhKoalas3) {
    console.log(`Dolphins win with an average score of ${trungBinhDolphins3}`);
} else if (trungBinhKoalas3 >= diemMin && trungBinhKoalas3 > trungBinhDolphins3) {
    console.log(`Koalas win with an average score of ${trungBinhKoalas3}`);
} else if (trungBinhDolphins3 >= diemMin && trungBinhKoalas3 >= diemMin && trungBinhDolphins3 === trungBinhKoalas3) {
    console.log("It's a draw!");
} else {
    console.log("No team wins the trophy.");
}
//  1-misol

// let son  = +prompt("butun son kiriting")
// son = parseInt(son)
// if(son >= 0){
//     alert (`${son +=1}`)
// }
// else{
//     alert ("bunday son mavjud emas")
// }

// 1-misol tugadi

// 2-misol

// let son = +prompt("musbat yoki manfiy son kiriting")
// son = parseInt(son)
// son = parseFloat(son)
// if(son >= 0){
//     alert(`${son +=1}`)
// }
// else{
//     alert(`${son -=2}`)
// }

// 2-misol tugadi

// 3-misol

// let son = +prompt("musbat yoki manfiy son kiriting")
// son = parseInt(son)
// son = parseFloat(son)
// if(son > 0){
//     alert(`${son +=1}`)
// }
// else if (son < 0){
//     alert(`${son -=2}`)
// }
// else{
//     alert(`${son +=10}`)
// }

// 3-misol tugadi

// 4-misol

// let a = prompt("a sonini kiritng!");
// let b = prompt("b sonini kiritng!");
// let c = prompt("c sonini kiritng!");

// let count = 0;

// if (a > 0) count++;
// if (b > 0) count++;
// if (c > 0) count++;

// alert("kiritilgan sonlaari ichida " + count + " tasi musbat");

// 4-misol tugadi

// 5-misol

// let a = prompt("a sonini kiriting!");
// let b = prompt("b sonini kiriting!");
// let c = prompt("c sonini kiriting!");

// let musbatCount = 0;
// let manfiyCount = 0;

// if (a > 0) musbatCount++;
// if (a < 0) manfiyCount++;

// if (b > 0) musbatCount++;
// if (b < 0) manfiyCount++;

// if (c > 0) musbatCount++;
// if (c < 0) manfiyCount++;

// alert(
//   "Kiritilgan sonlar ichida " +
//     musbatCount +
//     " tasi musbat va " +
//     manfiyCount +
//     " tasi manfiy."
// );

// 5-misol tugadi

// 6-misol

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");

// if (a > b) {
//   alert(`katta son ${a} katta`);
// } else {
//   alert(`katta son ${b} katta`);
// }

// 6-misol tugadi

// 7-misol

// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");

// if(a<b){
//     alert(`kichik son ${a}`)
// }
// else{
//     alert(`kichik son ${b}`)
// }

// 7-misol tugadi

// 8-misol

// let a = prompt("a sonini kiriting!");
// let b = prompt("b sonini kiriting!");

// if (a > b) {
//     alert(`Katta son: ${a}, Kichik son: ${b}`);
// } else if (a < b) {
//     alert(`Katta son: ${b}, Kichik son: ${a}`);
// } else {
//     alert("Ikkala son teng.");
// }

// 8-misol tugadi

// 9-misol

// let a = prompt("a sonini kiriting!");
// let b = prompt("b sonini kiriting!");

// if (a < b) {
//   alert(`kichik son: ${a}, katta son: ${b}`);
// } else {
//   alert(`kichik son: ${b}, katta son: ${a}`);
// }

// 9-misol tugadi

// 10-misol

// let a = Number(prompt("a sonini kiriting!"));
// let b = Number(prompt("b sonini kiriting!"));

// let natija;

// if (a === b) {
//     natija = 0;
// } else {
//     natija = a + b;
// }

// alert(`Natija: ${natija}`);

// 10-misol tugadi

// 11-misol

// let a = Number(prompt("a sonini kiriting!"));
// let b = Number(prompt("b sonini kiriting!"));

// if (a === b) {
//   alert(0); 
// } else {
//   let kattaSon = (a > b) ? a : b; 
//   alert(`Katta son: ${kattaSon}`);
// }

// 11-misol tugadi

// 12-misol

// let a = Number(prompt("1-sonni kiriting:"));
// let b = Number(prompt("2-sonni kiriting:"));
// let c = Number(prompt("3-sonni kiriting:"));

// let kichikSon = a;

// if (b < kichikSon) {
//     kichikSon = b;
// }
// if (c < kichikSon) {
//     kichikSon = c;
// }
// alert(`Kiritilgan sonlar ichida eng kichigi: ${kichikSon}`);

// 12-misol tugadi

// 13-misol

// let a = Number(prompt("a-sonni kiriting:"))
// let b = Number(prompt("b-sonni kiriting:"))
// let c = Number(prompt("c-sonni kiriting:"))

// if(a>b && a<c){
//     alert(`o'rtancha son ${a}`)
// }
// else if(b>a && b<c){
//     alert(`o'rtancha son ${b}`)
// }
// else{
//     alert(`o'rtancha son ${c}`)
// }

// 13-misol tugadi

// 14-misol

// let a = Number(prompt("a-sonni kiriting:"))
// let b = Number(prompt("b-sonni kiriting:"))
// let c = Number(prompt("c-sonni kiriting:"))
// let kichikSon = a;
// let kattaSon = a;
// if (b < kichikSon) {
//     kichikSon = b;
// }
// if (c < kichikSon) {
//     kichikSon = c;
// }
// if (b > kattaSon) {
//     kattaSon = b;
// }
// if (c > kattaSon) {
//     kattaSon = c;
// }
// alert(`Kichik son: ${kichikSon}Katta son: ${kattaSon}`);

// 14-misol tugadi

// 15-misol

// let a = parseInt(prompt("1-sonni kiriting: "));
// let b = parseInt(prompt("2-sonni kiriting: "));
// let c = parseInt(prompt("3-sonni kiriting: "));

// let yig1 = a + b;
// let yig2 = a + c;
// let yig3 = b + c;

// if (yig1 >= yig2 && yig1 >= yig3) {
//     alert(`Eng katta yig'indisi: ${a} va ${b}`);
// } else if (yig2 >= yig1 && yig2 >= yig3) {
//     alert(`Eng katta yig'indisi: ${a} va ${c}`);
// } else {
//     alert(`Eng katta yig'indisi: ${b} va ${c}`);
// }

// // 1. 두 수의 차

// function solution(num1, num2) {
//     return num1 - num2;
// }

// // 2. 두 수의 곱

// function solution(num1, num2) {
//     return num1 * num2;
// }

// // 3. 두 수의 몫

// function solution(num1, num2) {
//     return parseInt(num1 / num2);
// }

// // 4. 나이 구하기

// function solution(age) {
//     return (2023 - age);
// }

// // 5. 숫자 비교하기

// function solution(num1, num2) {
//     let result = (num1 === num2) ? 1 : -1;
//     return result;
// }

// // 6. 두 수의 합

// function solution(num1, num2) {
//     return num1 + num2;
// }

// // 7. 두 수의 나눗셈

// function solution(num1, num2) {
//     return parseInt((num1 / num2) * 1000)
// }

// 8. 각도기

// const angle = 100;
// function solution(angle) {
//     if(angle > 0 && angle < 90){
//         return 1;
//     }
//     else if(angle === 90){
//         return 2;
//     }
//     else if(angle > 90 && angle < 180){
//         return 3;
//     }
//     else if(angle === 180){
//         return 4;
//     }
// }

// 9. 짝수의 합

// function solution(n) {
//     let result = 0;
//     for(let i = 1; i <= n; i++) {
//         if(i % 2 === 0) {
//             result += i;
//         }
//     }
//     return result;
// }

// 10. 배열의 평균 값

// const numbers = [1, 2, 10, 20, 5];

// function solution(numbers) {
//     let sum = 0;

//     numbers.forEach(number => sum += number);

//     return sum / numbers.length;
// }

// 11. 짝수와 홀수

// const num = 5;

// function solution(num) {
//     if(num % 2 === 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// 12. 평균 구하기

// let arr = [1, 2, 5, 3];
// let result = 0;

// function solution(arr) {
//     arr.forEach(arrNum => {
//         result += arrNum;
//     });
//     return result / arr.length;
// }

// 13. 자릿수 더하기

// function solution(n) {
//     const digits = String(n).split('');

//     return digits.reduce((acc, digit) => acc + Number(digit), 0);
// }

// 14. 약수의 합

// let n = 10;
// let sum = 0;

// function solution(n) {
//     for(let i = 0; i <= n; i++){
//         if(n % i === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(solution(n));

// 15. 나머지가 1이 되는 수 찾기

// function solution(n) {
//     for (let x = 1; x < n; x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }
// }

// 16. x만큼 간격이 있는 n개의 숫자
// function solution(x, n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//       result.push(x * i);
//     }
//     return result;
//   }

// 17. 자연수 뒤집어 배열로 만들기

// function solution(n) {
//     return n
//         .toString()     // 숫자를 문자열로 반환
//         .split('')      // 문자열을 배열로 반환
//         .reverse()      // 배열의 순서를 뒤집음
//         .map(Number);   // 각 자리수를 숫자로 변환하여 최종 배열 반환
// }

// 18.

// 19. 정수 제곱근 판별

// function solution(n) {
//     const sqrt = Math.sqrt(n);
//     if (Number.isInteger(sqrt)) {
//         return Math.pow(sqrt + 1, 2);
//     } else {
//         return -1;
//     }
// }

// 20. 정수 내림차순으로 배치하기

// const n = 157687
// function solution(n) {
//     return parseInt.sort((a, b) => b - a);
// }
// console.log(solution(n));

// 21. 하샤드 수

// function solution(x) {
//     const sumOfDigits = x
//       .toString()
//       .split('')
//       .reduce((acc, digit) => acc + parseInt(digit), 0);

//     return x % sumOfDigits === 0;
//   }

// 22. 두 정수 사이의 합

// function solution(a, b) {
//     const min = Math.min(a, b);
//     const max = Math.max(a, b);

//     let sum = 0;

//     if(min === max){
//         return min;
//     }

//     for (let i = min; i <= max; i++) {
//         sum += i;
//     }

//     return sum;
// }

// reduce 연습

// const number = [10, 5, 3, 2];

// function difference() {
//     return number.reduce((acc, value) => acc - value);
// }

// console.log(difference(number));

// 23. 콜라츠 추측

// function solution(num) {
//     let count = 0; 

//     if (num === 1) return 0;

//     while (count < 500) {
//         if (num % 2 === 0) {
//             num /= 2;
//         } else { 
//             num = num * 3 + 1;
//         }
//         count++; 

//         if (num === 1) {
//             return count;
//         }
//     }

//     return -1;
// }

// 24. 서울에서 김서방 찾기

// // function solution(seoul) {
//     for (i = 0; i < seoul.length; i++) {
//         if (seoul[i] === "Kim") {
//             return `김서방은 ${i}에 있다`;
//         }
//     }
// }
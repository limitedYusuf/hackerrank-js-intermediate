function findSum(numbers, queries) {
   const result = [];

   for (const query of queries) {
       const [l, r, x] = query;
       let sum = 0;
       let zeroCount = 0;

       for (let i = l - 1; i < r; i++) {
           if (numbers[i] === 0) {
               zeroCount++;
           }
           sum += numbers[i];
       }

       result.push(sum + zeroCount * x);
   }

   return result;
}

const numbers = [5, 10, 10];
const queries = [
   [1, 2, 5]
];

const result = findSum(numbers, queries);
console.log(result);

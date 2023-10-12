function minOperations(arr, threshold, d) {
   const target = Math.min(...arr);

   let operations = 0;

   for (let i = 0; i < arr.length; i++) {
       while (arr[i] > target) {
           arr[i] = Math.floor(arr[i] / d);
           operations++;
       }
   }

   let equalCount = arr.filter(element => element === target).length;
   while (equalCount < threshold) {
       for (let i = 0; i < arr.length; i++) {
           if (arr[i] > target) {
               arr[i] = Math.floor(arr[i] / d);
               operations++;
               equalCount = arr.filter(element => element === target).length;
           }
       }
   }

   return operations;
}

const arr = [64, 30, 25, 33];
const threshold = 2;
const d = 2;
console.log(minOperations(arr, threshold, d));
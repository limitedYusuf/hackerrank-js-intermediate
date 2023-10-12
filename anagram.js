function stringAnagram(dictionary, query) {
   function calculateCharFrequency(word) {
      const charCount = new Array(26).fill(0);
      for (const char of word) {
         charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
      return charCount.join('');
   }

   const dictCharFreqs = new Map();
   for (const word of dictionary) {
      const charFreq = calculateCharFrequency(word);
      if (dictCharFreqs.has(charFreq)) {
         dictCharFreqs.get(charFreq).push(word);
      } else {
         dictCharFreqs.set(charFreq, [word]);
      }
   }

   const result = [];

   for (const word of query) {
      const charFreq = calculateCharFrequency(word);
      if (dictCharFreqs.has(charFreq)) {
         const anagrams = dictCharFreqs.get(charFreq);
         result.push(anagrams.length);
      } else {
         result.push(0);
      }
   }

   return result;
}

const dictionary = ['heater', 'cold', 'clod', 'reheat', 'docl'];
const query = ['codl', 'heater', 'abcd'];

const result = stringAnagram(dictionary, query);
for (const count of result) {
   console.log(count);
}

let str = 'I live in Thailand';

let lowerCaseStr = str.toLowerCase()

let noSpaceStr = lowerCaseStr.replace(/\s/g, '')

let charCounts = {}

for (let char of noSpaceStr) {
  if (charCounts[char]) {
    charCounts[char]++
  } else {
    charCounts[char] = 1
  }
}

console.log(charCounts); // Output: {i: 4, l: 2, v: 1, e: 1, n: 2, t: 1, h: 1, a: 2, d: 1}

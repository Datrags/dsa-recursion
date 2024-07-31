/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length == 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  // Compare the length of first word with length of the longest word 
  // in the rest of the array
  return Math.max(words[0].length, longest(words.slice(1)));
}


/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr="") {
  if (i === str.length) return newStr;
  if (i % 2 == 0) newStr += str[i];
  return everyOther(str, i + 1, newStr);

}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left=0, right=str.length-1) {
  if (str[left] != str[right]) return false;
  if (left >= right) return true;
  return isPalindrome(str, left + 1, right - 1);

}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (arr.length == 0) return -1;
  if (arr[0] == val) return i;
  let arrCopy = [...arr]; //make a copy of array to not modify original
  return findIndex(arrCopy.splice(1), val, i + 1);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1, newStr="") {
  if (str == "") return "";
  if (i == 0) return newStr + str[0];
  newStr += str[i];
  return revString(str, i - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (const key in obj) {
    //if string, push into array
    if (typeof obj[key] === "string") 
      arr.push(obj[key]);
    //if object, use recursion on that object
    else if (typeof obj[key] === "object") 
      arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  
  //helper function with recursion
  function search(arr, val, left, right) {
    //if left and right pass each other, then the value doesnt exist
    if (left > right) {
      return -1;
    }
    //get middle value
    const mid = Math.floor((left + right) / 2);
    //check if mid index equals value
    if (arr[mid] === val) {
      return mid;
    }
    //if val is less than middle, move left otherwise, move right 
    if (val < arr[mid]) {
      return search(arr, val, left, mid - 1);
    }
    return search(arr, val, mid + 1, right);
  }
  
  return search(arr, val, 0, arr.length - 1);

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

function reverseOnlyletters(s) {
  let chars = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isLetter(chars[left])) {
      left++;
    } else if (!isLetter(chars[right])) {
      right--;
    } else {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }

  return chars.join("");
}
function isLetter(char) {
  const abcABC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letters = abcABC.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === char) {
      return true;
    }
  }
  return false;
}
console.log(reverseOnlyletters("j-ih-gfE-dCba"));

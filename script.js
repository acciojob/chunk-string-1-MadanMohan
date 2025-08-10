function stringChop(str, size) {
  if (str === null || str === undefined) return [];
  size = Number(size);
  if (isNaN(size) || size <= 0) return [];

  let ans = [];
  for (let i = 0; i < str.length; i += size) {
    ans.push(str.substring(i, i + size));
  }
  return ans;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

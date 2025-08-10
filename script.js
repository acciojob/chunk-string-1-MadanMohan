function stringChop(str, size) {
  let ans = [];
  for (let i = 0; i < str.length; i += size) {
    ans.push(str.substring(i, i + size));
  }
  return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));

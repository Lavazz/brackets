module.exports = function check(str, bracketsConfig) {
  let res = str;
  for (let i = 0; i < str.length / 2; i++) {
    for (let el of bracketsConfig) {
      let joining=res.indexOf(el.join(""));
      if (joining >= 0) {
      res = res.split("");
      res.splice(joining, 2);
      res = res.join("");
      }
    }
  }
  
 return res.length === 0
}
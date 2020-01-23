/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strLower = str.toLowerCase();
  return strLower.includes("1xbet") || strLower.includes("xxx");
}

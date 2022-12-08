export function validate(color) {
  if (color.length !== 7) return false;
  const re = /[#][0 - 9A-Fa-f]{6}/g;
  return re.test(color);
}

function toHex(num) {
  let hex = num.toString(16);
  hex = hex.length === 1 ? `0${hex}` : hex;
  return hex;
}

export function rgbToHex([r, g, b]) {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

let text = 'hello world';

function isString(text) {
  return typeof text === 'string';
}

// ucfirst
function ucfirst(text){
  if (isString(text)) return text.charAt(0).toUpperCase() + text.substr(1);
}
console.log(ucfirst(text));

//capitalize
function capitalize(text) {
  if (isString(text))
    return text
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
}
console.log(capitalize(text));

// camelCase
function camelCase(text){
  if (!isString(text)) return '';
  return text.replace(/\s/g, '');
}
console.log(camelCase(text));

// snake_case
function snake_case(text) {
  if (isString(text)) return text.toLowerCase().replace(/\s/g, '_');
}
console.log(snake_case(text));

// leet
function leet(text) {
  if (isString(text))
    return text
      .replace(/A|a/g, '4')
      .replace(/E|e/g, '3')
      .replace(/I|i/g, '1')
      .replace(/O|o/g, '0')
      .replace(/U|u/g, '(_)')
      .replace(/Y|y/g, '7');
}
console.log(leet(text));

// prop_access
function prop_access(obj, attr){
  if (!isString(attr)) return '';

  let args = attr.split('.');
  let path = args[0];
  let value = obj;

  for (let i = 0; i < args.length; i++) {
    if (i > 0 ) path += '.' + args[i];
    if (!value || !value.hasOwnProperty(args[i])) {
      return `${path} not exist`;
    }
    value = value[args[i]];
  }

  if (!value) return obj;
  return value;

}

// verlan
function verlan(text) {
  if (isString(text))
    return text
      .split('')
      .reverse()
      .join('')
      .split(' ')
      .reverse()
      .join(' ');
}
console.log(verlan(text));

// yoda
function yoda(text) {
  if (isString(text))
    return text
      .split(' ')
      .reverse()
      .join(' ');
}
console.log(yoda(text));

// vig
// helpers
// helper
function ordA(a) {
  return a.charCodeAt(0) - 65;
}

// vigenere
function vig(text, key, decode) {
  let i = 0, b;
    if (isString(text) && isString(key)) {
      key = key.toUpperCase().replace(/[^A-Z]/g, '');
      return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
          b = key[i++ % key.length];
          return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65)).toLocaleLowerCase();
      });
    }
}

let key = 'esgi';
let enc = vig(text,key);
let dec = vig(enc,key,true);

console.log(enc);
console.log(dec);

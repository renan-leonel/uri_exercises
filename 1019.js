var input =  parseInt(require('fs').readFileSync('/dev/stdin', 'utf8'));

y = input % 3600;
z = y % 60;

console.log(`${Math.floor(input/3600)}:${Math.floor(y/60)}:${z}`);

let x = 5;
let y = 25;
const color = 'coral';
const bool = true;
function test_num(x, y) {
    
    if (x == y && typeof x==="number" && typeof y==="number") {
        return'they match';
    } else {
        return'no luck';
    }    
}
console.log(test_num(3.5, 1));  

function print_letter() {

    for (const letter of color) {
        console.log(letter);    
    }
    
}
print_letter();
  
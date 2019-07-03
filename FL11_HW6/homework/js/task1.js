let aax = Number(window.prompt('Add value aax', ''));
let aay = Number(window.prompt('Add value aay', ''));
let bbx = Number(window.prompt('Add value bbx', ''));
let bby = Number(window.prompt('Add value bby', ''));
let ccx = Number(window.prompt('Add value ccx', ''));
let ccy = Number(window.prompt('Add value ccy', ''));

const num = 2;

let xc = (aax + bbx) / num;
let yc = (aay + bby) / num;

if (xc === ccx && yc === ccy) {
    console.log('c divides AB segment by half - ' + true);
} else {
    console.log('c doesnt device AB segment by half - ' + false);
}
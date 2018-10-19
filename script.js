"use strict";
function tabliczka() {
    let tabliczka = '';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            if (j == 10) {
                tabliczka += " " + i * j + "\n";
            }
            else {
                tabliczka += " " + i * j + " ";
            }
        }
    }
    return tabliczka;
}
console.log(tabliczka());

"use strict";
class Complex {
    constructor(r, u) {
        this.czescRzeczywista = r;
        this.czescUrojona = u;
    }
    getR() {
        return this.czescRzeczywista;
    }
    getU() {
        return this.czescUrojona;
    }
    dodaj(l1) {
        let reczywista = this.getR() + l1.getR();
        let urojona = "i";
        let count = parseInt(this.getU().slice(1, 2)) + parseInt(l1.getU().slice(1, 2));
        urojona += count;
        return new Complex(reczywista, urojona);
    }
    odejmij(l1) {
        let reczywista = this.getR() - l1.getR();
        let urojona = "i";
        let count = parseInt(this.getU().slice(1, 2)) - parseInt(l1.getU().slice(1, 2));
        if (count < 0) {
            urojona = "-i";
            count = -count;
        }
        urojona += count;
        return new Complex(reczywista, urojona);
    }
    modul() {
        return Math.round(Math.sqrt(Math.abs((Math.pow(this.getR(), 2) + Math.pow(parseInt(this.getU().slice(1, 2)), 2)))));
    }
}
let l1 = new Complex(2, "i2");
let l2 = new Complex(2, "i3");
console.log("Dodawanie: ", l1.dodaj(l2));
console.log("Odejmowanie: ", l1.odejmij(l2));
console.log("Moduł: ", l1.modul());

let CoffeeMake={
    on(){
        make:true
    },
    off(){
        coffee:true
    }
};
CoffeeMake.prototype=kapelna.prototype;
let kapelna={
    do:true,
    __proto__:CoffeeMake
};
let rizkova={
    riz:true,
    __proto__:CoffeeMake
};
let kavo_machina={
    kavo:true,
    __proto__:CoffeeMake
};
console.log(kapelna.on());
console.log(kapelna.off());
console.log(rizkova.on());
console.log(kapelna.make);
rizkova.off();
kavo_machina.on();
kavo_machina.off();


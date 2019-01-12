"use strict";


// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){//Code block
let myFunctionVariable = 0;

    function Start() {
        let myLocalVariable = 0;
        console.log(`App Started..${myFunctionVariable}`);
    }

    window.addEventListener("load", Start);
})();
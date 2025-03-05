// Immediately Invoked Function Expression (IIFE)

(function Chai(){   // Named IIFE
    console.log(`DB Connected`);
})();    // <--- IIFE (function)(call) Syntax

((name)=>{  // UnNamed IIFE
    console.log(`DB Connected Two ${name}`);
})('Shamsad'); // <--- IIFE Works on Arrow function as well
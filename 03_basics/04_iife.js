// Immediately Invoked Function Expressions (IIFE)
// global scope k pollution se problem hoti h, uske variables or jo declaration h
// usko hatane k liye

(function Jon(){
    // named IIFE - Jon
    console.log(`Jonathan is `);
    
})();

((God = 'for cricket') => {
    console.log(`Db two ${God}`);
    
})('Jonathan')
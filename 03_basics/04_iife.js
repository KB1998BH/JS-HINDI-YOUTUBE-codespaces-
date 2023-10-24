//--Immediately Invoked function Expression(IIFE)
//-- Remove Global scope pollution so there used iife;
(function chai(){
    // named iife
    console.log(`DB connected`);
})();

( (name) => {
    //unnamed iife
    console.log(`DB connected 3 ${name}`);
} ) ('hitesh')

// chai()
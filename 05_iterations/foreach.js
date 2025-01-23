const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((currentValue, index, arr, thisval) =>{
//     console.log(currentValue, 'curr value');
//     console.log(index, 'index');
//     console.log(arr, 'arr');
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

const Jonatan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Values = Jonatan.filter( (val) => (
    val > 4
    
 ) )

console.log(Values);

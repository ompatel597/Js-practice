// singleton
// Object.create

// object literals

const mySym = Symbol('Jonathan')


const JsUser = {
    name: 'Jonathan',
    [mySym]: 'not',
    age: 18,
    isLoggedIn: true,
    daysOfLogin:30
}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["isLoggedIn"])
// console.log( JsUser[mySym])

// JsUser.name = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.name = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.jo = function(){
    console.log("Hello JS user", 'ko');
}
JsUser.jo2 = function(){
    console.log(`Hello JS user, ${this.name}`, 'ok');
}

JsUser.jo()
JsUser.jo2()
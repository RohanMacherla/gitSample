function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function afterGreeting() {
    console.log("How are you?");
}

greet("Rohan", afterGreeting);
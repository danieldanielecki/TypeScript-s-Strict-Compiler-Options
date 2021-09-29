function sampleMethod(sampleParameter) {
    var greeting = "Hello";
    console.log(greeting + ": ", sampleParameter);
    greeting = null;
    console.log(greeting + ": ", sampleParameter);
}
sampleMethod("test");

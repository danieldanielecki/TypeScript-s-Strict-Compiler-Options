function sampleMethod(sampleParameter: string) {
  let greeting: string | null = "Hello";
  console.log(greeting + ": ", sampleParameter);
  greeting = null;
  console.log(greeting + ": ", sampleParameter);
}

sampleMethod("test");

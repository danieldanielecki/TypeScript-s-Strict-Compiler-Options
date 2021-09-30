function sampleMethod(sampleParameter: string | number) {
  console.log("Hello, " + sampleParameter.toLowerCase());
}

type StringOrNumber = (definedTypeParameter: string | number) => void;

let sampleMethod2: StringOrNumber = sampleMethod;

sampleMethod2(10);

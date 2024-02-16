export const regularExpressions = (regex: string) => {
  return new RegExp(regex, "g");
};

export const regExpMatchArray = (regex: RegExp, testString: string) => {
  return testString.match(regex);
};

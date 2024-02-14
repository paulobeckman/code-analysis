const isDigit = (char: string) => {
  return /\d/.test(char);
};

const isLetter = (char: string) => {
  return /[a-z]/i.test(char);
};

const isOperator = (char: string) => {
  return /[+=\-*/]/.test(char);
};

const nextToken = ({ pos, input }: { pos: number; input: string }) => {
  let position = pos;
  while (position < input.length) {
    const char = input[position];
    if (isDigit(char)) {
      let num = "";
      while (isDigit(input[position])) {
        num += input[position++];
      }
      return { type: "número", value: Number(num), pos: position };
    }
    if (isLetter(char)) {
      let identifier = "";
      while (isLetter(input[position])) {
        identifier += input[position++];
      }
      return { type: "identificador", value: identifier, pos: position };
    }
    if (isOperator(char)) {
      position++;
      return { type: "operador", value: char, pos: position };
    }
    position++;
  }
  return null;
};

export const lexicalAnalyzer = (input: string) => {
  let pos = 0;
  let token;
  const tokens = [];
  while ((token = nextToken({ pos, input }))) {
    tokens.push({ type: token.type, value: token.value });
    pos = token.pos;
  }
  return tokens;
};

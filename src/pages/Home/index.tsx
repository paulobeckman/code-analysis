import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Button from "src/components/Button";
import TextField from "src/components/TextField";
import { Token } from "src/interface/token";
import { lexicalAnalyzer } from "src/utils/lexicalAnalyzer";
import TokenTable from "./components/TokenTable";

type FormValues = {
  lexicalAnalyzer: string;
};

export function Component() {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const [tokens, setTokens] = useState<Array<Token>>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const tokens = lexicalAnalyzer(data.lexicalAnalyzer);
    setTokens(tokens);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 bg-white shadow-md sm:px-6 lg:px-8 sm:m-4 sm:rounded-lg">
          <h1 className="text-center font-bold text-xl mb-5">
            Analisador Léxico
          </h1>
          <TextField
            label="Insira um valor"
            name="lexicalAnalyzer"
            placeholder="Ex.: sun = 2 + 5"
          />
          <div className="mt-2 flex justify-center">
            <Button type="submit">Analisar</Button>
          </div>
          {tokens && <TokenTable tokens={tokens} />}
        </div>
      </form>
    </FormProvider>
  );
}

Component.displayName = "Home";

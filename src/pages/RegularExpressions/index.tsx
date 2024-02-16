import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Button from "src/components/Button";
import Card from "src/components/Card";
import TextField from "src/components/TextField";
import {
  regExpMatchArray,
  regularExpressions,
} from "src/utils/regularExpressions";

type FormValues = {
  regex: string;
  testString: string;
};

export function Component() {
  const [match, setMatch] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");

  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const re = regularExpressions(data.regex);
    setMatch(re.test(data.testString));
    const matches = regExpMatchArray(re, data.testString);
    if (matches) {
      let newText = data.testString;
      matches.forEach((match) => {
        newText = newText.replace(match, `<mark>${match}</mark>`);
      });
      setHighlightedText(newText);
    } else {
      setHighlightedText(data.testString);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <h1 className="text-center font-bold text-xl mb-5">
            Expressão Regular
          </h1>
          <div className="flex flex-col gap-4">
            <TextField
              label="Expressão Regular"
              name="regex"
              placeholder="Ex.: hello,  ^a.*z$, etc..."
            />
            <TextField
              label="Texto para Testar"
              name="testString"
              placeholder="Ex.: hello world, abcxyz, etc..."
            />
          </div>
          <div className="mt-2 flex justify-center">
            <Button type="submit">Testar</Button>
          </div>
          {highlightedText && (
            <div className="p-4 bg-white border border-gray-200 sm:px-6 lg:px-8 sm:m-4 sm:rounded-lg">
              <p className="pb-4 text-center font-bold text-lg">Resultado</p>
              <div className="flex gap-2 items-center">
                {match ? (
                  <div className="font-medium">
                    A expressão regular corresponde ao texto:
                  </div>
                ) : (
                  <div className="font-medium">
                    A expressão regular não corresponde ao texto:
                  </div>
                )}
                <Card>
                  <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
                </Card>
              </div>
            </div>
          )}
        </Card>
      </form>
    </FormProvider>
  );
}

Component.displayName = "RegularExpressions";

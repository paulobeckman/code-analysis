import classNames from "classnames";
import { useFormContext } from "react-hook-form";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const TextField = ({ label, name, ...rest }: TextFieldProps) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={classNames("mb-1", { "sr-only": !label })}
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 rounded-md px-2 py-1 outline-slate-500"
        {...register(name)}
        {...rest}
      />
    </div>
  );
};

export default TextField;

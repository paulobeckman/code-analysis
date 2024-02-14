type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-slate-600 rounded-md px-4 py-2 text-white font-bold hover:bg-slate-500 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      {...rest}
    />
  );
};

export default Button;

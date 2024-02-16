import { Link, Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <>
      <header className="flex justify-center items-center gap-20 h-16 bg-white shadow-md mb-6">
        <Link
          to="/lexical"
          className="underline underline-offset-4 hover:text-slate-500"
        >
          Analisador Léxico
        </Link>
        <Link
          to="/regex"
          className="underline underline-offset-4 hover:text-slate-500"
        >
          Expressão Regular
        </Link>
      </header>
      <main className="m-auto md:max-w-[960px]">
        <Outlet />
      </main>
    </>
  );
};

export default GlobalLayout;

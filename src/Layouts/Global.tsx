import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <main className="m-auto md:max-w-[960px]">
      <Outlet />
    </main>
  );
};

export default GlobalLayout;

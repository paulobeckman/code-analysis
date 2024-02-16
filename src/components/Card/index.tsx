const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="p-4 bg-white shadow-md border border-gray-100 sm:px-6 lg:px-8 sm:m-4 sm:rounded-lg">
      {children}
    </div>
  );
};

export default Card;

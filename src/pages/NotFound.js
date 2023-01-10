import { MdRemoveShoppingCart } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="mt-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        Not found
      </h2>
      <h2 className="section-title uppercase text-9xl font-bold space-font text-center mb-5">
        404
      </h2>

      <MdRemoveShoppingCart className=" mx-auto  opacity-40 block text-9xl items-center justify-center" />
    </div>
  );
};

export default NotFound;

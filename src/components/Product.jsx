import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  const { category, description, id, image, price, rating, title } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>

          <div className="absolute top-0 right-0 bg-red-400/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <buttons>
              <div className="flex justify-center items-center w-12 h-12 text-white bg-red-400">
                <BsPlus className="text-3xl" />
              </div>
            </buttons>
            <Link
              to={"/"}
              className="w-12 h-12 flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Product;

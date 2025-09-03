import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../store/Products-slice";
import { motion } from "framer-motion";
import {  FaStar } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

function Half() {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // animation variants
  const divV = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (loading)
    return (
      <p className="font-bold my-[150px] text-center text-white">Loading....</p>
    );

  if (products.length === 0)
    return (
      <p className="font-bold my-[150px] text-center text-white">Empty</p>
    );

  return (
    <div className="bg-custom-bg min-h-screen object-contain bg-center px-6 py-10">
      {/* Title with motion */}
      <motion.h1
        className="text-4xl text-white font-bold text-center mb-10 flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      </motion.h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products
          .filter((item) => item.category === "beans-500g")
          .map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-[#2e1410] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center text-white"
              variants={divV}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              viewport={{ once: true }}
            >
              <img
                src={product.image}
                alt={product.description}
                className="w-28 h-28 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {product.description}
              </h2>
              <p className="text-lg text-gray-300 mt-2 flex items-center gap-1">
                <MdAttachMoney className="text-green-400" />
                {product.salary}
              </p>
              <p className="text-yellow-400 mt-1 flex items-center gap-1">
                <FaStar /> {product.rate}
              </p>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Half;

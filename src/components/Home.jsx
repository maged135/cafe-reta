import image1 from '../image/image.jpeg'
import { FaCoffee, FaSnowflake, FaFire, FaBox } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
    const divV = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    }

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className="bg-custom-bg min-h-screen object-contain bg-center flex flex-col items-center px-4 py-10">
            {/* الصورة والعنوان */}
            <motion.img
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-3xl h-auto object-contain rounded-3xl shadow-lg mb-12"
                src={image1}
                alt="coffee"
            />

            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl text-white w-fit bg-[#2e1410] px-6 py-2 rounded-3xl shadow-neutral-900 flex items-center gap-3 mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <FaCoffee className="text-yellow-400" /> Some of Products <FaCoffee className="text-yellow-400" />
            </motion.h1>


            {/* الكروت */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                {[
                    { title: "Hot Coffee", icon: <FaFire className="text-red-500" />, img: image1, link: "Hot" },
                    { title: "Iced Coffee", icon: <FaSnowflake className="text-blue-400" />, img: image1, link: "Iced" },
                    { title: "Quarter Kilo", icon: <FaBox className="text-green-400" />, img: image1, link: "Quarter" },
                    { title: "Half Kilo", icon: <FaBox className="text-orange-400" />, img: image1, link: "Half" },
                ].map((product, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#2e1410] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center text-white"
                        variants={divV}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link to={product.link}>
                            <img src={product.img} alt={product.title} className="w-24 h-24 object-cover rounded-full mb-4" />
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                {product.icon} {product.title}
                            </h2>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Home


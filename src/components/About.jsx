import { motion } from "framer-motion";
import image1 from "../image/image.jpeg";
import { FaCoffee, FaSmileBeam, FaLeaf } from "react-icons/fa";

function About() {
    return (
        <div className="bg-custom-bg min-h-screen object-contain bg-center px-6 py-16 flex items-center justify-center">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* الصورة */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={image1}
                        alt="coffee beans"
                        className="rounded-3xl shadow-lg w-full object-cover"
                    />
                </motion.div>

                {/* الكلام */}
                <motion.div
                    className="flex-1 text-center md:text-left text-white"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold mb-6 flex items-center justify-center md:justify-start gap-3">
                        <FaCoffee className="text-yellow-400" />
                        About Us
                    </h1>

                    <p className="text-3xl  leading-relaxed text-gray-200 mb-6">
                        Welcome to <span className="font-semibold text-yellow-400">Our Coffee Shop</span>,
                        where every bean tells a story. We carefully roast and brew to bring
                        you the <span className="italic text-yellow-300">perfect cup</span>
                        that warms your heart and refreshes your soul.
                    </p>

                    <div className="space-y-4">
                        <p className="flex items-center gap-3 text-gray-200 text-3xl font-bold">
                            <FaSmileBeam className="text-yellow-300" />
                            Friendly vibes & cozy atmosphere.
                        </p>
                        <p className="flex items-center gap-3 text-gray-200 text-3xl font-bold">
                            <FaLeaf className="text-green-400" />
                            Fresh and natural ingredients.
                        </p>
                        <p className="flex items-center gap-3 text-gray-200 text-3xl font-bold">
                            <FaCoffee className="text-brown-400" />
                            From hot espresso to iced lattes, crafted with love.
                        </p>
                        <p className="flex items-center gap-3 text-gray-200 text-3xl font-bold">
                           made by Eng/ maged mostafa
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;

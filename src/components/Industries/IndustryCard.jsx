import { motion } from 'framer-motion';

const IndustryCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="
                w-[320px] h-80
                flex flex-col items-center justify-center
                gap-4 p-6
                bg-white
                rounded-[20px]
                shadow-[0_0_20px_rgba(0,0,0,0.12)]
                md:relative
            "
            style={{ top: (1 - index) * 150 }}
        >
            {item.dot && (
                <img
                    src={item.dot}
                    alt=""
                    className="absolute -left-30 top-10 w-30 opacity-140 pointer-events-none"
                />
            )}

            <div className="w-16 h-16 flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 text-center">{item.title}</h3>

            <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
        </motion.div>
    );
};

export default IndustryCard;

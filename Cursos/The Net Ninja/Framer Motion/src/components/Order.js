import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.75
    }
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

	return (
		<motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2
            exit={{ opacity: 0 }}
          >Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
			<motion.p variants={childrenVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
		</motion.div>
	);
};

export default Order;

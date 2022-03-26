import { motion } from 'framer-motion';

export default function Showcase() {
  const nameString = 'KEVIN LACSON';

  const nameVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };
  const letterVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <section>
      <div className="container">
        <div className="showcase">
          <div className="name">
            <motion.h1
              variants={nameVariant}
              initial="hidden"
              animate="visible"
            >
              {nameString.split('').map((char, index) => {
                return (
                  <motion.span variants={letterVariant} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 1 }}
              style={{
                width: `100%`,
                height: `3px`,
                backgroundColor: `black`,
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

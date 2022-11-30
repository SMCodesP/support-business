import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariant = {
  hidden: { opacity: 0, x: -200, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const BoxAnimate: React.FC = ({ children }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start(`visible`);
    } else {
      control.start(`hidden`);
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

export default BoxAnimate;

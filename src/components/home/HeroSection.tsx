
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  return (
    <section className="pt-32 pb-20 px-4 tech-background relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-blue-500/10 to-transparent dark:from-blue-500/5 animate-glow"></div>
      </div>
      
      <motion.div 
        className="container mx-auto text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1 
          className="text-5xl font-bold text-gray-900 dark:text-white mb-6 glow-effect"
          variants={item}
        >
          {t('app.title')}
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={item}
        >
          {t('app.subtitle')}
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          variants={item}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" className="bg-primary hover:bg-primary-600">
              {t('app.startLearning')}
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button size="lg" variant="outline" className="border-2 dark:border-gray-700 dark:text-white">
              {t('app.learnMore')}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

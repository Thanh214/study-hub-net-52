
import { Card } from "@/components/ui/card";
import { Book, Video, Users, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Book,
      title: t('features.library'),
      description: t('features.libraryDesc'),
    },
    {
      icon: Brain,
      title: t('features.ai'),
      description: t('features.aiDesc'),
    },
    {
      icon: Users,
      title: t('features.community'),
      description: t('features.communityDesc'),
    },
    {
      icon: Video,
      title: t('features.online'),
      description: t('features.onlineDesc'),
    },
  ];

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

  const fadeIn = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  return (
    <section className="py-20 px-4 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('features.title')}
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full dark:bg-gray-800 dark:border-gray-700">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

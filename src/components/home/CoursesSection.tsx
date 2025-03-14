
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const courseCategories = [
  {
    title: "courses.highSchool",
    description: "courses.highSchoolDesc",
    image: "/images/high-school.jpg"
  },
  {
    title: "courses.university",
    description: "courses.universityDesc",
    image: "/images/university.jpg"
  },
  {
    title: "courses.language",
    description: "courses.languageDesc",
    image: "/images/language.jpg"
  },
  {
    title: "courses.softSkills",
    description: "courses.softSkillsDesc",
    image: "/images/soft-skills.jpg"
  }
];

export const CoursesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4 tech-background bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 dark:opacity-10">
        <div className="absolute inset-0 bg-tech-grid bg-center"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          {t('courses.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{t(category.title)}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t(category.description)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

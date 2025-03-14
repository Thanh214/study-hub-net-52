
import { Link } from "react-router-dom";
import { Book, Search, User, Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50 dark:bg-gray-900/90"
      initial="hidden"
      animate="visible"
      variants={navAnimation}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">EduConnect</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <motion.div custom={1} variants={itemAnimation}>
                <Link to="/courses" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.courses')}
                </Link>
              </motion.div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <motion.div custom={2} variants={itemAnimation}>
                <Link to="/community" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.community')}
                </Link>
              </motion.div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <motion.div custom={3} variants={itemAnimation}>
                <Link to="/about" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </motion.div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              aria-label="Toggle language"
            >
              <Languages className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/auth">
              <Button>
                <User className="h-5 w-5 mr-2" />
                {t('auth.login')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

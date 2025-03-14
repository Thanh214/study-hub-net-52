
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

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">EduConnect</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/courses" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.courses')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/community" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.community')}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          >
            <Languages className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/auth">
            <Button>
              <User className="h-5 w-5 mr-2" />
              {t('auth.login')}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

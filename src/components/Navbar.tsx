
import { Link } from "react-router-dom";
import { Book, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-gray-900">EduConnect</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/courses" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                Khóa học
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/community" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                Cộng đồng
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-primary transition-colors">
                Giới thiệu
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/auth">
            <Button>
              <User className="h-5 w-5 mr-2" />
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

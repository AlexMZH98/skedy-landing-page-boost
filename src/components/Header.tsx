
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    // For anchor links, we need to handle navigation differently
    if (href.startsWith('#')) {
      // If we're not on the home page, go to home first
      if (window.location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Skedy</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleMenuItemClick('#features')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleMenuItemClick('#pricing')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleMenuItemClick('#team')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => handleMenuItemClick('#terms')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </button>
          </nav>

          {/* Desktop Auth Buttons and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="text-muted-foreground">Login</Button>
            <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleMenuItemClick('#features')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => handleMenuItemClick('#pricing')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleMenuItemClick('#team')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Team
              </button>
              <button 
                onClick={() => handleMenuItemClick('#terms')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Terms
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-muted-foreground">Login</Button>
                <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

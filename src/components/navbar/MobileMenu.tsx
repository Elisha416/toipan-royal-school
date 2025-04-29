
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavItem } from './types';

interface MobileMenuProps {
  navLinks: NavItem[];
  isScrolled: boolean;
  handleScrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ navLinks, isScrolled, handleScrollToSection }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-2 hover:bg-white/10 transition-colors duration-300">
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-80 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-royal-600 to-royal-700 flex items-center justify-center mr-3">
                  <span className="text-white font-playfair font-bold text-base">TR</span>
                </div>
                <div>
                  <h1 className="font-playfair font-bold text-royal-600 text-lg">TOIPAN ROYAL</h1>
                  <p className="text-xs font-medium text-gray-600">GIRLS' SECONDARY SCHOOL</p>
                </div>
              </div>
            </div>
            <nav className="flex-1 pt-6 pb-8 overflow-y-auto">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.title} className="animate-fade-in">
                    <button 
                      onClick={() => handleScrollToSection(link.path)}
                      className="font-medium text-base text-gray-800 hover:text-royal-600 transition-colors duration-300"
                    >
                      {link.title}
                    </button>
                    {link.submenu.length > 0 && (
                      <ul className="pl-4 mt-3 space-y-3 border-l border-gray-100">
                        {link.submenu.map((subItem) => (
                          <li key={subItem.title}>
                            <button 
                              onClick={() => handleScrollToSection(subItem.path)}
                              className="font-normal text-sm text-gray-600 hover:text-royal-600 transition-colors duration-300"
                            >
                              {subItem.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-gray-100 pt-4">
              <Button 
                className="bg-royal-600 hover:bg-royal-700 text-white text-sm font-medium w-full rounded-xl transition-all duration-300 transform hover:scale-105 py-6"
                onClick={() => handleScrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

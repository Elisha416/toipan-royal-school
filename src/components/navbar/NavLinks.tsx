
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavItem } from './types';

interface NavLinksProps {
  navLinks: NavItem[];
  isScrolled: boolean;
  handleScrollToSection: (sectionId: string) => void;
}

const NavLinks = ({ navLinks, isScrolled, handleScrollToSection }: NavLinksProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        link.submenu.length > 0 ? (
          <DropdownMenu key={link.title}>
            <DropdownMenuTrigger asChild>
              <button 
                className={`flex items-center font-medium text-sm group ${
                  isScrolled 
                    ? 'text-primary hover:text-primary-700' 
                    : 'text-white hover:text-secondary'
                } transition-all duration-300`}
                onClick={() => handleScrollToSection(link.path)}
              >
                {link.title}
                <ChevronDown className="ml-1 h-4 w-4 transform transition-transform group-hover:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-white/95 backdrop-blur-md mt-2 rounded-xl shadow-xl p-2 w-48 border border-gray-100/20">
              {link.submenu.map((subItem) => (
                <DropdownMenuItem key={subItem.title}>
                  <button 
                    onClick={() => handleScrollToSection(subItem.path)}
                    className="w-full px-4 py-3 text-sm hover:bg-primary/5 rounded-lg text-primary hover:text-primary-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    {subItem.title}
                  </button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button 
            key={link.title}
            onClick={() => handleScrollToSection(link.path)}
            className={`font-medium text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 ${
              isScrolled 
                ? 'text-primary hover:text-primary-700 after:bg-primary' 
                : 'text-white hover:text-secondary after:bg-secondary'
            } hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300`}
          >
            {link.title}
          </button>
        )
      ))}
      <Button 
        className={`relative overflow-hidden ${
          isScrolled 
            ? 'bg-royal-600 hover:bg-royal-700' 
            : 'bg-secondary hover:bg-secondary-500 text-primary'
        } text-white text-sm font-medium px-6 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
        onClick={() => handleScrollToSection('contact')}
      >
        Contact
      </Button>
    </div>
  );
};

export default NavLinks;

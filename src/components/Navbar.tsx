
import { useState, useEffect } from 'react';
import Logo from './navbar/Logo';
import NavLinks from './navbar/NavLinks';
import MobileMenu from './navbar/MobileMenu';
import { NavItem } from './navbar/types';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks: NavItem[] = [
    { 
      title: 'About',
      path: 'about',
      submenu: [
        { title: 'Our History', path: 'about' },
        { title: 'Mission & Values', path: 'about' },
        { title: 'Leadership', path: 'about' }
      ]
    },
    { 
      title: 'Academics',
      path: 'academics',
      submenu: [
        { title: 'Curriculum', path: 'academics' },
        { title: 'Departments', path: 'academics' },
        { title: 'Achievements', path: 'academics' }
      ]
    },
    { 
      title: 'Campus Life',
      path: 'campus',
      submenu: [
        { title: 'Facilities', path: 'campus' },
        { title: 'Activities', path: 'campus' },
        { title: 'Student Life', path: 'campus' }
      ]
    },
    { 
      title: 'Admissions',
      path: 'admissions',
      submenu: []
    },
    {
      title: 'News & Events',
      path: 'news',
      submenu: []
    }
  ];

  return (
    <nav 
      className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/20' 
          : 'bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Logo isScrolled={isScrolled} />
          </div>
          
          <NavLinks 
            navLinks={navLinks}
            isScrolled={isScrolled}
            handleScrollToSection={handleScrollToSection}
          />
          
          <MobileMenu 
            navLinks={navLinks}
            isScrolled={isScrolled}
            handleScrollToSection={handleScrollToSection}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

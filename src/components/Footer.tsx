import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock, ExternalLink, ChevronRight, Award, BookOpen, Users, Calendar } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-royal-900 to-royal-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-royal-400/10 -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-royal-500/10 translate-y-1/2 -translate-x-1/4 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        {/* Logo and description section with ornate border */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 pb-12 relative">
          {/* Decorative top border */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full">
            <div className="flex items-center justify-center">
              <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full max-w-4xl"></div>
            </div>
          </div>
          
          <div className="flex items-center mb-8 md:mb-0">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-5 shadow-lg border-4 border-royal-700/50">
              <span className="text-royal-950 font-playfair font-bold text-2xl">TRS</span>
            </div>
            <div>
              <h2 className="font-playfair font-bold text-3xl text-white tracking-wide">TOIPAN ROYAL</h2>
              <h3 className="font-playfair font-bold text-3xl text-white tracking-wide"> SCHOOL</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-amber-600 mt-2"></div>
            </div>
          </div>
          
          <div className="md:max-w-sm">
            <p className="text-royal-100 italic text-lg border-l-4 border-amber-500/50 pl-4">
              "Empowering young women through excellence in education, leadership, and character development since 2023."
            </p>
          </div>
          
          {/* Decorative bottom border */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
            <div className="flex items-center justify-center">
              <div className="h-1 bg-gradient-to-r from-transparent via-royal-600 to-transparent w-full max-w-4xl"></div>
            </div>
          </div>
        </div>
        
        {/* Main footer content grid with ornate section headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="font-playfair font-bold text-xl mb-6 flex items-center">
              <span className="inline-block w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["About Us", "Academics", "Campus Life", "Admissions", "News & Events", "Contact Us"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-royal-100 hover:text-amber-300 transition-colors flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-4 h-px bg-amber-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="font-playfair font-bold text-xl mb-6 flex items-center">
              <span className="inline-block w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mr-3"></span>
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                "Student Portal", 
                "Parent Portal", 
                "Faculty & Staff", 
                "Alumnae", 
                "Careers", 
                "Support Toipan"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-royal-100 hover:text-amber-300 transition-colors flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-4 h-px bg-amber-400 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="lg:col-span-3">
            <h4 className="font-playfair font-bold text-xl mb-6 flex items-center">
              <span className="inline-block w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mr-3"></span>
              Contact Us
            </h4>
            <address className="not-italic text-royal-100 space-y-5">
              <div className="flex items-start">
                <div className="bg-royal-800/60 p-2 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <p></p>
              </div>
              <div className="flex items-center">
                <div className="bg-royal-800/60 p-2 rounded-full mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <p></p>
              </div>
              <div className="flex items-center">
                <div className="bg-royal-800/60 p-2 rounded-full mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <a href="mailto:info@toipanroyal.edu" className="hover:text-amber-300 transition-colors">
                  info@toipanroyal.edu
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-royal-800/60 p-2 rounded-full mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5 text-amber-400" />
                </div>
                <p>Mon-Fri: 8:00 AM - 4:30 PM</p>
              </div>
            </address>
          </div>
          
          {/* Newsletter and social */}
          <div className="lg:col-span-3">
            <h4 className="font-playfair font-bold text-xl mb-6 flex items-center">
              <span className="inline-block w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mr-3"></span>
              Stay Connected
            </h4>
            <div className="mb-8">
              <p className="text-royal-100 mb-4">Subscribe to our newsletter for updates</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 bg-royal-800/70 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-amber-400 w-full border border-royal-700"
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-royal-950 font-bold px-5 py-3 rounded-r transition-colors flex items-center"
                >
                  Join
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </form>
            </div>
            <div>
              <p className="text-royal-100 mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "Youtube" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href="#" 
                    aria-label={social.label}
                    className="bg-royal-800/70 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 text-royal-300 hover:text-royal-950 p-3 rounded-full transition-all duration-300 border border-royal-700 hover:border-amber-500 shadow-md hover:shadow-amber-500/20"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Highlight cards with gold accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Upcoming Events", icon: Calendar, link: "#" },
            { title: "School Calendar", icon: BookOpen, link: "#" },
            { title: "Virtual Tour", icon: Users, link: "#" },
            { title: "Alumni Network", icon: Award, link: "#" }
          ].map((item) => (
            <a 
              key={item.title}
              href={item.link} 
              className="bg-gradient-to-br from-royal-800/80 to-royal-900/80 hover:from-royal-700/80 hover:to-royal-800/80 p-5 rounded-lg transition-all duration-300 flex items-center justify-between group border border-royal-700/50 hover:border-amber-500/30 shadow-lg hover:shadow-amber-500/10"
            >
              <div className="flex items-center">
                <div className="mr-4 p-2 bg-royal-700/50 rounded-full">
                  <item.icon className="h-5 w-5 text-amber-400" />
                </div>
                <span className="font-medium text-royal-100 group-hover:text-white">{item.title}</span>
              </div>
              <ExternalLink className="h-4 w-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
        
        {/* Ornate divider before copyright */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-royal-600 to-transparent w-full max-w-4xl"></div>
          <div className="absolute">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center border-2 border-royal-700">
              <span className="text-royal-950 font-bold text-xs">TRS</span>
            </div>
          </div>
        </div>
        
        {/* Copyright and policies */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-royal-300 text-sm mb-6 md:mb-0">
            &copy; {currentYear} Toipan Royal  School. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-royal-300">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-amber-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
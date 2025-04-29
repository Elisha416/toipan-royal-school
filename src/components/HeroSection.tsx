import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered Background with enhanced visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/95 via-purple-800/90 to-indigo-700/85 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583765257034-5a5b72a1f2b4?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center scale-105 animate-subtle-zoom"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gold/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gold/20 to-transparent"></div>
          <div className="absolute top-8 left-8 w-64 h-64 border border-gold/30 rounded-full opacity-40"></div>
          <div className="absolute bottom-8 right-8 w-96 h-96 border border-gold/30 rounded-full opacity-40"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        {/* Royal emblem */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 bg-gold/90 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
            <div className="w-20 h-20 border-4 border-indigo-900 rounded-full flex items-center justify-center">
              <span className="text-indigo-900 text-2xl font-serif font-bold">TRS</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-block px-6 py-2 bg-gold/80 backdrop-blur-sm rounded-full text-indigo-900 text-base font-medium mb-4 opacity-0 animate-slide-up shadow-xl">
              Established 2023 • Royal Heritage
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight opacity-0 animate-fade-in-slow tracking-tight">
              <span className="inline-block pb-2 border-b-2 border-gold/70">Empowering</span> Young Girls Through <span className="text-gold">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed opacity-0 animate-slide-up-delayed font-light">
              At Toipan Royal School, we cultivate the mind, body, and spirit of exceptional young girls, 
              preparing them to lead with nobility, intellect, and compassion in a global society.
            </p>
            <div className="pt-6 flex flex-wrap gap-6 opacity-0 animate-slide-up-more-delayed">
              <Button className="bg-gold hover:bg-amber-400 text-indigo-900 hover:text-indigo-800 text-base font-semibold px-8 py-7 rounded-none transition-all duration-300 hover:scale-105 shadow-xl" asChild>
                <a href="#admissions">Request Admission</a>
              </Button>
              <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-gold/80 text-base font-semibold px-8 py-7 rounded-none transition-all duration-300 hover:scale-105 shadow-xl" asChild variant="outline">
                <a href="#about">Explore Our Legacy</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block opacity-0 animate-fade-in-delayed">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-gold/40 rounded-2xl"></div>
              
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-purple-600/40 rounded-lg backdrop-blur-sm animate-float-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/30 rounded-lg backdrop-blur-sm animate-float-slow-reverse"></div>
              
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105 border-4 border-white/20">
                <img 
                  src="/Toipan01.jpg" 
                  alt="Students at Toipan Royal School" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold font-serif">
                  <span className="text-gold text-xl">✦</span> Wisdom, Excellence, Leadership <span className="text-gold text-xl">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats */}
        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2', label: 'Years of Royal Excellence' },
            { value: '100%', label: 'Student Acceptance' },
            { value: '1000+', label: 'Students' },
            { value: '12:1', label: 'Student-Faculty Ratio' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-indigo-900/60 backdrop-blur-sm rounded-none transform transition-all duration-500 hover:scale-105 hover:bg-indigo-800/70 opacity-0 animate-stats-fade-in border-t-2 border-gold/40"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl md:text-5xl font-playfair font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-sm md:text-base text-white/90 mt-2 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Royal seal */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-1 bg-gold/60 mb-2 mx-auto"></div>
          <div className="font-serif text-gold/80 text-xs tracking-widest uppercase">By Royal Appointment</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
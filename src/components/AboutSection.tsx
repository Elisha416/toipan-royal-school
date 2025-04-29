import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-indigo-100 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mb-32 -mr-32"></div>
      <div className="absolute top-40 left-0 w-40 h-40 bg-indigo-100/50 rounded-full -ml-20"></div>
      
      {/* Royal seam line at top */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-24 h-1 bg-gold"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <span className="mx-4 text-gold font-serif text-sm tracking-widest uppercase">Est. 2023</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-indigo-900 mb-6 relative inline-block">
             Toipan Royal School
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gold/70"></div>
          </h2>
          
          <p className="text-xl text-indigo-800/80 max-w-3xl mx-auto font-light">
            Discover our noble heritage, our unwavering commitment to excellence, and the timeless values 
            that have established Toipan Royal School as a distinguished institution for cultivating the leaders of tomorrow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-gold rounded-full"></div>
              </div>
              <h3 className="text-3xl font-playfair font-bold text-indigo-900">Our Distinguished Legacy</h3>
            </div>
            
            <p className="text-lg text-indigo-800/80 leading-relaxed">
              Founded in 2023, our institution was established with a vision to provide 
              unparalleled education for exceptional young girls in an environment that cultivates academic brilliance, 
              noble character development, and influential leadership capabilities.
            </p>
            
            <p className="text-lg text-indigo-800/80 leading-relaxed">
              For nearly two years, we have upheld an esteemed tradition of excellence, empowering thousands 
              of distinguished young women who have gone on to make remarkable contributions across diverse fields 
              and continents, carrying forward our legacy of excellence and service.
            </p>
            
            <Button className="mt-8 bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 rounded-none border-2 border-transparent hover:border-gold transition-all duration-300 shadow-lg" asChild>
              <a href="#history">Explore Our Royal Heritage</a>
            </Button>
          </div>
          
          <div className="relative order-1 md:order-2">
            {/* Decorative frame */}
            <div className="absolute -inset-6 border-2 border-gold/30 rounded-xl"></div>
            
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-200/70 rounded-lg"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/20 rounded-lg"></div>
            
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/Toipan01.jpg" 
                alt="Toipan Royal School Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent text-center py-6">
                <div className="text-gold font-serif text-sm tracking-widest uppercase">Toipan Royal School Est. 2023</div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="mission" className="bg-indigo-900 rounded-none p-16 mb-24 relative shadow-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>
          <div className="absolute left-0 top-0 w-1 h-full bg-gold"></div>
          <div className="absolute right-0 top-0 w-1 h-full bg-gold"></div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold flex items-center justify-center">
                <div className="text-gold text-3xl font-serif">✦</div>
              </div>
            </div>
            
            <h3 className="text-3xl font-playfair font-bold text-white mb-8">Our Noble Mission & Vision</h3>
            
            <p className="text-2xl text-gold italic mb-10 font-light">
              "To cultivate and educate young girls of impeccable character, extraordinary intellect, and noble spirit who will be 
              empowered to transform society through visionary leadership, groundbreaking innovation, and selfless service."
            </p>
            
            <div className="w-24 h-px bg-gold/50 mx-auto mb-10"></div>
            
            <p className="text-xl text-white/90 font-light">
              Our vision is to reign as the preeminent institution for girl's education globally, celebrated for academic 
              distinction, character refinement, and producing graduates who exhibit excellence in all endeavors while maintaining 
              an unwavering commitment to societal betterment.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <GraduationCap className="h-12 w-12 text-gold" />,
              title: "Academic Excellence",
              description: "We uphold the highest academic standards with a comprehensive curriculum that challenges students to achieve their fullest intellectual potential."
            },
            {
              icon: <Award className="h-12 w-12 text-gold" />,
              title: "Character Formation",
              description: "We instill the timeless virtues of integrity, honor, responsibility, and resilience that form the foundation of noble character."
            },
            {
              icon: <Heart className="h-12 w-12 text-gold" />,
              title: "Nurturing Community",
              description: "We cultivate a supportive environment where every young woman is valued, uplifted, and empowered to pursue her highest aspirations."
            },
            {
              icon: <Sparkles className="h-12 w-12 text-gold" />,
              title: "Visionary Leadership",
              description: "We develop leaders of distinction who demonstrate confidence, compassion, and an unwavering commitment to positive global impact."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 hover:bg-indigo-50 border border-indigo-100 hover:border-gold transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h4 className="text-2xl font-playfair font-bold text-indigo-900 mb-4">{value.title}</h4>
              <p className="text-indigo-800/80 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* Royal seal at bottom */}
        <div className="flex justify-center">
          <div className="text-center">
            <div className="w-16 h-1 bg-gold/60 mb-2 mx-auto"></div>
            <div className="font-serif text-indigo-900/60 text-xs tracking-widest uppercase">Excellence in All Endeavors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
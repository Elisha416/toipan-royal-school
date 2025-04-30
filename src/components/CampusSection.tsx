import { Button } from "@/components/ui/button";
import { Building, BookOpen, Trees, Users, Music, Medal, ChevronRight, Crown } from "lucide-react";

const CampusSection = () => {
  return (
    <section id="campus" className="py-24 bg-gradient-to-b from-white to-royal-50">
      <div className="section-container max-w-7xl mx-auto px-6">
        {/* Elegant Header with Crown Icon */}
        <div className="text-center mb-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 flex justify-center">
            <Crown className="h-10 w-10 text-amber-500" />
          </div>
          <div className="border-b-2 border-amber-500 w-24 mx-auto mb-6"></div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-royal-800 mb-5">School Life</h2>
          <div className="border-b-2 border-amber-500 w-24 mx-auto mb-6"></div>
          <p className="text-lg text-royal-700/80 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the prestigious environment and exceptional facilities that make 
            Toipan Royal School an esteemed institution for academic excellence and personal growth.
          </p>
        </div>
        
        {/* Campus Gallery with Ornamental Frames */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg border-2 border-royal-200 h-60 md:h-80">
                <img 
                  src="/Toipan01.jpg" 
                  alt="Toipan Royal School campus garden" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg border-2 border-royal-200 h-60">
                <img 
                  src="//Toipan01.jpg" 
                  alt="Toipan Royal School dormitory" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
            
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg border-2 border-royal-200 h-60">
                <img 
                  src="//Toipan01.jpg" 
                  alt="Toipan Royal School library" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg border-2 border-royal-200 h-60 md:h-80">
                <img 
                  src="//Toipan02.jpg" 
                  alt="Toipan Royal School sports field" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
            
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-xl shadow-lg border-2 border-royal-200 h-60 md:h-80">
                <img 
                  src="//Toipan04.jpg" 
                  alt="Toipan Royal School performing arts center" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg border-2 border-royal-200 h-60">
                <img 
                  src="//Toipan03.jpg" 
                  alt="Toipan Royal School science laboratory" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-royal-700 hover:bg-royal-800 text-white px-8 py-6 rounded-md font-medium tracking-wide shadow-md transition-all duration-300 hover:shadow-lg group">
              <span>View School Gallery</span>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Facilities with Elegant Cards */}
        <div id="facilities" className="mb-24">
          <div className="text-center mb-16">
            <div className="border-b-2 border-amber-500 w-16 mx-auto mb-6"></div>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-royal-800 mb-3">Distinguished Facilities</h3>
            <div className="border-b-2 border-amber-500 w-16 mx-auto mb-6"></div>
            <p className="text-lg text-royal-700/80 max-w-3xl mx-auto font-light">
              Our world-class facilities provide an exceptional environment for learning and growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="h-10 w-10 text-amber-500" />,
                title: "State-of-the-Art Classrooms",
                description: "Equipped with advanced technology, multimedia systems, and ergonomic furnishings to create an optimal learning environment."
              },
              {
                icon: <BookOpen className="h-10 w-10 text-amber-500" />,
                title: "Upcoming Grand Library & Resource Center",
                description: "An extensive collection of literature, digital archives, and dedicated study spaces for scholarly research."
              },
              {
                icon: <Trees className="h-10 w-10 text-amber-500" />,
                title: "Advanced Laboratories",
                description: "Sophisticated physics, chemistry, and biology labs with cutting-edge equipment for hands-on scientific exploration."
              },
              {
                icon: <Users className="h-10 w-10 text-amber-500" />,
                title: "Premium Residential Quarters",
                description: "Elegantly appointed dormitories, dining halls, and recreation areas that offer comfort and community."
              },
              {
                icon: <Music className="h-10 w-10 text-amber-500" />,
                title: "Upcoming Arts & Performance Theatre",
                description: "Professional studios for visual arts, dance, music, and a magnificent 1000-seater auditorium for prestigious productions."
              },
              {
                icon: <Medal className="h-10 w-10 text-amber-500" />,
                title: "Elite Sports Facilities",
                description: "Manicured sports fields for athletic excellence."
              },
            ].map((facility, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-royal-200 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="bg-royal-50 rounded-full w-20 h-20 flex items-center justify-center mb-5 border border-amber-200 group-hover:bg-royal-100 transition-colors duration-300">
                  {facility.icon}
                </div>
                <h4 className="text-2xl font-playfair font-bold text-royal-800 mb-3">{facility.title}</h4>
                <p className="text-royal-600 leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Student Life with Elegant Layout */}
        <div id="student-life" className="bg-gradient-to-br from-royal-100 to-royal-50 rounded-2xl p-10 md:p-16 shadow-lg border border-royal-200">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="border-b-2 border-amber-500 w-16 mb-6"></div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-royal-800 mb-6">Distinguished Student Experience</h3>
              <p className="text-lg text-royal-700 mb-8 leading-relaxed">
                Life at Toipan Royal School transcends traditional academics. Our students engage in prestigious 
                programs that cultivate leadership, artistic expression, scholarly pursuits, and character development.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  "Student Governance & Leadership Academy",
                  "Elite Clubs for Sciences, Arts, Debate & Innovation",
                  "Championship Sports Teams & Athletic Development",
                  "Noble Community Service & Global Outreach",
                  "Cultural Celebrations & International Exchanges"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    <p className="text-royal-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-royal-700 hover:bg-royal-800 text-white px-8 py-6 rounded-md font-medium tracking-wide shadow-md transition-all duration-300 hover:shadow-lg group">
                <span>Discover Our Programs</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  src: "/Toipan01.jpg",
                  alt: "Students in debate club"
                },
                {
                  src: "/Toipan03.jpg",
                  alt: "Students in science club"
                },
                {
                  src: "/Toipan04.jpg",
                  alt: "Students in sports"
                },
                {
                  src: "/Toipan03.jpg",
                  alt: "Students in arts"
                }
              ].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-md border-2 border-royal-200">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
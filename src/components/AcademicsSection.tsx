import { Book, Star, FileText, Clock, Award, Medal, Trophy, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const AcademicsSection = () => {
  return (
    <section id="academics" className="py-28 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-100/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 rounded-full -mb-36 -mr-36"></div>
      <div className="absolute top-60 left-0 w-48 h-48 bg-indigo-50 rounded-full -ml-24"></div>
      
      {/* Royal seam line at top */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-32 h-px bg-gold"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-12 bg-gold"></div>
            <span className="mx-4 text-gold font-serif text-sm tracking-widest uppercase">Intellectual Pursuit</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-indigo-900 mb-6 relative inline-block">
            Academic Excellence
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gold/70"></div>
          </h2>
          
          <p className="text-xl text-indigo-800/80 max-w-3xl mx-auto font-light">
            Our distinguished curriculum and esteemed staff ensure that Toipan Royal School 
            students receive an education of unparalleled quality, preparing them for success at prestigious 
            universities and beyond.
          </p>
        </div>
        
        <Tabs defaultValue="curriculum" className="mb-20">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-indigo-100 p-1 border-2 border-gold/30">
              <TabsTrigger value="curriculum" className="px-8 py-3 data-[state=active]:bg-indigo-900 data-[state=active]:text-white data-[state=active]:shadow-lg">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="departments" className="px-8 py-3 data-[state=active]:bg-indigo-900 data-[state=active]:text-white data-[state=active]:shadow-lg">
                Departments
              </TabsTrigger>
              <TabsTrigger value="achievements" className="px-8 py-3 data-[state=active]:bg-indigo-900 data-[state=active]:text-white data-[state=active]:shadow-lg">
                Achievements
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="curriculum" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-gold/30"></div>
                
                <img 
                  src="/Toipan03.jpg" 
                  alt="Students in classroom" 
                  className="relative z-10 shadow-2xl border-4 border-white"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent py-4 text-center">
                  <div className="text-gold font-serif text-sm tracking-widest uppercase">Cultivating Intellectual Excellence</div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gold rounded-full"></div>
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-indigo-900">Distinguished Curriculum</h3>
                </div>
                
                <p className="text-lg text-indigo-800/80 leading-relaxed">
                  Our meticulously crafted curriculum is designed to provide a comprehensive education that fosters critical thinking, 
                  intellectual curiosity, and practical proficiency. We follow the National Curriculum enhanced with advanced content 
                  and perspectives to prepare our students for global leadership.
                </p>
                
                <div className="space-y-6 pt-4">
                  {[
                    { icon: <Book className="h-6 w-6 text-gold" />, text: "Core disciplines include  Mathematics, English Literature,Sciences, Humanities" },
                    { icon: <Star className="h-6 w-6 text-gold" />, text: "Specialized electives in Sciences, Computer Studies and Business Studies" },
                    { icon: <FileText className="h-6 w-6 text-gold" />, text: "Exemplary preparing students for admission to  renowned institutions" },
                    { icon: <Clock className="h-6 w-6 text-gold" />, text: "Individualized academic pathways with comprehensive mentorship and support" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-white border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <p className="text-indigo-800/80">{item.text}</p>
                    </div>
                  ))}
                </div>
                <Button className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 mt-6 rounded-none border-2 border-transparent hover:border-gold transition-all duration-300 shadow-lg">
                  Explore Full Curriculum
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="departments" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bookmark className="h-10 w-10 text-gold" />,
                  title: "Sciences",
                  description: "Our distinguished Science department offers comprehensive programs in Biology, Chemistry, Physics, and Environmental Science with state-of-the-art laboratories.",
                  
                },
                {
                  icon: <Bookmark className="h-10 w-10 text-gold" />,
                  title: "Humanities",
                  description: "Students explore classical and modern history, world literature, philosophy, and social sciences to develop profound critical thinking and cultural intelligence.",
                  
                },
                {
                  icon: <Bookmark className="h-10 w-10 text-gold" />,
                  title: "Mathematics",
                  description: "From foundational principles to advanced theoretical concepts, our curriculum develops exceptional analytical thinking and sophisticated problem-solving abilities.",
                  
                },
                {
                  icon: <Bookmark className="h-10 w-10 text-gold" />,
                  title: "Languages",
                  description: "Students achieve mastery in English and develop proficiency in additional languages, preparing them for international discourse and global leadership.",
                  
                },
                {
                  icon: <Bookmark className="h-10 w-10 text-gold" />,
                  title: "Arts & Culture",
                  description: "Artistic expression and cultural understanding are cultivated through comprehensive programs in visual arts, music, dramatic arts, and cultural heritage studies.",
                  
                },
                {
                  icon: <Bookmark className="h-10 w-10 text-gold" />,
                  title: "Technology & Innovation",
                  description: "Students develop advanced digital literacy, programming expertise, and understanding of emerging technologies to lead innovation in the digital age.",
                  
                },
              ].map((dept, index) => (
                <Card key={index} className="border border-indigo-100 hover:border-gold transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden group">
                  <CardHeader className="border-b border-indigo-100 bg-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div>{dept.icon}</div>
                      <CardTitle className="text-2xl font-playfair text-indigo-900">{dept.title}</CardTitle>
                    </div>
                    <CardDescription className="text-indigo-800/70 text-base">{dept.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 bg-gradient-to-b from-white to-indigo-50">
                    <h5 className="text-sm font-medium text-gold mb-3 uppercase tracking-wider">Core Subjects</h5>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="animate-fade-in">
            <div className="bg-white p-12 shadow-xl mb-12 border-t-4 border-gold">
              <h3 className="text-3xl font-playfair font-bold text-indigo-900 mb-10 text-center relative inline-block">
                Academic Distinctions
                <div className="absolute -bottom-3 left-0 w-24 h-1 bg-gold/70"></div>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="border-l-4 border-gold pl-6 py-2">
                    <div className="flex items-center mb-2">
                      <Trophy className="h-6 w-6 text-gold mr-2" />
                      <h4 className="text-2xl font-playfair font-bold text-indigo-900">National Examination Excellence</h4>
                    </div>
                    <p className="text-indigo-800/80 mt-2 text-lg">
                      Our students consistently achieve exemplary results in national examinations, with an impressive 95% distinction rate across all core academic disciplines.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gold pl-6 py-2">
                    <div className="flex items-center mb-2">
                      <Trophy className="h-6 w-6 text-gold mr-2" />
                      <h4 className="text-2xl font-playfair font-bold text-indigo-900"></h4>
                    </div>
                    <p className="text-indigo-800/80 mt-2 text-lg">
                      100% of our graduates secure admission to renowned universities  renowned.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gold pl-6 py-2">
                    <div className="flex items-center mb-2">
                      <Trophy className="h-6 w-6 text-gold mr-2" />
                      <h4 className="text-2xl font-playfair font-bold text-indigo-900">Academic Competitions</h4>
                    </div>
                    <p className="text-indigo-800/80 mt-2 text-lg">
                      Our students consistently earn awards in Interschools Science competitions, Mathematics Challenges, and Literary Competitions.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-gold pl-6 py-2">
                    <div className="flex items-center mb-2">
                      <Medal className="h-6 w-6 text-gold mr-2" />
                      <h4 className="text-2xl font-playfair font-bold text-indigo-900"></h4>
                    </div>
                    <p className="text-indigo-800/80 mt-2 text-lg">
                      
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gold pl-6 py-2">
                    <div className="flex items-center mb-2">
                      <Medal className="h-6 w-6 text-gold mr-2" />
                      <h4 className="text-2xl font-playfair font-bold text-indigo-900">Distinguished Research</h4>
                    </div>
                    <p className="text-indigo-800/80 mt-2 text-lg">
                      Student research projects have been published in respected academic journals and presented at national and international conferences.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-gold pl-6 py-2">
                    <div className="flex items-center mb-2">
                      <Medal className="h-6 w-6 text-gold mr-2" />
                      <h4 className="text-2xl font-playfair font-bold text-indigo-900">Institutional Recognition</h4>
                    </div>
                    <p className="text-indigo-800/80 mt-2 text-lg">
                      Toipan Royal School has is on its endavour of being recognized as one among the Top  Girls' Educational Institutions in the country.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-indigo-900 hover:bg-indigo-800 text-white px-10 py-6 rounded-none border-2 border-transparent hover:border-gold transition-all duration-300 shadow-lg">
                Explore Our Legacy of Excellence
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-indigo-900 text-white p-16 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gold"></div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold flex items-center justify-center">
                <Award className="h-8 w-8 text-gold" />
              </div>
            </div>
            
            <h3 className="text-3xl font-playfair font-bold text-white mb-8">Distinguished Staff</h3>
            
            <p className="text-xl text-white/90 mb-12 font-light leading-relaxed">
              Our esteemed staff comprises recognized experts in their respective fields, possessing advanced degrees 
              from prestigious universities and extensive teaching experience. They are dedicated to fostering each student's 
              intellectual growth, providing personalized mentorship, and inspiring excellence both within and beyond the classroom.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-12">
              {[
               
              ].map((stat, index) => (
                <div key={index} className="p-6 border border-white/20 hover:border-gold/40 transition-all duration-300">
                  <div className="text-4xl font-playfair font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button className="bg-white hover:bg-gold text-indigo-900 hover:text-indigo-900 px-10 py-6 rounded-none border-2 border-transparent hover:border-white transition-all duration-300 shadow-lg">
              Meet Our Distinguished Staff
            </Button>
          </div>
        </div>
        
        {/* Royal seal at bottom */}
        <div className="flex justify-center mt-16">
          <div className="text-center">
            <div className="w-16 h-1 bg-gold/60 mb-2 mx-auto"></div>
            <div className="font-serif text-indigo-900/60 text-xs tracking-widest uppercase">Veritas • Virtus • Victoria</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
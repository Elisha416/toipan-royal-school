import { 
  Calendar, 
  ClipboardList, 
  FileText, 
  Users, 
  CheckCircle, 
  Crown,
  Star,
  Phone,
  Mail,
  Clock,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface FAQ {
  question: string;
  answer: string;
}

const AdmissionsSection = () => {
  

  const faqs: FAQ[] = [
    {
      question: "What are the admission requirements?",
      answer: "Admissions requirements include academic records from previous schools, entrance examination scores, interview performance, and character references. We look for students who demonstrate academic potential, leadership qualities, and alignment with our school values."
    },
   
    
    {
      question: "What is the tuition fee structure?",
      answer: "Tuition fees vary by grade level and boarding/day student status. The comprehensive fee includes academic program, most extracurricular activities, and basic supplies. A detailed fee structure is provided to all applicants and is available upon request."
    },
    
  ];

  return (
    <section id="admissions" className="py-24 bg-gradient-to-b from-royal-100 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-royal-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      
      {/* Gold accents */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-amber-400 rounded-full shadow-lg"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-amber-400 rounded-full shadow-lg"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-amber-400 rounded-full shadow-lg"></div>
      
      <div className="section-container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="flex justify-center mb-4">
            <Crown className="h-10 w-10 text-amber-500" />
          </div>
          <h2 className="text-5xl font-playfair font-bold text-royal-800 mb-6 tracking-tight">
            <span className="relative inline-block">
              Admissions
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Join our prestigious community of exceptional young girls. Discover the pathway to a 
            <span className="italic"> truly extraordinary </span> 
            educational experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-playfair font-bold text-royal-700 mb-8">Begin Your Journey at Toipan Royal</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We seek motivated young girls who are eager to learn, lead, and contribute to our distinguished community. 
              Our meticulous admissions process identifies students who will flourish in our challenging 
              academic environment and benefit from our holistic educational philosophy.
            </p>
            <div className="space-y-8 mb-10">
              <div className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-md border-l-4 border-royal-600 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-royal-500 to-royal-700 p-3 rounded-full shadow-md">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-xl text-royal-800">Applications Open</h4>
                  <p className="text-gray-600">November 1 - March 31</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-md border-l-4 border-royal-600 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-royal-500 to-royal-700 p-3 rounded-full shadow-md">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-xl text-royal-800">Entrance Exams</h4>
                  <p className="text-gray-600">January - April (Monthly)</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-md border-l-4 border-royal-600 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-royal-500 to-royal-700 p-3 rounded-full shadow-md">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-xl text-royal-800">Open House Events</h4>
                  <p className="text-gray-600">October, January, and April</p>
                </div>
              </div>
            </div>
            <div className="space-x-4">
              <Button className="bg-gradient-to-r from-royal-600 to-royal-800 hover:from-royal-700 hover:to-royal-900 text-white py-6 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Apply Now
              </Button>
              <Button variant="outline" className="border-2 border-royal-600 text-royal-600 hover:bg-royal-50 py-6 px-8 text-lg font-semibold">
                Download Prospectus
              </Button>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-royal-900/40 to-royal-900/10 z-10"></div>
            <div className="absolute top-6 right-6 bg-amber-400 text-royal-900 py-2 px-4 rounded-full font-semibold shadow-lg z-20 flex items-center gap-2">
              <Star className="h-5 w-5" /> Excellence Awaits
            </div>
            <img 
              src="Toipan01.jpg" 
              alt="Toipan Royal School Students" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        
        
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-gradient-to-br from-royal-50 to-white rounded-2xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-400 via-royal-600 to-royal-400"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal-100 rounded-full opacity-50"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-amber-500" />
              <h3 className="text-2xl font-playfair font-bold text-royal-800">Frequently Asked Questions</h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full relative z-10">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-royal-200 py-2">
                  <AccordionTrigger className="text-left font-playfair font-semibold text-lg text-royal-700 hover:text-royal-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed text-base pl-4 border-l-2 border-royal-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-gradient-to-br from-royal-700 to-royal-900 text-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-royal-600 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-royal-800 rounded-full opacity-70"></div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <Crown className="h-6 w-6 text-amber-400" />
              <h3 className="text-2xl font-playfair font-bold text-white">Contact Admissions</h3>
            </div>
            
            <p className="mb-8 text-royal-50 leading-relaxed text-lg relative z-10">
              Have questions about the admissions process? Our dedicated admissions team is here to provide personalized guidance. 
              Reach out to us by phone, email, or schedule a private tour of our prestigious campus.
            </p>
            
            <div className="space-y-6 mb-10 relative z-10">
              <div className="flex items-center gap-4 bg-royal-800/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="bg-royal-600 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-royal-100 text-sm">Telephone</p>
                  <p className="text-white font-medium"></p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-royal-800/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="bg-royal-600 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-royal-100 text-sm">Email Address</p>
                  <p className="text-white font-medium">admissions@toipanroyal.edu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-royal-800/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="bg-royal-600 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-royal-100 text-sm">Office Hours</p>
                  <p className="text-white font-medium">Monday-Friday, 8:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-royal-900 w-full py-6 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
              Schedule a Private Tour <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
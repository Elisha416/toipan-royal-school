import { CalendarIcon, Clock, ArrowRight, Crown, Star, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
}

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState("news");
  
 

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Open House for Prospective Students",
      date: "May 20, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Assembly Grounds"
    },
    {
      id: 2,
      title: "Annual Sports Day",
      date: "June 5, 2023",
      time: "8:30 AM - 4:00 PM",
      location: "School Field"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "June 15-16, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "School Hall"
    },
    {
      id: 4,
      title: "End of Year Talent Showcase",
      date: "July 10, 2023",
      time: "8:00 AM - 12:30 PM",
      location: "School Hall"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-royal-100 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-royal-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      
      {/* Gold accents */}
      <div className="absolute top-40 left-20 w-6 h-6 bg-amber-400 rounded-full shadow-lg"></div>
      <div className="absolute top-60 right-40 w-4 h-4 bg-amber-400 rounded-full shadow-lg"></div>
      <div className="absolute bottom-20 left-40 w-5 h-5 bg-amber-400 rounded-full shadow-lg"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Royal crown icon */}
        <div className="flex justify-center mb-6">
          <Crown className="h-10 w-10 text-amber-500" />
        </div>
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-playfair font-bold text-royal-800 mb-6 tracking-tight">
            <span className="relative inline-block">
              News & Events
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Stay informed about the prestigious happenings at Toipan Royal School, from academic triumphs 
            to exclusive events and distinguished activities.
          </p>
        </div>
        
        {/* Tab navigation with royal styling */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-white rounded-xl shadow-lg border border-gray-100">
            <button 
              onClick={() => setActiveTab("news")}
              className={`px-10 py-4 text-lg rounded-lg transition-all duration-300 ${
                activeTab === "news" 
                ? "bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-lg font-medium" 
                : "bg-transparent text-royal-700 hover:bg-royal-50"
              }`}
            >
              News
            </button>
            <button 
              onClick={() => setActiveTab("events")}
              className={`px-10 py-4 text-lg rounded-lg transition-all duration-300 ${
                activeTab === "events" 
                ? "bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-lg font-medium" 
                : "bg-transparent text-royal-700 hover:bg-royal-50"
              }`}
            >
              Distinguished Events
            </button>
          </div>
        </div>
        
        {/* News Tab */}
        
            
           
        
        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-400 via-royal-600 to-royal-400"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-royal-50 rounded-full opacity-50"></div>
            
            <div className="flex items-center justify-center gap-3 mb-12">
              <Star className="h-6 w-6 text-amber-500" />
              <h3 className="text-3xl font-playfair font-bold text-royal-800 relative">
                <span className="relative">
                  Distinguished Events
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
                </span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="flex bg-gradient-to-r from-royal-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-50 group"
                >
                  <div className="mr-6 bg-white p-4 rounded-xl shadow-md text-center min-w-24 flex flex-col justify-center border border-royal-100">
                    <div className="text-xs text-royal-500 uppercase font-medium">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="text-3xl font-playfair font-bold text-royal-700 my-1">
                      {event.date.split(' ')[1].replace(',', '')}
                    </div>
                    <div className="text-xs text-royal-500 uppercase font-medium">
                      {event.date.split(' ')[2]}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-royal-800 font-playfair mb-2">{event.title}</h4>
                    <div className="text-sm text-royal-600 flex items-center mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="text-sm text-royal-700 mt-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-royal-500" />
                      <span className="bg-white inline-block px-3 py-1 rounded-lg shadow-sm border border-royal-100">
                        {event.location}
                      </span>
                    </div>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" className="text-royal-600 hover:text-royal-800 p-0 text-sm flex items-center">
                        View Details <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 relative z-10">
              <Button variant="outline" className="border-2 border-royal-600 text-royal-600 hover:bg-royal-50 px-10 py-6 rounded-xl font-medium text-lg transition-all duration-300">
                View Full Royal Calendar
              </Button>
            </div>
          </div>
        )}
        
        {/* Decorative crown element at bottom */}
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-3"></div>
          <Crown className="h-6 w-6 text-royal-500" />
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
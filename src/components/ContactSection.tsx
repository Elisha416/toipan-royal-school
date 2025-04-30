import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Star, ChevronRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us. We'll respond shortly.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-royal-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-amber-400 rounded-full"></div>
          </div>
          <h2 className="text-5xl font-serif font-bold text-royal-800 mb-6">Contact <span className="italic text-royal-600">Toipan Royal</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're privileged to answer your inquiries about Toipan Royal School.
            Please reach out through any of our communication channels or arrange a visit to our prestigious school.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-royal-50 to-royal-100 rounded-2xl p-10 border border-royal-200 shadow-xl">
              <h3 className="text-3xl font-serif text-royal-700 mb-8 flex items-center">
                <Star className="h-6 w-6 text-amber-400 mr-3" />
                <span>Distinguished Contacts</span>
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-5 bg-white p-4 rounded-xl shadow-md border border-royal-200">
                    <MapPin className="h-8 w-8 text-royal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-royal-700 mb-1"> Address</h4>
                    <p className="text-lg text-gray-600 leading-relaxed"><br /></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-5 bg-white p-4 rounded-xl shadow-md border border-royal-200">
                    <Phone className="h-8 w-8 text-royal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-royal-700 mb-1">Direct Lines</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">Main Office:<br />Admissions:</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-5 bg-white p-4 rounded-xl shadow-md border border-royal-200">
                    <Mail className="h-8 w-8 text-royal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-royal-700 mb-1">Email Correspondence</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">info@toipanroyal.edu<br />admissions@toipanroyal.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-5 bg-white p-4 rounded-xl shadow-md border border-royal-200">
                    <Clock className="h-8 w-8 text-royal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-royal-700 mb-1">Hours of Service</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">Monday - Friday: 8:00 AM - 4:30 PM<br />Saturday: 9:00 AM - 12:00 PM (Admissions Only)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-80 shadow-xl border-4 border-royal-200">
              {/* This would be replaced with an actual map in a real implementation */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-royal-600" />
                <span className="ml-3 text-2xl text-royal-700 font-serif font-medium"></span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-royal-700 to-royal-900 text-white rounded-2xl p-10 shadow-2xl border border-royal-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-royal-500 rounded-full -mr-32 -mt-32 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-royal-500 rounded-full -ml-24 -mb-24 opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-2">Send a Personal Message</h3>
              <p className="text-royal-100 mb-8">We value your communication and will respond with utmost priority</p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-lg font-medium text-royal-100">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Your distinguished name"
                      className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 h-12 rounded-xl px-4"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-lg font-medium text-royal-100">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 h-12 rounded-xl px-4"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-lg font-medium text-royal-100">Telephone</label>
                    <input
                      id="phone"
                      name="phone"
                      placeholder="Your telephone number"
                      className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 h-12 rounded-xl px-4"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-lg font-medium text-royal-100">Subject Matter</label>
                    <input
                      id="subject"
                      name="subject"
                      placeholder="Topic of inquiry"
                      className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 h-12 rounded-xl px-4"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-medium text-royal-100">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please detail your inquiry here..."
                    className="w-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 min-h-40 rounded-xl p-4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-royal-900 font-medium text-lg py-6 px-8 rounded-xl w-full flex justify-center items-center group transition-all duration-300 shadow-lg"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:animate-pulse" /> 
                  Send Correspondence
                  <ChevronRight className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-royal-300"></div>
            <div className="mx-4">
              <Star className="h-6 w-6 text-amber-400" />
            </div>
            <div className="h-px w-12 bg-royal-300"></div>
          </div>
          <p className="text-lg text-royal-600 font-serif italic">
            "Excellence in education, elegance in communication"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
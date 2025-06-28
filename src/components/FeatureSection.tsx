
import { motion } from 'framer-motion';
import { Calendar, FileText, MessageSquare, Activity } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Book Appointments",
      description: "Schedule appointments with your healthcare providers quickly and efficiently with our streamlined booking system.",
      color: "from-blue-500/20 to-indigo-500/20 dark:from-blue-400/30 dark:to-indigo-400/30"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Manage Health Records",
      description: "Securely store, access, and manage your medical history, reports, and important health documents anytime.",
      color: "from-green-500/20 to-emerald-500/20 dark:from-green-400/30 dark:to-emerald-400/30"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "SMS Reminders",
      description: "Never miss an appointment with automatic SMS notifications and personalized health reminders.",
      color: "from-purple-500/20 to-violet-500/20 dark:from-purple-400/30 dark:to-violet-400/30"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Track Medical History",
      description: "Monitor your health journey with comprehensive tracking of treatments, medications, and progress.",
      color: "from-pink-500/20 to-rose-500/20 dark:from-pink-400/30 dark:to-rose-400/30"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-black dark:via-gray-900/50 dark:to-black backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose MedVault?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience healthcare management like never before with our comprehensive platform designed for both patients and healthcare providers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-white/10 overflow-hidden hover:bg-white/20 dark:hover:bg-white/10"
            >
              {/* Glassmorphism background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 dark:from-gray-700/20 dark:to-gray-900/5 backdrop-blur-sm"></div>
              
              {/* Icon Container with gradient background */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/20 dark:border-white/10`}>
                <div className="text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

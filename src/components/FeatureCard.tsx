
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  index: number;
}

const FeatureCard = ({ title, description, icon, color, index }: FeatureCardProps) => {
  return (
    <div 
      className={`group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Icon Container */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-3xl">{icon}</span>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
      {/* Hover Effect Line */}
      <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6 group-hover:w-full transition-all duration-500 rounded-full"></div>
    </div>
  );
};

export default FeatureCard;

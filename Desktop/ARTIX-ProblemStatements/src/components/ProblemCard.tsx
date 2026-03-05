import { Sparkles, Users, ArrowRight, Eye } from 'lucide-react';

interface ProblemCardProps {
  id: number;
  domain: string;
  title: string;
  description: string;
  skills: string;
  isInternship: boolean;
  onClick?: () => void;
  darkMode?: boolean;
}

export function ProblemCard({ id, domain, title, description, skills, isInternship, onClick, darkMode = false }: ProblemCardProps) {
  return (
    <div 
      className={`group relative rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border hover-lift cursor-pointer ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-600' : 'bg-white border-gray-100 hover:border-blue-200'}`}
      onClick={onClick}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode ? 'bg-gradient-to-br from-blue-900 via-transparent to-green-900' : 'bg-gradient-to-br from-blue-50 via-transparent to-green-50'}`} />
      
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="relative p-6">
        {/* Header with ID and Internship badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
              {id}
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          {isInternship && (
            <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg animate-glow">
              <Sparkles className="w-3 h-3" />
              Internship
            </div>
          )}
        </div>

        {/* Domain tag */}
        <div className="mb-4">
          <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full group-hover:border-blue-300 transition-all duration-300 border ${darkMode ? 'bg-gray-700 text-gray-200 group-hover:bg-blue-900 group-hover:text-blue-200 border-gray-600' : 'bg-gray-100 text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-700 border-gray-200'}`}>
            {domain}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>

        {/* Skills section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            <span className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Skills Required</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(typeof skills === 'string' ? skills : Array.isArray(skills) ? skills.join(', ') : '').split(',').slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-md font-medium border ${darkMode ? 'bg-blue-900 text-blue-200 border-blue-800' : 'bg-blue-50 text-blue-700 border-blue-100'}`}
              >
                {skill.trim()}
              </span>
            ))}
            {(typeof skills === 'string' ? skills : Array.isArray(skills) ? skills.join(', ') : '').split(',').length > 3 && (
              <span className={`px-2 py-1 text-xs rounded-md font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                +{(typeof skills === 'string' ? skills : Array.isArray(skills) ? skills.join(', ') : '').split(',').length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer with action */}
        <div className={`pt-4 border-t transition-colors duration-300 ${darkMode ? 'border-gray-700 group-hover:border-gray-600' : 'border-gray-100 group-hover:border-gray-200'}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className={`flex items-center gap-3 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Innovation Challenge</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>Team of 3</span>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClick?.();
              }}
              className={`md:hidden px-4 py-2 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 w-full ${darkMode ? 'bg-blue-700 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
            <button className={`hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-lg ${darkMode ? 'bg-blue-900 hover:bg-blue-800 text-blue-400' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'}`}>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

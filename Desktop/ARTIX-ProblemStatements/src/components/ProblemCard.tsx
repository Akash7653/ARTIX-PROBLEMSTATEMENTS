import { Sparkles, Users, ArrowRight, Eye } from 'lucide-react';

interface ProblemCardProps {
  id: number;
  domain: string;
  title: string;
  description: string;
  skills: string;
  isInternship: boolean;
  onClick?: () => void;
}

export function ProblemCard({ id, domain, title, description, skills, isInternship, onClick }: ProblemCardProps) {
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover-lift cursor-pointer"
      onClick={onClick}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
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
          <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300 border border-gray-200 group-hover:border-blue-300">
            {domain}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Skills section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Skills Required</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(typeof skills === 'string' ? skills : Array.isArray(skills) ? skills.join(', ') : '').split(',').slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium border border-blue-100"
              >
                {skill.trim()}
              </span>
            ))}
            {(typeof skills === 'string' ? skills : Array.isArray(skills) ? skills.join(', ') : '').split(',').length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                +{(typeof skills === 'string' ? skills : Array.isArray(skills) ? skills.join(', ') : '').split(',').length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Footer with action */}
        <div className="pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-gray-500">
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
              className="md:hidden px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 w-full"
            >
              <Eye className="w-4 h-4" />
              View Details
            </button>
            <button className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

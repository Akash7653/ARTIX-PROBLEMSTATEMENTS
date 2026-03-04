import { X, Clock, Users, Target, Code, Award, CheckCircle } from 'lucide-react';

interface ProblemModalProps {
  problem: {
    id: number;
    title: string;
    domain: string;
    briefDescription: string;
    requiredTechStack: string[];
    skillsRequired: string[];
    keyObjectives: string[];
    requirements: string[];
    deliverables: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProblemModal({ problem, isOpen, onClose }: ProblemModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative w-full sm:max-w-4xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-scaleIn">
          {/* Header */}
          <div className="relative h-24 sm:h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative h-full flex items-center justify-between px-4 sm:px-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    #{problem.id}
                  </div>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full line-clamp-1">
                    {problem.domain}
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white line-clamp-2 sm:line-clamp-none">{problem.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="ml-2 w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-8 py-6 sm:py-8 overflow-y-auto max-h-[calc(95vh-6rem)] sm:max-h-[calc(90vh-8rem)]">
            {/* Brief Description */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                <Target className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                Brief Description
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{problem.briefDescription}</p>
            </div>

            {/* Required Tech Stack */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                <Code className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
                Required Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {problem.requiredTechStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 sm:py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-lg font-medium text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Required */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                <Award className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                Skills Required
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {problem.skillsRequired.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 sm:py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg font-medium text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Objectives */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                <Target className="w-4 sm:w-5 h-4 sm:h-5 text-orange-600" />
                Key Objectives
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {problem.keyObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-base text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Requirements</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {problem.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-xs sm:text-base text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Deliverables</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {problem.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-xs sm:text-base text-gray-600">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Info */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>24h Challenge</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Team of 3</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Send, Loader2 } from 'lucide-react';
import { FormData } from './types';

interface FormStep2Props {
  formData: FormData;
  onFormChange: (formData: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  visible: boolean;
  isSubmitting: boolean;
}

const FormStep2 = ({ formData, onFormChange, onSubmit, visible, isSubmitting }: FormStep2Props) => {
  return (
    <div 
      className={`transition-all duration-500 transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <form onSubmit={onSubmit} className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-lg">
        <div>
          <label htmlFor="firstName" className="block text-blue-400 mb-2">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 focus:border-purple-400 text-white outline-none disabled:opacity-50"
            value={formData.firstName}
            onChange={(e) => onFormChange({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-blue-400 mb-2">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 focus:border-purple-400 text-white outline-none disabled:opacity-50"
            value={formData.lastName}
            onChange={(e) => onFormChange({ ...formData, lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-blue-400 mb-2">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 focus:border-purple-400 text-white outline-none disabled:opacity-50"
            value={formData.email}
            onChange={(e) => onFormChange({ ...formData, email: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
          {isSubmitting ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Send size={20} />
          )}
        </button>
      </form>
    </div>
  );
};

export default FormStep2;
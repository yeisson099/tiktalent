import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface RegistrationFormProps {
  onShowForm: () => void;
}

const RegistrationForm = ({ onShowForm }: RegistrationFormProps) => {
  const [showForm, setShowForm] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    debugger
    setSubmitted(true);
  };

  const handleYesClick = () => {
    setShowForm(true);
    setTimeout(() => {
      onShowForm();
    }, 50);
    setTimeout(() => {
      setFormVisible(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-purple-400 mb-4">¡Gracias por registrarte!</h3>
        <p className="text-white">Te enviaremos más información pronto.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {!showForm ? (
        <div className="text-center">
          <h3 className="text-blue-500 text-xl mb-6">¿Quieres asistir al evento?</h3>
          <div className="space-x-4">
            <button
              onClick={handleYesClick}
              className="px-8 py-3 bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              SÍ
            </button>
            <button 
              className="px-8 py-3 bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              NO
            </button>
          </div>
        </div>
      ) : (
        <div 
          className={`transition-all duration-500 transform ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-lg">
            <div>
              <label htmlFor="firstName" className="block text-blue-400 mb-2">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 focus:border-purple-400 text-white outline-none"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 focus:border-purple-400 text-white outline-none"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 focus:border-purple-400 text-white outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <span>Submit</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
import React from 'react';

interface FormStep1Props {
  onYesClick: () => void;
}

const FormStep1 = ({ onYesClick }: FormStep1Props) => {
  return (
    <div className="text-center">
      <h3 className="text-blue-500 text-xl mb-6">¿Quieres asistir al evento?</h3>
      <div className="space-x-4">
        <button
          onClick={onYesClick}
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
  );
};

export default FormStep1;
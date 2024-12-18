import React from 'react';

const SuccessMessage = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-purple-400 mb-4">¡Gracias por registrarte!</h3>
      <p className="text-white">Te enviaremos más información pronto.</p>
    </div>
  );
};

export default SuccessMessage;
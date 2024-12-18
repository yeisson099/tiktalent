import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import SuccessMessage from './SuccessMessage';
import { FormData } from './types';
import { submitRegistration } from '../../services/registration';

interface RegistrationFormProps {
  onShowForm: () => void;
}

const RegistrationForm = ({ onShowForm }: RegistrationFormProps) => {
  const [showForm, setShowForm] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    debugger
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitRegistration(formData);
      
      if (result.success) {
        setSubmitted(true);
        toast.success('Registration successful!');
      } else {
        toast.error('Failed to submit registration. Please try again.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleYesClick = () => {
    console.log('dadasdadsa')
    setShowForm(true);
    setTimeout(() => {
      onShowForm();
    }, 50);
    setTimeout(() => {
      setFormVisible(true);
    }, 100);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Toaster position="top-center" />
      {!showForm ? (
        <FormStep1 onYesClick={handleYesClick} />
      ) : (
        <FormStep2 
          formData={formData}
          onFormChange={setFormData}
          onSubmit={handleSubmit}
          visible={formVisible}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
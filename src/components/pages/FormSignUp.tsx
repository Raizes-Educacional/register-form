import '../../styles/global.css';
import { StepsFormContent } from '../organisms/signup/form/MultiStepsForm';
import { Footer } from '../templates/shared/Footer';
import { Header } from '../templates/shared/Header';

export function FormSignUp() {
  return (
    <>
      <Header />
      <StepsFormContent />
      <Footer />
    </>
  );
};
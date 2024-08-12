import { Button, message, Steps } from 'antd';
import { useState } from 'react';
import '../../../../styles/global.css';
import HomeStep from "./HomeStep";
import ResponsibleStep from "./ResponsibleStep";
import StudentStep from "./StudentStep";

export function StepsFormContent() {

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [student, setStudent] = useState();
  const [responsible, setResponsible] = useState();
  
  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  };

  const next = () => goToStep(currentStepIndex + 1);
  const prev = () => goToStep(currentStepIndex - 1);

  const steps = [
    {
      title: 'Início',
      children: HomeStep(),
      onClick: () => goToStep(0)
    },
    {
      title: 'Aluno',
      children: StudentStep(setStudent),
      onClick: () => goToStep(1)
    },
    {
      title: 'Responsável',
      children: ResponsibleStep(setResponsible),
      onClick: () => goToStep(2)
    },
  ];

  const handleRenderStepContent = () => {
    return steps[currentStepIndex].children;
  };

  return (
    <main className='py-16 px-4 w-max-screen flex flex-col gap-8 items-center text-base'>
      <div className='w-full md:max-w-4xl'>
        <Steps current={currentStepIndex} items={steps.map(step => ({...step, click: step.onClick}))} className='cursor-pointer'/>
      </div>
      <section>
        {handleRenderStepContent()}
      </section>
      <div className='flex flex-col md:flex-row-reverse gap-6'>
        {currentStepIndex < steps.length -1 && (
          <Button htmlType='button' type='primary' className='w-36 h-12 bg-primary-100 text-achromatic-100 border-none' onClick={() => next()}>
            Continuar
          </Button>
        )}
        {currentStepIndex === steps.length -1 && (
          <Button htmlType='submit' type='primary' className='w-36 h-12 bg-primary-100 text-achromatic-100 border-none' onClick={() => message.success('Matrícula Confirmada!')}>
            Enviar
          </Button>
        )}
        {currentStepIndex > 0 && (
          <Button htmlType='button' className='w-36 h-12 bg-achromatic-100 text-primary-100 border-primary-100' onClick={() => prev()}>
            Voltar
          </Button>
        )}
      </div>
    </main>
  );
};

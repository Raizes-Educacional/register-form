import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { responsibleSchema, ResponsibleSchemaData } from '../../../../utils/responsibleSchema';
import { CheckboxInput } from '../../../atoms/signup/form/CheckboxInput';
import { Field } from '../../../molecules/signup/form/Field';
import { RadioField } from '../../../molecules/signup/form/RadioField';
import { UploadFileField } from '../../../molecules/signup/form/UploadFileField';

export default function ResponsibleStep(setResponsible: Function) {
  
  const responsibleFormData = useForm<ResponsibleSchemaData>({ 
    resolver: zodResolver(responsibleSchema) 
  });

  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = responsibleFormData;

  const handleRegisterResponsible = (data: ResponsibleSchemaData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterResponsible)} className="w-max-screen flex flex-col items-center justify-center text-base">
      <fieldset className='m-auto flex flex-col items-center gap-12'>
        <div>
          <legend>Dados pessoais</legend>

          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field 
              label='Nome Completo'
              type='text'
              placeholder='Digite o nome completo'
              {...register('personalDataResponsible.fullName', { required: true })}
              fieldErrorMessage={errors.personalDataResponsible?.fullName?.message}
            />
            <Field
              label='Email'
              type='email'
              placeholder='Digite o email'
              {...register('personalDataResponsible.email', { required: true })}
              fieldErrorMessage={errors.personalDataResponsible?.email?.message}
            />
          </div>

          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field 
              label='RG'
              type='text'
              placeholder='Digite o número do RG'
              {...register('personalDataResponsible.identificationCard', { required: true })}
              fieldErrorMessage={errors.personalDataResponsible?.identificationCard?.message}
            />

            <UploadFileField 
              label='Anexe uma foto do seu RG'
              title='Selecione o arquivo'
              {...register('personalDataResponsible.photoIdentificationCard', { required: true })}
              // fieldErrorMessage={errors.personalDataResponsible?.photoIdentificationCard?.message}
            />
          </div>
          
          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field
              label='Celular'
              type='tel'
              placeholder='Digite o celular (de preferencia WhatsApp)'
              {...register('personalDataResponsible.cellPhone', { required: true })}
              fieldErrorMessage={errors.personalDataResponsible?.cellPhone?.message}
            />

            <Field
              label='Telefone'
              type='tel'
              placeholder='Caso haja, digite outro telefone'
              {...register('personalDataResponsible.phone', { required: false })}
              fieldErrorMessage={errors.personalDataResponsible?.phone?.message}
            />
          </div>

        </div>

        <div className='w-full'>
          <legend>Termos de responsabilidade e autorização</legend>

          <div className='mt-4 md:max-w-2xl flex flex-col gap-8'>
            <RadioField
              label='Você tem formas de garantir que o menor sob sua responsabilidade realize o trajeto de ida e vinda até E.E. Otto Weiszflog com segurança?'
              {...register('termsAndConditionsPolicy.securityTransport', { required: true })}
            />

            <RadioField
              label='Você se responsabiliza pela segurança do menor sob sua responsabilidade no trajeto de ida e vinda ao Raízes?'
              {...register('termsAndConditionsPolicy.responsibilityForTransport', { required: true })}
            />

            <CheckboxInput
              label='Estou ciente que serei responsável pela alimentação do menor sob minha responsabilidade enquanto este estiver em período letivo do Raízes.'
              {...register('termsAndConditionsPolicy.acceptedFeeding', { required: true })}
            />
            
            <CheckboxInput
              label='Eu autorizo o uso de minha imagem e do menor sob minha responsabilidade em fotos ou vídeos, sem finalidade comercial, para ser utilizada pelo Raízes. A presente autorização é concedida a título gratuito, abrangendo o uso da imagem acima mencionada em todo território nacional e no exterior, em todas as suas modalidades.'
              {...register('termsAndConditionsPolicy.acceptedTerms', { required: true })}
            />
            
          </div>
        </div>
      </fieldset>
    </form>
  );
};

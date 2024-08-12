import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// import { handleGetAddressData } from '../../../../services/SearchAddress';
import { studentSchema, StudentSchemaData } from '../../../../utils/studentSchema';
import { Field } from '../../../molecules/signup/form/Field';
import { RadioField } from '../../../molecules/signup/form/RadioField';
import { SelectDropList } from '../../../molecules/signup/form/SelectField';

export default function StudentStep(setStudent: Function) {

  const getYear = new Date().getFullYear();

  const studentFormData = useForm<StudentSchemaData>({ resolver: zodResolver(studentSchema) });

  const { 
    register,
    handleSubmit,
    formState: { errors } 
  } = studentFormData;

  const handleRegisterStudent = (data: StudentSchemaData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterStudent)} className="w-max-screen flex flex-col items-center justify-center text-base">
      <fieldset className='m-auto flex flex-col items-center justify-center gap-12'>
        <div>
          <legend>Dados pessoais</legend>
          
          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field 
              label='Nome Completo'
              type='text'
              placeholder='Digite o nome completo'
              {...register('personalDataStudent.fullName', { required: true })}
              fieldErrorMessage={errors.personalDataStudent?.fullName?.message}
            />

            <Field 
              label='Idade'
              type='text'
              placeholder='Digite a idade'
              {...register('personalDataStudent.age', { required: true })}
              fieldErrorMessage={errors.personalDataStudent?.age?.message}
            />
          </div>
          
          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field
              label='Email'
              type='email'
              placeholder='Digite o email'
              {...register('personalDataStudent.email', { required: true })}
              fieldErrorMessage={errors.personalDataStudent?.email?.message}
            />

            <Field
              label='Telefone'
              type='tel'
              placeholder='Digite o celular (de preferencia WhatsApp)'
              {...register('personalDataStudent.cellPhone', { required: true })}
              fieldErrorMessage={errors.personalDataStudent?.cellPhone?.message}
            />
          </div>
        </div>

        <div>
          <legend>Endereço</legend>

          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field 
              label='CEP'
              type='text'
              placeholder='Digite o CEP'
              {...register('address.postalCode', { required: true })}
              fieldErrorMessage={errors.address?.postalCode?.message}
            />

            <Field 
              label='Cidade'
              type='text'
              placeholder='Digite a Cidade'
              {...register('address.city', { required: true })}
              fieldErrorMessage={errors.address?.city?.message}
            />

          </div>

          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field 
              label='Bairro'
              type='text'
              placeholder='Digite o Bairro'
              {...register('address.neighborhood', { required: true })}
              fieldErrorMessage={errors.address?.neighborhood?.message}
            />

            <Field 
              label='Endereço'
              type='text'
              placeholder='Digite o Endereço' 
              {...register('address.street', { required: true })}
              fieldErrorMessage={errors.address?.street?.message}
            />
          </div>

          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field 
              label='Número (N°)'
              type='text'
              placeholder='Digite o número do endereço'
              {...register('address.streetNumber', { required: true })}
              fieldErrorMessage={errors.address?.streetNumber?.message}
            />

            <Field 
              label='Complemento'
              type='text'
              placeholder='Digite o complemento do endereço'
              {...register('address.streetComplement', { required: false })}
              fieldErrorMessage={errors.address?.streetComplement?.message}
            />
          </div>
        </div>

        <div>
          <legend>Dados escolares</legend>

          <div className='md:flex md:flex-row md:flex-nowrap md:gap-8'>
            <Field
              label='Escola' 
              type='text'
              placeholder='Digite o nome da escola'
              {...register('schoolData.schoolName', { required: true })}
              fieldErrorMessage={errors.schoolData?.schoolName?.message}
            />

            <SelectDropList
              label={`Qual ano/série o aluno cursará em ${getYear}?`}
              {...register('schoolData.middleSchool', { required: true })}
              options={[
                { value: 'selecione', label: 'Selecione' },
                { value: '5° ano', label: '5° ano' },
                { value: '6° ano', label: '6° ano' },
                { value: '7° ano', label: '7° ano' },
                { value: '8° ano', label: '8° ano' },
                { value: '9° ano', label: '9° ano' }
              ]}
            />
          </div>
        </div>

        <div className='w-full'>
          <legend>Acessibilidade, Disponibilidade e Referências</legend>

          <div className='md:max-w-2xl flex flex-col gap-8'>
            <SelectDropList
              label={'Por onde ficou sabendo do Raízes?'}
              {...register('origin', { required: true })}
              options={[
                { value: 'selecione', label: 'Selecione' },
                { value: 'whatsapp', label: 'Grupos de Whatsapp' },
                { value: 'instagram', label: 'Divulgação pelo Instagram' },
                { value: 'facebook', label: 'Divulgação pelo Facebook' },
                { value: 'recommendation', label: 'Indicação de amigos/familiares' },
                { value: 'disclosure', label: 'Divulgação em reunião escolar' }
              ]}
            />

            <RadioField
              label='O aluno possui alguma necessidade de acessibilidade devido a uma deficiência ou condição?'
              {...register('accessibility', { required: true })}
            />

            <RadioField
              label='O aluno terá horário livre aos sábados das 08 horas às 13 horas?'
              {...register('timeAvailability', { required: true })}
            /> 
            
          </div>
        </div>
      </fieldset>
    </form>
  );
};

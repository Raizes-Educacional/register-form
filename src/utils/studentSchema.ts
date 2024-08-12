import { z } from "zod";

export const studentSchema = z.object({
  personalDataStudent: z.object({
    fullName: z.string()
      .min(1, 'Nome completo é obrigatório')
      .max(80, 'O nome completo deve ter no máximo 80 caracteres')
      .transform(fullName => {
        return fullName
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    age: z.number()
      .min(1, 'Idade é obrigatória')
      .positive()
      .int(),
    email: z.string()
      .min(1, 'Endereço de email é obrigatório')
      .email('Endereço de email inválido'),
    cellPhone: z.string()
      .min(1, 'Número do celular é obrigatório')
      .max(11, 'O número do celular deve ter no máximo 11 dígitos, incluindo o DDD')
      .trim()
      .regex(/^\d{11}$/, 'Número do celular inválido'),
  }),
  address: z.object({
    postalCode: z.string()
      .min(1, 'CEP é obrigatório')
      .trim()
      .regex(/^\d{8}$/, 'CEP inválido, deve ter 8 dígitos (sem pontos ou traços)'),
    city: z.string()
      .min(1, 'Cidade é obrigatória')
      .max(50, 'A Cidade deve ter no máximo 50 caracteres')
      .transform(city => {
        return city
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    neighborhood: z.string()
      .min(1, 'Bairro é obrigatório')
      .max(50, 'O Bairro deve ter no máximo 50 caracteres')
      .transform(neighborhood => {
        return neighborhood
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    street: z.string()
      .min(1, 'Endereço é obrigatório')
      .max(50, 'O Endereço deve ter no máximo 50 caracteres')
      .transform(street => {
        return street
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    streetNumber: z.string()
      .min(1, 'O número do endereço é obrigatório')
      .max(5, 'O número do endereço deve ter no máximo 5 dígitos'),
    streetComplement: z.string()
  }),
  schoolData: z.object({
    schoolName: z.string()
      .min(1, 'O nome da escola é obrigatório')
      .max(50, 'O nome da escola deve ter no máximo 50 caracteres')
      .transform(school => {
        return school
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    middleSchool: z.enum([
        '5° ano', 
        '6° ano', 
        '7° ano', 
        '8° ano', 
        '9° ano'
      ])
      .describe('Ano/série que o aluno está cursando'),
  }),
  origin: z.enum([
      'whatsapp', 
      'instagram', 
      'facebook', 
      'indicação', 
      'disclosure'
    ])
    .describe('Por onde ficou sabendo do Raízes'),
  accessibility: z.boolean()
    .describe('Necessidade de acessibilidade devido a uma deficiência ou condição'),
  timeAvailability: z.boolean()
    .describe('Disponibilidade aos sábados das 08 horas às 13 horas'),
});

export type StudentSchemaData = z.infer<typeof studentSchema>;

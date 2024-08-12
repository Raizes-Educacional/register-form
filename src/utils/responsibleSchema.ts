import { z } from "zod";

const maxFileSize = 5 * 1024 * 1024; // 5MB
const acceptedFileTypes = ['*.jpeg', '*.jpg', '*.png', '*.webp', '*.pdf'];

export const responsibleSchema = z.object({
  personalDataResponsible: z.object({    
    fullName: z.string()
      .min(1, { message: 'Nome completo é obrigatório' })
      .max(80, { message: 'O nome completo deve ter no máximo 80 caracteres' })
      .transform(fullName => {
        return fullName
          .trim()
          .split(' ')
          .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    email: z.string()
      .min(1, { message: 'Endereço de email é obrigatório' })
      .email({ message: 'Endereço de email inválido' }),
    identificationCard: z.string()
      .min(1, { message: 'RG é obrigatório' })
      .max(10, { message: 'RG deve ter no máximo 10 dígitos' })
      .regex(/^\d{1,2}\.\d{3}\.\d{3}-\d{1,2}$/, { message: 'RG inválido' }),
    photoIdentificationCard: z.instanceof(FileList)
      .refine((files) => !!files.item(0), { message: 'A foto do RG é obrigatória' })
      .refine((files) => files.item(0)!.size <= maxFileSize, { message: 'Tamanho máximo de 5MB' })
      .refine(
        (files) => acceptedFileTypes.includes(files.item(0)!.type), { message: 'Formato de arquivo inválido' })
        .transform(files => {
          return files.item(0)!
        }),
    cellPhone: z.string()
      .min(1, { message: 'Número do celular é obrigatório' })
      .max(11, { message: 'O número do celular deve ter no máximo 11 dígitos, incluindo o DDD' })
      .trim()
      .regex(/^\d{11}$/, { message: 'Número do celular inválido' }),
    phone: z.string()
      .min(1, { message: 'Número do telefone é obrigatório' })
      .max(11, { message: 'O número do telefone deve ter no máximo 11 dígitos, incluindo o DDD' })
      .trim()
      .regex(/^\d{11}$/, { message: 'Número do telefone inválido' }),
  }),
  termsAndConditionsPolicy: z.object({
    securityTransport: z.boolean()
      .describe('Garantir que o menor sob sua responsabilidade realize o trajeto com segurança'),
    responsibilityForTransport: z.boolean()
      .describe('Se responsabiliza pela segurança do menor no trajeto de ida e vinda'),
    acceptedFeeding: z.boolean()
      .describe('Ciente que será responsável pela alimentação'),
    acceptedTerms: z.boolean()
      .describe('Autorizo o uso de minha imagem e do menor sem finalidade comercial a título gratuito para ser utilizada pelo Raízes'),
  })
});

export type ResponsibleSchemaData = z.infer<typeof responsibleSchema>;

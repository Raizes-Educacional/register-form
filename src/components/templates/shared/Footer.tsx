import { InstagramOutlined, LinkedinOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import '../../../styles/global.css';

export function Footer() {
  
  const getYear = new Date().getFullYear();

  return(
    <footer className='py-6 px-4 w-max-screen mx-auto flex flex-col items-center bg-achromatic-300 text-achromatic-100'>
      <div className='flex flex-row justify-center gap-6'>
        <a href="mailto:projetoraizes.contato@gmail.com" target="_blank">
          <MailOutlined />
        </a>
        <a href="https://www.instagram.com/projetoraizes_sp" target="_blank">
          <InstagramOutlined />
        </a>
        <a href="https://www.linkedin.com/company/projeto-raízes/mycompany/" target="_blank">
          <LinkedinOutlined />
        </a>
        <a href="https://wa.me/5511934738775" target="_blank">
          <WhatsAppOutlined />
        </a>
      </div>

      <div className='mt-6 flex flex-col justify-center items-center gap-6'>
        <p className='uppercase'>siga nossas redes e apoie nossa causa!</p>
        <p>&copy; Copyright {getYear} - Raízes - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

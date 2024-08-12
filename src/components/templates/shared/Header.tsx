import raizesLogo from '../../../../public/logo.jpeg';
import '../../../styles/global.css';

export function Header() {
  return(
    <header className='pt-6 w-max-screen h-12 flex justify-center items-center bg-achromatic-100'>
      <div className='w-full md:max-w-lg m-2 flex flex-row justify-evenly items-center'>
        <img src={raizesLogo} alt="logo Raízes" className="w-8 h-8"/>
        <h1 className="text-2xl font-bold justify-center text-achromatic-300">Formulário de Matrícula</h1>
      </div>
    </header>
  );
};

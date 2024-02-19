import './styles/index.css';
import './styles/AppOutput.css';
import raizesLogo from '../public/logo.jpeg';

export default function App() {
  return (
    <>
      <img src={raizesLogo} alt="logo Raízes" className="h-12 p-2"/>
      <h1 className="text-2xl font-bold">Formulário de Matrícula</h1>
    </>
  );
};

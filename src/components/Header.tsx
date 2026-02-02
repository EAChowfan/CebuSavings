import CebuSavingsLogo from '../assets/CebuSavings_Logo.png';
import { LoginButton } from './loginButton';
import { RegisterButton } from './registerButton';
import '../css/index.css'

export function Header() {
  return (  
    <nav className="bg-[#191552] shadow-md fixed w-full z-1 top-0 left-0 h-32 items-center flex">
      <div className="flex w-full h-12 items-center justify-between px-4">
        <a href="#" className='pl-32'>
         <img src={CebuSavingsLogo} alt="Cebu Savings Logo" className="h-32 w-auto p-4" />
        </a>
      <div className="pr-64 flex items-center gap-4">
        <LoginButton />
        <RegisterButton />
      </div>
      </div> 

    </nav>
  )
}
import CebuSavingsLogo from './assets/CebuSavings_Logo.png';

export function Header() {
  return (  

    <header className="fixed top-0 left-0 bg-red w-full">
        <div className="container mx-auto p-0 bg-red flex items-center">
            <div className="w-36 h-12 flex items-center justify-center">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={CebuSavingsLogo} className="h-8" alt="Cebu Savings Logo" />
            </a>
            </div>

        </div>
    </header>
  )
}
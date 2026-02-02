import '../css/index.css'
import arrow from '../assets/arrow.png';

export function RegisterButton(){
    return(
        <div className="flex hover:bg-blue-700 text-white font-bold py-4 px-10 rounded inline-flex items-center justify-center bg-blue-500">
            Register
        <img src={arrow} alt="Register Vector" className="ml-2 h-6 w-6 items-center justify-center"/>
        </div>
    )
}
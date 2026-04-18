import { Link, NavLink } from 'react-router-dom'
import './style.css'
import logo from './src/assets/Logotipo.svg'


export default function Footer () {
    return(
        <header>
            <div>
                <Link to="/">
                <img src={logo} alt='Logo da empresa'/>
                <span>Contabiliadade Simples</span>
                </Link>

                <nav>
                    <NavLink to="/sobre-nos">Sobre nós</NavLink>
                    <NavLink to="/fale-conosco">Fale conosco</NavLink>
                </nav>
            </div>
        </header>
    )
}
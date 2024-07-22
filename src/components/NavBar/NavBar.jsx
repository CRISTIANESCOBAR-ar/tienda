import CardWidget from '../CartWidget/CardWidget'
import './NavBar.css'


const NavBar = () => {
  return (
      <div>
          <h1 className='titulo'>TIENDA</h1>
          <ul className='menu'>
            <li><a href="" className='inicio'>Home</a><a href="" className='inicio'>Contacto</a><a href="" className='inicio'>Sobre Nosotros</a><a href="" className='inicio'>Tienda</a></li>
          </ul>
          <CardWidget/>
    </div>
  )
}

export default NavBar
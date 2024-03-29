
import './Welcome-nav.css';
import styled from 'styled-components';
import {Link} from "react-router-dom";


function NavLogin() {
    return (
      <NavContainer className="nav-container">
        <h1 className="nav-titulo">ButterCream!</h1>
        <section className="container">
          <h2 className="nav-btn selected">Inicio</h2>
          <h2 className="nav-btn">Productos</h2>
          <h2 className="nav-btn">Contacto</h2>
        </section>
        <section>
          <Link to="/login" className="nav-btn_login">Cuenta</Link>
          <Link to="/registro" className="nav-btn_register">Registrarse</Link>
        </section>
      </NavContainer>
    );
  }

export default NavLogin

const NavContainer = styled.nav`
    

`
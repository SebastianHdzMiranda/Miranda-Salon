import { Link } from "react-router-dom";

const Navegacion = ({enlaces})=> {

    return(
        <nav className="navegacion">
                {enlaces.map((enlace, i)=>
                    <Link key={i} to='/' target="_blank" className="navegacion__enlace">
                        {enlace.titulo}
                    </Link>
                )}
        </nav>
    );
}

export default Navegacion;
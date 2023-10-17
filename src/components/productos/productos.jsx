import Producto from "./producto";

const Productos = ()=> {
    return(
        <section className="productos contenedor" id="productos">
            <h2 className="productos__heading">Nuestros Productos</h2>
            <p className="productos__texto">~ Comprar directo en tienda ~</p>

            <Producto />
        </section>  
    )
}

export default Productos;
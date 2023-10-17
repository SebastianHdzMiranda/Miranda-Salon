
const Producto = ()=> {
    const nombresProd = ['producto_01', 'producto_02', 'producto_03', 'producto_04'];
    
    const imageFormats = ['avif', 'webp', 'jpg'];

    return(
        <div className="productos__grid">
            {nombresProd.map((producto, i)=> 
                <div key={i} className="producto">
                    <div className="producto__imgContainer">
                        <picture>
                            {imageFormats.map((format, i)=> (
                                <source key={i} srcSet={`img/productos/${producto}.${format}`} type={`image/${format}`} />
                            ))}
                            <img className='producto__img' src={`img/productos/${producto}.jpg`} alt={`Imagen de ${producto}`} />
                        </picture>
                    </div>
                    <div className="producto__info">
                        <h3 className="producto__heading">Producto {i+1}</h3>
                        <p className="producto__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="producto__precio">$25</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Producto;
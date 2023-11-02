
const Servicio = ({servicios})=> {
    return(
            <div className="servicios__grid">
                {servicios.map((servicios, i)=>
                    <div key={i} className="card">
                        <div className={`card__imgContainer card__imgContainer--${i+1}`}></div>

                        <div className="card__info">
                            <h3 className="card__heading">Servicio de <span className="card__span">{servicios.titulo}</span></h3>
                            <a href="#" className="card__btn">Leer Más</a>
                        </div>
                    </div>
                )}
            </div>
    );
};

export default Servicio;
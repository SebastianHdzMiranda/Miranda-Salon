import AnimationContainer from "../Animaciones/animaciones";

const Banner = ()=> {

    return(
        <AnimationContainer>
            <section className="bienvenida anim">
                <div className="bienvenida__contenido contenedor">
                    <h1 className="bienvenida__heading">Llevando la moda a tu alcance.</h1>
                    <p className="bienvenida__texto">Te sentirás como nueva(o) con nuestros masajistas profesionales</p>
                    <a href="#" className="bienvenida__enlace">
                        Leer Mas
                    </a>
                </div>
            </section>
        </AnimationContainer>
    );
};

export default Banner;
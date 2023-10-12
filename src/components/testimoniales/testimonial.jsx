const Testimonial = ({testimoniales})=> {
    return(
        <div className="swiper-wrapper">
            {testimoniales.map((testimonial, i)=>
                <div key={i} className="swiper-slide">
                    <div className="swiper-contenedor">
                        <h3>{testimonial.nombre}</h3>
                        <p className="swiper-text">{testimonial.testimonio}</p>
                    </div>
                </div>  
            )}
        </div>
    )
}

export default Testimonial;
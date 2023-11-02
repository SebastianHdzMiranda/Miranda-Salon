import { useEffect } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Testimonial from "./testimonial";
import AnimationContainer from "../Animaciones/animaciones";
// import 'swiper/css';

const Testimoniales = ()=> {

    // Config de swiper
    useEffect(() => {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            effect: "fade",
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            loop: true,
            // autoplay:{
            //     delay: 3000,
            // },
        });
    }, []);
    
    const testimoniales = [
        {nombre:'HALEY B.' , testimonio: '“Una vez que experimentes Juniper, nunca irás a ningún otro lado. Es realmente una joya especial. Miranda y el resto del equipo son muy amables, generosos y meticulosos cuando se trata de atender a sus invitados. He sido un cliente dedicado desde sus inicios.”'},
        {nombre:'DR.KATHY H.' , testimonio: '“Este lugar te hace feliz cuando estás allí. La energía y el amor puesto en el negocio es palpable. Juniper tiene una vibra sólida, sofisticada y divertida”.'},
        {nombre:'LAUREN G.' , testimonio: '“¡Este es el lugar más sereno de todos! Entras por la puerta a un universo completamente diferente y te sientes inmediatamente tranquilo y seguro, visto y escuchado”.'},
    ]

    return(
        <AnimationContainer>
            <div className="testimoniales anim">
                <h2 className="testimoniales__heading">Lo que dicen nuestros Clientes</h2>
                <section className="swiper mySwiper">
                    <Testimonial testimoniales={testimoniales}/>
                    
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                </section>
            </div>
        </AnimationContainer>
    );
}

export default Testimoniales;
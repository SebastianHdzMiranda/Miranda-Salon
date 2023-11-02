import React from "react";
import { useEffect, useRef } from "react";

/*{children} -> patrón que permite que un componente contenedor envuelva y renderice contenido dentro de él. */
const AnimationContainer = ({children})=> {

    const animacionRef = useRef(null);

    useEffect(()=> {
        const animaciones = animacionRef.current.querySelectorAll('.anim');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.animation = `anim1 1.2s forwards ease-out`;
      
                if (entry.target.classList.contains('testimoniales')) {
                  entry.target.style.animation = `anim2 .6s forwards cubic-bezier(0.47, 0, 0.745, 0.715)`;
                }
              } else {
                entry.target.style.animation = 'none';
              }
            });
        });

        animaciones.forEach(animacion => observer.observe(animacion));

        return () => {
          // Limpia el observador cuando el componente se desmonta
          observer.disconnect();
        };
    }, []);

    return(
        <div ref={animacionRef}>
            {children} 
        </div>
    )
}
export default AnimationContainer;
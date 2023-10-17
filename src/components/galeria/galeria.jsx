const Galeria = ()=> {
    const nombresImg = ['galeria_1', 'galeria_2', 'galeria_3', 'galeria_4', 'galeria_5', 'galeria_6', 'galeria_7', 'galeria_8', 'galeria_9', 'galeria_10', 'galeria_11', 'galeria_12',]
    
    const imageFormats = ['avif', 'webp', 'jpg'];

    return(
        <section className="galeria">
            <div className="galeria__grid">
                    {nombresImg.map((nombreImg, i)=>
                        <div key={i} className="galeria__imgContainer">

                            <picture>
                                {imageFormats.map((format, i) => (
                                    <source key={i} srcSet={`../../img/galeria/${nombreImg}.${format}`} type={`image/${format}`} />
                                ))}
                                <img className='galeria__img' src={`../../img/galeria/${nombreImg}.jpg`} alt={`Imagen de ${nombreImg}`} />
                            </picture>

                        </div>  
                    )}

            </div>
        </section>
    );
}
export default Galeria;
const Footer = ()=> {
    return(
        <footer className="footer">
            <div className="footer__grid contenedor">

                <div className="footer__seccion">
                    <h3 className="footer__heading">Horario</h3>
                    <p className="footer__texto">Lun-Vie: 9AM - 7PM</p>
                    <p className="footer__texto">Sábado: 9AM - 2PM</p>
                    <p className="footer__texto">Domingo: Cerrado</p>
                </div>
                <div className="footer__seccion">
                    <h3 className="footer__heading">Contacto</h3>
                    <p className="footer__texto">C. Amapolas 17</p>
                    <nav className="sociales">
                        <a href="https://www.facebook.com/miranda.cruz.9849" target="_blank" className="sociales__enlace">
                            <span className="sociales__accesible">Facebook</span>
                        </a>
                        <a href="https://twitter.com/?lang=es" target="_blank" className="sociales__enlace">
                            <span className="sociales__accesible">Twitter</span>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="sociales__enlace">
                            <span className="sociales__accesible">Instagram</span>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" className="sociales__enlace">
                            <span className="sociales__accesible">Youtube</span>
                        </a>
                        <a href="https://www.tiktok.com/es/" target="_blank" className="sociales__enlace">
                            <span className="sociales__accesible">Tiktok</span>
                        </a>
                    </nav>
                </div>

                <div className="footer__iframeContainer">
                    <iframe className="footer__iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d673.6842407972402!2d-99.11391406853903!3d19.23181790257293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1690653909858!5m2!1ses-419!2smx" width="600" height="450" loading="lazy" style={{border: 'none'}}>
                    </iframe>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright__texto">
                    &copy; Miranda Salon. Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}
export default Footer;
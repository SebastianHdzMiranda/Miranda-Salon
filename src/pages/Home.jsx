import Banner from "../components/banner/banner";
import Conocenos from "../components/conocenos/conocenos";
import Footer from "../components/footer/footer";
import Galeria from "../components/galeria/galeria";
import Productos from "../components/productos/productos";
import Reserva from "../components/reserva/reserva";
import Servicios from "../components/servicios/servicios";
import Testimoniales from "../components/testimoniales/testimoniales";

const Home = ()=> {
    return (<>
        <Banner/>
        <Servicios /> 
        <Testimoniales />
        <Conocenos />
        <Reserva />
        <Galeria />
        <Productos />
        <Footer />
    </>)
}

export default Home;
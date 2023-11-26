import '../recursos/listado.css';
import Boton from './boton.js';
import Tabla from './tabla.js';
import Lista from './lista.js';
function Home() {
    return (
        <div className='content'>
            <img src="utad.jpg"></img>
            <h2>Mi lista</h2>
            <div className='parte-arriba'>
                <Lista/>
                <Boton/>
            </div>
            <div className='parte-abajo'>
                <Tabla/>
            </div>
        </div>
    );
}

export default Home;
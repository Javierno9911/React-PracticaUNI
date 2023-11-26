import '../recursos/listado.css';

function Boton(props) {
    return (
        <button className='boton' onClick={props.onClick}>Añadir Tarea</button>
    );
}

export default Boton;
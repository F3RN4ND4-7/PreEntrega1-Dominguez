import './CartWidget.scss';

const CartWidget = () => {
  return (
    <div className='m-3'>
        <img className="imgCarrito" src="./img/carrito-de-compras.png" alt="Carrito de compras" />
        <strong>10</strong>
    </div>
  )
}

export default CartWidget
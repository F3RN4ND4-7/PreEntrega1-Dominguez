import './ItemListContainer.scss';

const ItemListContainer = ({greetings}) => {
  return (
    <div>
    <h2 style={{textAlign:"center"}}>{greetings}</h2>
    </div>
  )
}

export default ItemListContainer
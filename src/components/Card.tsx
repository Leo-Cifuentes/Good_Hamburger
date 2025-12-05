type CardProps ={
    id: number;
    image: string;
    name: string;
    category: string;
    description: string;
    price: number;
    handler: (id : number, name : string, category : string, price : number) => void;
}

const Card = ({id, image, name, category, description, price, handler, isActive}:CardProps) => {
    return(
        <>
            <button type="button" onClick={() => handler(id, name, category, price)}
            className={`${isActive ? "card-class-active" : ""} card-class overflow-hidden col-4 col-md-3 p-0 rounded-4 m-1`}>
                <figure className="overflow-hidden ratio ratio-1x1">                    
                    <img src={image} alt={name} className="card-image object-fit-cover"/>                    
                </figure>
                <div className="card-info p-2 text-start">
                    <h3 className="text-truncate">{name}</h3>
                    <p>{description}</p>
                    <div className="card-price">${price}</div>
                </div>
            </button>
        </>
    )
}

export default Card;
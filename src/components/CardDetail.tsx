type CardDetailsProps = {
    id : number;
    name : string;
    price : number;
    handler : (id : number) => void;
}

const CardDetail = ({ id , name, price, handler } : CardDetailsProps) => {
    return (
        <>
            <div className="card-detail col-12 rounded my-2 d-flex justify-content-between">
                <div className="mx-3 my-2 text-start">
                    <p className="m-0"><strong>{name}</strong></p>
                    <p className="card-detail-price m-0">${price}</p>                    
                </div>
                <button className="button-delete me-1 px-3" type="button" onClick={() => handler(id)}>
                    <img src="/src/assets/trash.svg" alt="delete-item" height="28" />
                </button>
            </div>
        </>
    )
}

export default CardDetail;
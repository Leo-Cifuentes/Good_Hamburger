import { useEffect, useState } from "react";
import { useOrder } from "./OrderContext";
import CardDetail from "./CardDetail";

const Cart = () => {
    const { orderData, setSubmittedOrderData, setOrderData, submittedOrderData } = useOrder();
    const [inputName, setInputName] = useState('');
    const [prices, setPrices] = useState({
        subtotal: 0,
        discount: 0,
        discountPercent: 0,
        total: 0
    });

    useEffect(() => {
        if (orderData.order.length !== 0) {
            const data = { ...orderData, ...submittedOrderData }
            sessionStorage.setItem("order", JSON.stringify(data))
            alert('Order Created!');
        }
    }, [submittedOrderData])

    useEffect(() => {
        if (orderData.order.length > 0) {
            const haveSandwich = orderData.order.some(item => item.category === "sandwich");
            const haveFries = orderData.order.some(item => item.name === "Fries");
            const haveSoda = orderData.order.some(item => item.name === "Soft Drink");
            let subtotal = 0;
            let discountPercent = 0;
            let discount = 0;
            let total = 0;

            orderData.order.forEach(element => {
                subtotal = subtotal + Number(element.price);
            })

            if (haveSandwich && haveFries && haveSoda) {
                discountPercent = 0.20;
            } else if (haveSandwich && haveSoda) {
                discountPercent = 0.15;
            } else if (haveSandwich && haveFries) {
                discountPercent = 0.10;
            }

            discount = subtotal * discountPercent;
            total = subtotal - discount;

            setPrices({
                subtotal,
                discount,
                discountPercent,
                total
            })
        }
    }, [orderData])

    const handleSubmit = (e) => {
        e.preventDefault();
        const now = new Date();
        setSubmittedOrderData({
            name: inputName,
            date: now.toLocaleDateString(),
            hour: now.toLocaleTimeString()
        });
    };


    const handleDelete = (id) => {
        const newList = orderData.order.filter((item) => item.id !== id)
        const list = {
            order: newList
        };
        setOrderData(list);
    }

    return (
        <>
            <div className="col-12 col-md-4 my-3">
                <div className="cart rounded-4 flex-row p-3">
                    <div className="d-flex justify-content-start">
                        <figure className="ratio ratio-1x1 rounded-circle overflow-hidden mb-0">
                            <img src="/src/assets/bag.svg" alt="shopping-bag" width={"25px"} />
                        </figure>
                        <h3 className="mb-0">Your Order</h3>
                    </div>
                    <hr />
                    <div className="cart-items text-center py-3">
                        {
                            orderData.order.length > 0 ? (
                                orderData.order.map((item) => (
                                    <CardDetail
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        handler={handleDelete}
                                    />
                                ))
                            ) : <span>Your cart is empty<br />Select a sandwich to get started</span>
                        }
                    </div>
                    <hr />
                    <div className="cart-values">
                        <div className="d-flex justify-content-between">
                            <p className="m-0">Subtotal:</p>
                            <p className="m-0">${prices.subtotal.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="m-0">Discount (<span>{prices.discountPercent * 100}%</span>):</p>
                            <p className="m-0">${prices.discount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className="m-0"><strong>Total:</strong></p>
                            <p className="m-0 cart-total"><strong>${prices.total.toFixed(2)}</strong></p>
                        </div>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className="cart-name d-flex justify-content-start mb-3">
                            <label htmlFor="input-name">Your name:</label>
                            <input id="input-name" type="text" value={inputName} required minLength={2} maxLength={50} placeholder="Jhon Doe"
                                onChange={(e) => setInputName(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit" className="order-button rounded-2 px-4 py-2" disabled={orderData.order.length === 0}>Place order</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cart;
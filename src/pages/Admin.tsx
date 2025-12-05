import { useOrder } from "../components/OrderContext";
import Navbar from "../components/Navbar";

const Admin = () => {
    const { orderData, submittedOrderData } = useOrder();

    const recoverData = sessionStorage.getItem("order")
    const printData = JSON.parse(recoverData);
    
    const groupByName = (order) => {
        const namesOrder = order.map(item => item.name)
        return namesOrder.join(", ")
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 px-2">
                        <h2>Submitted Orders</h2>
                        <div className="cart rounded-4 flex-row p-3 align-self-center">
                            <h3>Order</h3>
                            <hr />
                            <div>
                                <table className="table  justify-content-between">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">User name</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Hour</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            [printData].map((item) =>
                                                <tr key={item.hour}>                                               
                                                    
                                                    <td>{groupByName(item.order)}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.hour}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin;
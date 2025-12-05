import { createContext, useState, useContext } from "react";

const initialSubmittedOrdersState = {
    name: "",
    date: "",
    hour: ""
};
const initialOrderState = {
    order: []
}

const OrderContext = createContext<any>(null);

export const OrderProvider = ({ children }) => {

    const [submittedOrderData, setSubmittedOrderData] = useState(initialSubmittedOrdersState);
    const [orderData, setOrderData] = useState(initialOrderState);

 
   // const clearOrder = () => setSubmittedOrderData(initialSubmittedOrdersState);

    const contextValue = { orderData, submittedOrderData, setSubmittedOrderData, setOrderData };

    return (
        <OrderContext.Provider value={contextValue}>
            {children}
        </OrderContext.Provider>
    );

}

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within a OrderProvider');
    }
    return context;
};
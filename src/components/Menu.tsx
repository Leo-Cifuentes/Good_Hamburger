import { useState, useEffect } from "react";
import Card from "./Card";
import { useOrder } from "./OrderContext";
import FilterButton from "./FilterButton"

type GoodHamburger = {
    id: number;
    image: string;
    name: string;
    category: string;
    description: string;
    price: number;
}

const URL_API_REQUEST: string = ("../../src/api/menu.json");

const Menu = () => {
    const [data, setData] = useState<ApiResponse | null>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const { orderData, setOrderData } = useOrder();
    const [filter, setFilter] = useState("All");

    useEffect(() => {

        function delay(ms: number) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const fetchData = async () => {
            try {
                await delay(100);
                const response = await fetch(URL_API_REQUEST);
                if (!response.ok) {
                    throw new Error(`Error con la información. Código de estado: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error) {
        return <div>Error: ${error.message}</div>
    }

    const handleOrder = (id: number, name: string, category: string, price: number) => {
        const list = orderData.order;
        if (category === "sandwich") {
            const findItemSandwich = orderData.order.some((item) => item.category === "sandwich");
            if (!findItemSandwich) {
                list.push({ id, name, category, price });
            }
            if (findItemSandwich) {
                const index = list.findIndex((item) => item.category === "sandwich");
                list[index] = { id, name, category, price }
            }
        } else {
            const findItemExtras = orderData.order.find((item) => item.category !== "sandwich" && item.id === id)
            if (!findItemExtras) {
                list.push({ id, name, category, price });
            }
        }
        const newList = {
            order: list
        };

        setOrderData(newList);
    }

    const handleFilter = (innerText : string) => {
        setFilter(innerText);
    }

    return (
        <>
            <div className="col-12 col-md-8 px-2 mb-3">
                <div className="d-flex justify-content-evenly">
                    <FilterButton handler={handleFilter} innerText="All" />
                    <FilterButton handler={handleFilter} innerText="Sandwiches" />
                    <FilterButton handler={handleFilter} innerText="Extras" />
                </div>
                {
                    (filter === "All" || filter === "Sandwiches") &&

                    <div>
                        <h2>Choose your main sandwich</h2>
                        <p>Required - Select 1</p>
                        {data.sandwich.map((item: GoodHamburger) =>
                            <Card
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                category={item.category}
                                description={item.description}
                                price={item.price.toFixed(2)}
                                handler={handleOrder}
                                isActive={orderData.order.find(selected => selected.id === item.id)}
                            />
                        )
                        }
                    </div>
                }

                {
                    (filter === "All" || filter === "Extras") &&
                    <div>
                        <h3>Add Extras</h3>
                        <p>Optional</p>
                        {
                            data.extras.map((item: GoodHamburger) =>
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    name={item.name}
                                    category={item.category}
                                    description={item.description}
                                    price={item.price.toFixed(2)}
                                    handler={handleOrder}
                                    isActive={orderData.order.find(selected => selected.id === item.id)}
                                />
                            )
                        }
                    </div>
                }
            </div>
        </>
    )
}
export default Menu;
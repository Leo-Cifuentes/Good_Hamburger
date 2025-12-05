import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart"


const Home = () => {
    return (

        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <Menu />
                    <Cart />
                </div>
            </div>
        </>
        
    )
 }
export default Home;
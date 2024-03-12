import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PizzasRender from "../components/PizzasRender";

const Home = () => {
    return(
        <>
        <Navbar />
        <Header />
        <PizzasRender>
            <Card />
        </PizzasRender>
        </>
    );
};

export default Home;
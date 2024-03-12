import { createContext, useState, useEffect } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch("/pizzas.json");
        const pizzas = await res.json();
        setPizzas(pizzas);
    };

    const addToCart = ({id, price, name, img}) => {
      const productFindIndex = cart.findIndex((p) => p.id === id);
      const producto = {id, price, name, img, count: 1};
      if(productFindIndex >= 0){
        cart[productFindIndex].count++;
        setCart([...cart]);
      } else {
        setCart([...cart, producto]);
      };
    };

    const increment = (i) => {
      cart[i].count++;
      setCart([...cart]);
    };

    const decrement = (i) => {
      const {count} = cart[i];
      if(count === 1){
        cart.splice(i, 1);
      } else {
        cart[i].count--;
      };
      setCart([...cart]);
    };

    return(
      <PizzasContext.Provider
      value={{pizzas, cart, setCart, addToCart, increment, decrement}}
      >
        {children}
      </PizzasContext.Provider>
    );
};
export default PizzasProvider;
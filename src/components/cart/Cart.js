import { useEffect } from "react";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { BsFillTrash2Fill } from 'react-icons/bs';
import './cart.css';
import { Link } from "react-router-dom";

const Cart = () => {
    const cart = useCart();
    const { user } = useAuth();

    const removeItem = (_id) => {
        axios.delete(`users/cart?user=${user}&id=${_id}`);
        cart.setCartItems(() => {
            return cart.cartItems.filter(val => (val._id !== _id));
        });
    }

    const fetchCart = async () => {
        const res = await axios.get(`/users/cart?user=${user}`);
        const data = res.data;
        cart.setCartItems(data);
        // console.log(data);
        return data;
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div className="cart">
            {cart.cartItems.map((item, key) => {
                return (
                    <li className="cart-item" key={key}>
                        <section className="cart-item-left">
                            <Link to={`/item/${item._id}`}>
                                <img src={item.thumbnail} alt={item.title} />
                            </Link>
                        </section>
                        <section className="cart-item-right">
                            <h2>
                                <Link to={`/item/${item._id}`}>
                                    <div className="title-underline">
                                    {item.title}
                                    </div>
                                </Link>
                                {item.authors}
                            </h2>
                            <h3>Rating: {item.average_rating}</h3>
                            <button onClick={() => { removeItem(item._id) }}><BsFillTrash2Fill /></button>
                        </section>
                    </li>
                );
            })}
        </div>
    );
};

export default Cart;

import useBooks from "../../hooks/useBooks";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import './item.css';
import { useEffect, useState } from "react";

const Item = () => {
    const { data } = useBooks();
    const params = useParams();
    const itemId = params['itemId'];
    // const item = data.find(val => val._id === itemId);
    const [item, setItem] = useState(null);
    const { user } = useAuth();
    const [visible, setVisible] = useState(false);

    const fetchBook = async (id) => {
        // send get request to backend to fetch book if not already fetched
        try {
            const res = await axios.get(`/books/find?id=${id}`);
            // console.log(res.data);
            setItem(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleClick = async (e) => {
        // send a post request to backend for the new cart
        try {
            await axios.post('/users/cart', {
                user: user,
                id: item._id
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            // display some confirmation
            setVisible(true);
            setTimeout(() => setVisible(false), 3000);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (!data) {
            fetchBook(itemId);
        }
        else {
            const stat = data.find(val => val._id === itemId);
            if (!stat) {
                fetchBook(itemId);
            }
            else {
                setItem(stat);
            }
        }
    }, []);

    return (
        item &&
        <div className="item">
            <section className="item-left"><img src={item.thumbnail} alt={item.title} /></section>
            <section className="item-right">
                <h2>{item.title}<br />{item.authors}</h2>
                <p>{item.description}</p>
                <h3>Rating: {item.average_rating}</h3>
                {user &&
                    <button onClick={handleClick}>Add to Cart</button>
                }
                {visible &&
                    <p className="item-confirm fade-in-out"><span>Successfully Updated Cart</span></p>
                }
            </section>
        </div>
    );
};

export default Item;

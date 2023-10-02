import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks";
import axios from "../../api/axios";
import './searchResult.css';

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState([]);
    const searchForValue = searchParams.get('searchFor');
    const { resultFor, setResultFor, data: globalData, setData: setGlobalData } = useBooks();

    useEffect(() => {
        if (resultFor === searchForValue) {
            setData(globalData.map((val, key) => {
                return (
                    <Link to={`/item/${val._id}`} key={key}>
                        <div className="book-container">
                            <img src={val.thumbnail} alt={val.title} />
                            <h3>{val.title}</h3>
                            <h4>{val.authors}</h4>
                        </div>
                    </Link>
                );
            }));
        }
        else {
            axios.get(`/books/search?name=${searchForValue}`)
                .then((res) => {
                    setResultFor(searchForValue);
                    setGlobalData(res.data);

                    setData(res.data.map((val, key) => {
                        return (
                            <Link to={`/item/${val._id}`} key={key}>
                                <div className="book-container">
                                    <img src={val.thumbnail} alt={val.title} />
                                    <h3 className="book-title">{val.title}</h3>
                                    <h4 className="book-author">{val.authors}</h4>
                                </div>
                            </Link>
                        );
                    }));
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [searchForValue]);

    return (
        <>
            <h3 className="result-info">{data.length} Results</h3>
            <div className="result-container">
                {data}
            </div>
        </>
    );
};

export default SearchResult;

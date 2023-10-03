import { Link } from 'react-router-dom';
import './home.css';
import hero from '../../assets/hero.png';
import customer1 from "../../assets/customer-1.png";
import customer2 from "../../assets/customer-2.png";
import author from "../../assets/author.png";
import social1 from "../../assets/social-right-1.png";
import social2 from "../../assets/social-right-2.png";
import { useEffect } from 'react';
import useTheme from '../../hooks/useTheme';

const Home = () => {
    const { setFooterColor } = useTheme();

    useEffect(() => {
        setFooterColor(1);

        return () => {
            setFooterColor(0);
        }
    }, []);

    return (
        <div className="home">
            <div className="hero">
                <div className="hero-left">
                    <h1 className='hero-title'>Where Book Readers build Community</h1>
                    <p className='hero-subtitle'>From intellectual discussions to fun author signings. Find your community</p>
                    <Link to="/register">
                        <button className='hero-cta'>Get Started</button>
                    </Link>
                </div>
                <img src={hero} alt="hero-img" />
            </div>
            <div className='about'>
                <div className="about-social-proof">
                    <div className="about-social-left">
                        <div className="social-review">
                            <p>"I've been buying books from Readera for years, and their selection is unmatched. The staff is incredibly knowledgeable, and I always leave with a great read. Highly recommended!" -<strong>Sarah D.</strong></p>
                            <img src={customer1} alt="Sarah D." />
                        </div>
                        <div className="social-review">
                            <p>"I stumbled upon Readera online and decided to give them a try. I was pleasantly surprised by their fast shipping and the excellent condition of the books I ordered. I'll definitely be a repeat customer!" - <strong>John M.</strong></p>
                            <img src={customer2} alt="John M." />
                        </div>
                        <div className="social-review social-author-review">
                            <p>Author Endorsement: "I had the pleasure of visiting Readwell for a book signing event, and I was impressed by their dedication to promoting literature and supporting authors. It's a fantastic place for book lovers!" - <strong>Markus Zusak</strong></p>
                            <img src={author} alt="Markus Zusak" />
                        </div>
                    </div>
                    <div className="about-social-right">
                        <img src={social1} alt="" />
                        <img src={social2} alt="" />
                    </div>
                </div>
                <div className="about-stats">
                    <div className="stat-container">
                        <div className="line"></div><div className="stat"><h2>300,000+</h2><p>Website Visits Yearly</p></div>
                    </div>
                    <div className="stat-container">
                        <div className="line"></div><div className="stat"><h2>60,000+</h2><p>Books Sold Yeaarly</p></div>
                    </div>
                    <div className="stat-container">
                        <div className="line"></div><div className="stat"><h2>500+</h2><p>Customer Reviews</p><p>with average 4.8/5 rating</p></div>
                    </div>
                    <div className="stat-container">
                        <div className="line"></div><div className="stat">
                            <h2>500+</h2>
                            <p>Book Club Members</p>
                            <p>Over 20 Author Events Hosted Yearly.</p>
                            <p>Over 30 Workshops and Literary Events Yearly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
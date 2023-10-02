import { AuthProvider } from './AuthContext';
import { BooksProvider } from './BooksContext';
import { CartProvider } from './CartContext';
import { ThemeProvider } from './ThemeContext';

const StateProvider = ({ children }) => {
    return (
        <AuthProvider>
            <BooksProvider>
                <CartProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </CartProvider>
            </BooksProvider>
        </AuthProvider>
    );
};

export default StateProvider;
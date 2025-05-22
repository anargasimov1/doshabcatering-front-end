import ReactDOM from 'react-dom/client';
import App from './components/App'
import AuthPrivader from './contex/AuthContext';
import ProductsProvider from './contex/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <ProductsProvider>
        <AuthPrivader>
            <App />
        </AuthPrivader>
    </ProductsProvider>


);



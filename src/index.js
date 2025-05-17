import ReactDOM from 'react-dom/client';
import App from './components/App'
import AuthPrivader from './contex/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <AuthPrivader>
        <App />
    </AuthPrivader>


);



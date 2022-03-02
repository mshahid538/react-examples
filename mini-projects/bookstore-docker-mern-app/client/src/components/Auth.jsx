import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();

    const onClick = () => { 
        navigate("/login");
    };

    return(
        <div>
            <h3>Authenticate to Continue..</h3>
            <button onClick={onClick}>Login</button>
        </div>
    );
}

export default Auth;
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function Header() {

    const navigate = useNavigate();
    const ctx = useAuth();
  

    const handleClickLogout = e => {
        try {
            e.preventDefault();

            localStorage.removeItem('token')
            ctx.setIsLogged(false)
            alert('Log out success');
            navigate('/login')

        }catch(err){

            console.log(err)
        }
    };


    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        TODO-APP
                    </Link>
                     
                    <div className="collapse navbar-collapse justify-content-end" >
                        <ul className="navbar-nav">
                    { localStorage.getItem('token') ? 
                            (<>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" onClick={handleClickLogout}>
                                    Log out
                                </a>
                            </li>
                            </>
                            )
                            : (<>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                Register
                                </Link>
                            </li>
                            </>)
                    }
                        </ul>
                    </div>
                </div>
            </nav>
    ) 
    

}

export default Header;
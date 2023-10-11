import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
      </div>
      <Link to={`/`}>
        <button type="submit" className="btn btn-primary">Login</button>
      </Link>
    </form>
  );
}

export default Login;

import logo from "./logo.svg";
import { Link } from "react-router-dom";

function About(){
    return (
        <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Je suis dans About</h1>
                <Link to="/">Click to view our home page</Link>
                <Link to="/about">Click to view our about page</Link>
        </div>
    );
}
export default About;


import React from "react";
import {Link} from "react-router-dom";

const Home = () =>
{
    return(
        <div>
            
            <h1 class="sub-title">Error 404: Page Not Found :(</h1>
            <p class="info">Sorry, the page you have requested is not available. If you believe this was an error on our part, please contact our web development team!</p>
            <form action="/contact" method="get" class="contact-button-form">
                <button type="submit" class="card category-button">
                    <h5 class="card-title">Contact Us!!</h5>
                </button>
            </form>
            <Link className="error-home" to="/">
                Home
            </Link>
        </div>
    )
}

export default Home;

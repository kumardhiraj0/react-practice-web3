import {Link,Outlet} from "react-router-dom";
function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
            <Link to="insta">Go to insta page</Link><br /><br />
            <Link to="mail">Go to mail page</Link>
            <Outlet/>
        </div>
    )
}

export default Contact;
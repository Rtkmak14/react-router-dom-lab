import { Link } from "react-router";

const NavBar = ()=> {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/mailboxes">Mailboxes</Link>
                    <Link to="/new-mailbox">New Mailbox</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
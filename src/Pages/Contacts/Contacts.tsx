import "./Contacts.css"
import {links} from "../../data.ts";

function Contacts() {
    return(
        <section className="contacts">
            <div className="contact-text-container">
                <div id={"contacts-title"}>Let’s Work Together!</div>
                <h4>Got a project in mind or just want to chat about tech and ideas? I’m always open to collaborations, brainstorming sessions, or simply making new connections. Let’s create something amazing together!</h4>
            </div>
            <a href={links.email} className="btn">
                Contact Me
            </a>
        </section>
    )
}

export default Contacts;
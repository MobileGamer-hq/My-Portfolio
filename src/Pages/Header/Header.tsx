import "./Header.css"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {links} from "../../data.ts";
import {FaXTwitter} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import img from "../../assets/Icon.png"

function Header() {
    return (
        <section className="header">
            <div className="header-container">
                <h3>Hey, I’m Somto</h3>
                <div id={"header-title"}> Aspiring Robotics Engineer + Fullstack Developer</div>
                <h4>I design solutions, build apps, create games, and explore tech with passion, always ready for a
                    challenge!</h4>
                <div className={"header-links"}>
                    <a href={links.instagram}>
                        <FaInstagram id={"header-icons"}/>
                    </a>
                    <a href={links.x}>
                        <FaXTwitter id={"header-icons"}/>
                    </a>
                    <a href={links.linkedin}>
                        <FaLinkedin id={"header-icons"}/>
                    </a>
                    <a href={links.github}>
                        <FaGithub id={"header-icons"}/>
                    </a>
                    <a href={links.email}>
                        <MdEmail id={"header-icons"}/>
                    </a>
                </div>
            </div>
            <img id={"header-img"} src={img} alt={"Logo"}/>
        </section>
    )
}

export default Header;

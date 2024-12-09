import GradientText from "../../Components/GradientText.tsx";
import "./Header.css"

function Header() {
    return (
        <section>
            <h3>Hey, I’m Somto</h3>
            <GradientText text={"Aspiring Robotics Engineer + Fullstack Developer"} size={80}/>
            <h4>I design solutions, build apps, create games, and explore tech with passion, always ready for a
                challenge!</h4>
            <div className={"header-links"}>

            </div>
        </section>
    )
}

export default Header;

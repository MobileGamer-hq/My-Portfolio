import GradientText from "../../Components/GradientText.tsx";
import "./Services.css"
import img1 from "../../assets/Full-stack-dev.png"
import img2 from "../../assets/mobile-dev.png"
import img3 from "../../assets/data-image.png"


function Services() {
  return (
    <section className={"services"}>
      <GradientText text = {"My Quality Services"} size={50} />
      <h4>Here’s what I can do for you—whether it’s developing apps, designing games, or creating innovative tech solutions, I’ve got you covered.</h4>
        <div className={"services-container"}>
            <Service title={"FullStack Development"} img={img1} text = {"Creating responsive, fast, and user-friendly websites with React and Express, turning ideas into reality."}/>
            <Service title={"Mobile Development"} img={img2} text = {"Building smooth, cross-platform mobile apps with React Native for seamless user experiences."}/>
            <Service title={"Data Analysis"} img={img3} text={"Turning raw data into insights using Python to drive smarter decisions."}/>
        </div>
    </section>
  )
}

function Service({title, text, img}: {title: string, text: string, img: string}) {
    return (
        <div className="service">
            <img src={img} alt="" id={"service-img"}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h4>{title}</h4>
                <p id={"service-text"}>{text}</p>
            </div>
        </div>
    )
}

export default Services
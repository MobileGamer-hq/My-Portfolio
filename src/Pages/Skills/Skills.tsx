import "./Skills.css"
import GradientText from "../../Components/GradientText.tsx";

function Skills() {
  return (
    <section className="skills">
      <GradientText text = {"What I Can Do?"} size={50} />
      <h4>From programming languages to design tools, here’s a breakdown of the skills I bring to the table for any project.</h4>
      <div className={"skills-container"}>
        <div className={"skills-container-sub"}>
          <h4 id={"gradient-title"}>Languages</h4>
          <Skill title="Python"/>
          <Skill title="Javascript"/>
          <Skill title=".Net C#"/>
        </div>
        <div className={"skills-container-sub"}>
          <h4 id={"gradient-title"}>Softwares & Frameworks</h4>
          <Skill title="React"/>
          <Skill title="React Native"/>
          <Skill title="Express.js"/>
          <Skill title={"Unity Game Engine"}/>
          <Skill title={" Blender"}/>
        </div>
      </div>
    </section>
  )
}

function Skill({title}: {title: string}) {
  return (<div className={"skill"}>{title}</div>)
}

export default Skills
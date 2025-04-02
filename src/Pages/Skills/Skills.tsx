import "./Skills.css"

function Skills() {
    return (
        <section className="skills">
            <div id={"skills-title"}>What I Can Do</div>
                <h4>From programming languages to design tools, here’s a breakdown of the skills I bring to the table
                    for any
                    project.</h4>
                <div className={"skills-container"}>
                    <div className={"skills-container-sub"}>
                        <h4 id={"gradient-title"}>Languages</h4>
                        <Skill title="Python"/>
                        <Skill title="Javascript"/>
                        <Skill title=".Net C#"/>
                        <h4 id={"gradient-title"}>Softwares</h4>
                        <Skill title={"Unity Game Engine"}/>
                        <Skill title={" Blender"}/>
                    </div>
                    <div className={"skills-container-sub"}>
                        <h4 id={"gradient-title"}>Frameworks</h4>
                        <Skill title="React"/>
                        <Skill title="React Native"/>
                        <Skill title="Express.js"/>
                        <Skill title=" Firebase"/>


                    </div>
                </div>
        </section>
)
}

function Skill({
    title
}: {
    title:string
}) {
    return (<a className={"skill"}>{title}</a>)
}

export default Skills
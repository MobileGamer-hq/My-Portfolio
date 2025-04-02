import "./Projects.css"
import {projects} from "../../data.ts";


function Projects() {
    return (
        <section className="projects">
            <div id={"projects-title"}>My Recent Works</div>
            <h4>Take a look at some of my favourite projects where I’ve turned ideas into reality, each one tells a
                story of creativity and hard work.</h4>
            <div className={"projects-container"}>
                <Project name={"Academia"} link={projects.academia}
                         desc={"A social academic media app for students featuring timetables, academic calendars, and performance reports."}/>
                <Project name={"SmartProp"} link={projects.smart_prop}
                         desc={"A RESTful API to simplify property searches using Express and Firebase."}/>
                <Project name={"DeyGo"} link={projects.dey_go}
                         desc={"A physics-based game in Unity with custom animations and realistic obstacle courses."}/>
                <Project name={"N.E.B.U.L.A"} link={projects.nebula}
                         desc={"A Python-powered assistant that automates tasks and searches online."}/>
                <Project name={"Catch Me"} link={projects.catch_me}
                         desc={"Catch Me connects athletes, coaches, and scouts, showcasing talent globally"}/>
                <Project name={"Scraper"} link={projects.catch_me}
                         desc={"Scraper extracts product data from popular online stores for analysis."}/>
                <Project name={"Robot Arm"} link={projects.robot_arm}
                         desc={"Creating a robotic arm that learns to pick and place objects using reinforcement learning."}/>
                <Project name={"Epicordia"} link={projects.epicordia}
                         desc={"Epicordia: Organize, plan, and collaborate on projects with visual tools."}/>
            </div>
        </section>
    )
}

function Project({name, desc, link}: { name: string; desc: string, link: string }) {
    return (
        <a className="project" href={link}>
            <h4 id={"project-name"}>{name}</h4>
            <p id={"project-desc"}>{desc}</p>
        </a>
    )
}

export default Projects
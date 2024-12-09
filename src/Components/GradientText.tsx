import "./Components.css"

function GradientText({text, size}:{text: string, size: number}) {
    return(
        <div className="gradient-text" style={{
            fontSize: size,
            lineHeight:`${size +10}px`,
        }}>{text}</div>
    )
}
export default GradientText;
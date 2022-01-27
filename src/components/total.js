const Total = (props) => {
    const parts = props.parts;
    return (
        <div>
            <p> Total : {parts[0].exercise + parts[1].exercise + parts[2].exercise} </p>
        </div>
    )
}
export default Total;

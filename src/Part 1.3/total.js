const Total = (props) => {
    const parts = props.parts;
    return (
        <div>
            <p> Total : {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>
        </div>
    )
}
export default Total;

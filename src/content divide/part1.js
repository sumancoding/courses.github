const Part1 = (props) => {
    const parts = props.parts;

    return (
        <div>
            <p>{parts[0].name} {parts[0].exercise}</p>
        </div>
    )
}
export default Part1;

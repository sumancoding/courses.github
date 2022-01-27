const Part2 = (props) => {
    const parts = props.parts;

    return (
        <div>
            <p>{parts[1].name} {parts[1].exercise}</p>
        </div>
    )
}
export default Part2;

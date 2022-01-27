const Part3 = (props) => {
    const parts = props.parts;

    return (
        <div>
            <p>{parts[2].name} {parts[2].exercise}</p>
        </div>
    )
}
export default Part3;


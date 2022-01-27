const Contents = (props) => {
    const body = props.parts;

    return (
        <div>
            <p> {body[0].name}: {body[0].exercises}</p>
            <p> {body[1].name}: {body[1].exercises}</p>
            <p> {body[2].name}: {body[2].exercises}</p>
        </div>
    )
}
export default Contents;

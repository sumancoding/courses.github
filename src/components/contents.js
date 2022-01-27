import Part1 from '../content divide/part1';
import Part2 from '../content divide/part2';
import Part3 from '../content divide/part3';

const Contents = (props) => {
    const parts = props.parts;

    return (
        <div>
            <Part1 parts={parts} />
            <Part2 parts={parts} />
            <Part3 parts={parts} />
        </div>
    )
}
export default Contents;


/*import ReactDOM from 'react-dom';
import Contents from '../components/contents';
import Header from '../components/header';
import Total from '../components/total';


const App = () => {

    const course = 'Superadvanced web and mobile program'
    //Object made to pass as single props
    const partsAndNumber = {
        parts: [
            {
                name: 'Basics of React :',
                exercise: 8,
            },
            {
                name: 'Using Props :',
                exercise: 10,
            },
            {
                name: 'Component states :',
                exercise: 12,
            }
        ]

    }
    return (
        <div>
            <Header course={course} />
            <Contents parts={partsAndNumber.parts} />
            <Total parts={partsAndNumber.parts} />

        </div>
    )
}
(ReactDOM.render(
    <App />,
    document.getElementById('root')
);


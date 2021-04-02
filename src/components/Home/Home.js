import RecordList from '../RecordList/RecordList';
import useFetch from '../../hooks/useFetch';

const Home = () => {
    const { data: records, isPending, error} = useFetch('http://localhost:8000/records');
    return (  
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            {records && <RecordList records={records} title="All Records"/>}
        </div>
    );
}

export default Home;
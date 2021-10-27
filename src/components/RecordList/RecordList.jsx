import { Link } from 'react-router-dom';

const RecordList = ({records, title}) => {
    return (  
        <div className="record-list">
            <h1>{ title }</h1>
            {records.map((record) => (
                <div className="rec-preview" key={record.id}>
                    <Link to={`/records/${record.id}`}>
                        <h2>{record.title}</h2>
                        <p className="fade-text">{record.body.substring(0, 50)}</p>
                    </Link>                 
                </div>
            ))}
        </div>
    );
}
 
export default RecordList;
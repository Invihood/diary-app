import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useHistory } from 'react-router-dom';

const Record = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/records/' + id);
    const history = useHistory();
    const handleClickBack = () => {
        history.go(-1);
    }
    const handleClick = () => {
        fetch('http://localhost:8000/records/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{ blog.body }</div>
                    <button className="back-nav" onClick={handleClickBack}>Back</button>
                    <button className="delete-button" onClick={handleClick}>Delete</button>
                </article>
                
            )}
        </div>
    );
}
 
export default Record;
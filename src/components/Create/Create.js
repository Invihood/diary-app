import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const record = {title, body};

        setIsPending(true);

        fetch('http://localhost:8000/records', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(record)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return (  
        <div className="create">
            <h2>Add a New Record</h2>
            <form onSubmit={handleSubmit}>
                <label>Record Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Record Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;
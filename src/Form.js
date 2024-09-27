import { useState } from 'react';
import './Form.css';

const Form = ({ addIdea }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const submitIdeas = (event) => {
        event.preventDefault();
        if (!title || !description) {
            setErrorMessage("Please fill out both fields.");
            return; 
        }
        const newIdea = {
            id: Date.now(),
            title,
            description
        };
        addIdea(newIdea);
        clearInput();
        setErrorMessage(""); 
    };

    const clearInput = () => {
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={submitIdeas}>
            <input
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input
                type='text'
                placeholder='Description'
                name='description'
                value={description}
                onChange={event => setDescription(event.target.value)}
            />

            <button type="submit">SUBMIT</button>
            { errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 
        </form>
    );
};

export default Form;

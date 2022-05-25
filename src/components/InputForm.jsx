import { useState } from "react";

const initialFormState = { name: '', description: '' }

const InputForm = ({ handleAddNote }) => {
    const [formData, setFormData] = useState(initialFormState);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name) {
            alert('Please add a name')
            return;
        } else if (!formData.description){
            alert('Please add a description')
            return;
        } else if (!formData.name && !formData.description) {
            alert('Please enter a note')
            return;
        }

        handleAddNote(formData)
        setFormData('') 
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h4>Enter a note here</h4>
                <input
                    className='amplify-input form-input'
                    onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                    placeholder="Title"
                    value={formData.name}
                />
                <input
                    className='amplify-input form-input'
                    onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                    placeholder="Description"
                    value={formData.description}
                />
            </div>
            <button type='submit' className='amplify-button create' /* onClick={createNote} */>Create Note</button>
        </form>
    );
};

export default InputForm;

import { useState } from "react";

import Button from 'react-bootstrap/Button';

const initialFormState = { name: '', description: '' }

const InputForm = ({ handleAddNote }) => {
    const [formData, setFormData] = useState(initialFormState);

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name && !formData.description) {
            alert('Please enter a note')
            return;
        } else if (!formData.description){
            alert('Please add a description')
            return;
        } else if (!formData.name) {
            alert('Please add a title')
            return;
        }

        handleAddNote(formData)
        setFormData('') 
    }

    return (
        <div className="input-container">
            <form onSubmit={onSubmit}>
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
            
            <Button type='submit' className='btn btn-success'>Create Note</Button>
        </form>
        </div>
    );
};

export default InputForm;

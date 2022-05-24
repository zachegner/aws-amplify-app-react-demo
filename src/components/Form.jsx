import { API } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { useState, useEffect } from 'react';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';
import Header from './Header';

const initialFormState = { name: '', description: '' }

const Form = () => {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    const formFields = {
        signUp: {
            username: {
                isRequired: true,
            },
            password: {
                isRequired: true,
            },
            confirm_password: {
                isRequired: true,
            },
            email: {
                isRequired: true,
            },
            name: {
                isRequired: true,
            },
            nickname: {
                isRequired: true,
            },
            phone_number: {
                isRequired: true,
            },
        },
    }


    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listNotes });
        setNotes(apiData.data.listNotes.items);
    }

    async function createNote() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createNoteMutation, variables: { input: formData } });
        setNotes([...notes, formData]);
        setFormData(initialFormState);
    }

    async function deleteNote({ id }) {
        const newNotesArray = notes.filter(note => note.id !== id);
        setNotes(newNotesArray);
        await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
    }

    return <div className='main'><Authenticator
        formFields={formFields}
        socialProviders={['amazon', 'apple', 'facebook', 'google']}
        signUpAttributes={[
            'email',
            'name',
            'nickname',
            'phone_number',
        ]}
        variation="modal"
    >
        {({ signOut, user }) => (

            <div className="container">
                <Header />
                <input
                    className='amplify-input'
                    onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                    placeholder="Title"
                    value={formData.name}
                />
                <input
                    className='amplify-input'
                    onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                    placeholder="Description"
                    value={formData.description}
                />
                <button className='amplify-button create' onClick={createNote}>Create Note</button>
                <div className='notes-container' style={{ marginBottom: 30 }}>
                    {
                        notes.map(note => (
                            <div className='note' key={note.id || note.name}>
                                <h2>{note.name}</h2>
                                <p>{note.description}</p>
                                <button className='amplify-button delete' onClick={() => deleteNote(note)}>X</button>
                            </div>
                        ))
                    }
                </div>
                <button className='amplify-button sign-out' onClick={signOut}>Sign out</button>
            </div>
        )}
    </Authenticator>
    </div>;
};

export default Form;

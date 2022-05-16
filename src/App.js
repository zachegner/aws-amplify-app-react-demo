import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { listNotes } from './graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { useState, useEffect } from 'react';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

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

  return (
    <Authenticator 
      socialProviders={['amazon', 'apple', 'facebook', 'google']}
      signUpAttributes={[
        'birthdate',
        'email',
        'name',
        'nickname',
        'phone_number',
      ]}
      variation="modal">
      {({ signOut, user }) => (
        <div className="App">
          <h1>Hello {user.nickname}</h1>
          <input
            onChange={e => setFormData({ ...formData, 'name': e.target.value })}
            placeholder="Note name"
            value={formData.name}
          />
          <input
            onChange={e => setFormData({ ...formData, 'description': e.target.value })}
            placeholder="Note description"
            value={formData.description}
          />
          <button onClick={createNote}>Create Note</button>
          <div style={{ marginBottom: 30 }}>
            {
              notes.map(note => (
                <div key={note.id || note.name}>
                  <h2>{note.name}</h2>
                  <p>{note.description}</p>
                  <button onClick={() => deleteNote(note)}>Delete note</button>
                </div>
              ))
            }
          </div>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;

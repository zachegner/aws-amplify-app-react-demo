import './App.css';
import '@aws-amplify/ui-react/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';

import { Footer } from './components/Footer';
import NotesList from './components/NotesList';
import InputForm from './components/InputForm';
import NavBar from './components/NavBar';
import ExampleToast from './components/ExampleToast'

import { Authenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';

import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';



function App() {
  const [notes, setNotes] = useState([{
    name: '',
    description: '',
    date: ''
  }]);

  useEffect(() => {
    fetchNotes();
  }, []);

  /* const formFields = {
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
  } */

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes, authMode: 'API_KEY' });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote(formData) {
    const date = new Date();
    const newNote = {
      name: formData.name,
      description: formData.description,
      date: date.toLocaleString()
    }
    try {
      await API.graphql({ query: createNoteMutation, variables: { input: newNote } });
    } catch (err) {
      console.log('error creating note:', err)
    }
    setNotes([...notes, newNote]);
    //setFormData(initialFormState);
  }

  async function deleteNote(id) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
  }

  return (
    <Authenticator
      /* formFields={formFields}
      socialProviders={['amazon', 'apple', 'facebook', 'google']}
      signUpAttributes={[
        'email',
        'name',
        'nickname',
        'phone_number',
      ]} */
      variation="modal"
    >
      {({ signOut, user }) => (
        <>
          <NavBar />
          <ExampleToast>
          <a href="https://github.com/zachegner/aws-amplify-app-react-demo">Github Profile</a>
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast>
          <div className='main'>
            <div>
              <NotesList notes={notes.filter((note) => note.name.toLowerCase())} handleDelete={deleteNote} />
            </div>
            <div>
              <InputForm handleAddNote={createNote} />
            </div>
            <Button className='btn btn-danger btn-lg btn-sign-out' onClick={signOut}>Sign out</Button>
          </div>
          <Footer />
        </>
      )}
    </Authenticator>
  );
}

export default App;

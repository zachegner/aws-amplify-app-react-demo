import Note from './Note';

const NotesList = ({ notes, handleDelete }) => {
    return (
            <div className='notes-container'>
                    {notes.map(note => (
                        <Note 
                            id={note.id} 
                            name={note.name}
                            description={note.description} 
                            handleDelete={handleDelete} 
                            className='note' 
                            key={note.id}>
                        </Note>
                    ))}
                {/* <InputForm handleAddNote={handleAddNote} /> */}
            </div>
    )
}

export default NotesList;

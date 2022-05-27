import { MdDeleteForever } from 'react-icons/md'

function Note({ id, name, description, date, handleDelete }) {
    return (
        <div className="note">
            <h5 className='name-label'>{name}</h5>
            <div className="note-footer">
                <small>{description}</small> <br />
                <small className='date'>{date}</small>
            </div>
            <MdDeleteForever onClick={() => handleDelete(id)} className="delete-icon" size="1.3em" />
        </div>
    )
}

export default Note
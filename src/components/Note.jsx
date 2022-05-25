import { MdDeleteForever } from 'react-icons/md'

function Note({ id, name, description, handleDelete }) {
    return (
        <div className="note">
            <span>{name}</span>
            <div className="note-footer">
                <small>{description}</small>
                <MdDeleteForever onClick={() => handleDelete(id)} className="delete-icon" size="1.3em" />
            </div>
        </div>
    )
}

export default Note
import React, { useState } from "react";
import "../styles/Home.css"; // Ensure the correct CSS file is imported

function Note({ note, onDelete }) {
    const [error, setError] = useState(null);
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    const handleDelete = async () => {
        try {
            await onDelete(note.id);
        } catch (err) {
            setError("Failed to delete the note. Please try again.");
        }
    };

    return (
        <div className="note">
            {error && <p className="error-message">{error}</p>}
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}

export default Note;

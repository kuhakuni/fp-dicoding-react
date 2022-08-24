import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({ title, notes, onDelete, onArchive }) => {
	return (
		<>
			<h2>{title}</h2>

			{notes.length !== 0 ? (
				<div className="notes-list">
					{notes.map((note) => {
						return (
							<NotesItem
								key={note.id}
								note={note}
								onDelete={onDelete}
								onArchive={onArchive}
							/>
						);
					})}
				</div>
			) : (
				<p className="notes-list__empty-message">Tidak ada catatan</p>
			)}
		</>
	);
};

export default NotesList;

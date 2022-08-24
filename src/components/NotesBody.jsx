import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

const NotesBody = ({
	activeNotes,
	archivedNotes,
	onDelete,
	onArchive,
	addNote,
}) => {
	return (
		<div className="note-app__body">
			<NotesInput addNote={addNote} />
			{activeNotes && (
				<NotesList
					title={"Catatan Aktif"}
					notes={activeNotes}
					onDelete={onDelete}
					onArchive={onArchive}
				/>
			)}
			{archivedNotes && (
				<NotesList
					title={"Arsip"}
					notes={archivedNotes}
					onDelete={onDelete}
					onArchive={onArchive}
				/>
			)}
		</div>
	);
};
export default NotesBody;

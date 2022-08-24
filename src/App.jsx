import React from "react";
import { useState } from "react";
import NotesBody from "./components/NotesBody";
import NotesHeader from "./components/NotesHeader";
import { getInitialData } from "./utils/index";
const App = () => {
	const [notes, setNotes] = useState(getInitialData);
	const [filteredNotes, setFilteredNotes] = useState(notes);
	const [refresh, setRefresh] = useState(false);
	const archivedNotes = [];
	const activeNotes = [];
	const addNote = ({ title, body }) => {
		setNotes([
			...notes,
			{
				id: +new Date(),
				title,
				body,
				createdAt: new Date().toISOString(),
				archived: false,
			},
		]);
	};
	const onDelete = (id) => {
		const confirmation = window.confirm(
			"Apakah anda yakin akan menghapus catatan tersebut?"
		);
		if (!confirmation) return;
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	const onArchive = (id) => {
		const note = notes.find((note) => note.id === id);
		note.archived = !note.archived;
		setRefresh(!refresh);
	};
	const onSearch = (keyword) => {
		const filteredNote = notes.filter((note) => {
			return note.title.toLowerCase().includes(keyword.toLowerCase());
		});
		setFilteredNotes(filteredNote);
	};
	filteredNotes.forEach((note) => {
		if (note.archived) {
			archivedNotes.push(note);
		} else {
			activeNotes.push(note);
		}
	});
	return (
		<>
			<NotesHeader onSearch={onSearch} />
			<NotesBody
				archivedNotes={archivedNotes}
				activeNotes={activeNotes}
				addNote={addNote}
				onDelete={onDelete}
				onArchive={onArchive}
			/>
		</>
	);
};
export default App;

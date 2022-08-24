import React from "react";
import { useState } from "react";

const NotesInput = ({ addNote }) => {
	const [forms, setForms] = useState({
		title: "",
		body: "",
	});
	const submitHandler = (e) => {
		e.preventDefault();
		addNote(forms);
		setForms({
			title: "",
			body: "",
		});
	};
	const handleTitleChange = (e) => {
		const limit = 50;
		setForms(() => ({
			...forms,
			title: e.target.value.slice(0, limit),
		}));
	};
	const handleBodyChange = (e) => {
		setForms(() => ({
			...forms,
			body: e.target.value,
		}));
	};
	return (
		<div className="note-input" onSubmit={submitHandler}>
			<h2>Buat catatan</h2>
			<form>
				<p className="note-input__title__char-limit">
					Sisa karakter: {50 - forms.title.length}
				</p>
				<input
					className="note-input__title"
					type="text"
					placeholder="Ini adalah judul ..."
					onChange={handleTitleChange}
					value={forms.title}
					required
				/>
				<textarea
					className="note-input__body"
					type="text"
					placeholder="Tuliskan catatanmu di sini ..."
					onChange={handleBodyChange}
					value={forms.body}
					required
				></textarea>
				<button type="submit">Buat</button>
			</form>
		</div>
	);
};

export default NotesInput;

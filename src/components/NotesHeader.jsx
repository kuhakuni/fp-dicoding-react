import React from "react";

const NotesHeader = ({ onSearch }) => {
	return (
		<div className="note-app__header">
			<h1>Notes App</h1>
			<div className="note-search">
				<input
					type="text"
					placeholder="Cari catatan di sini..."
					onChange={(e) => {
						onSearch(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};
export default NotesHeader;

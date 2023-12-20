import { Editor } from "@tinymce/tinymce-react";
import { Button } from "primereact/button";
import React, { useState } from "react";

const modifyDate = (date) => {
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
	const year = date.getFullYear();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	return `${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`;
};

const getDate = () => {
	const td = new Date();
	const actualTd = modifyDate(td);
	return actualTd;
};

const CustomEditor = (props) => {
	const [currentDateTime, setCurrentDateTime] = useState(getDate());
	const [content, setContent] = useState("");

	const submitHandler = () => {
		if (content.length === 0) {
			alert("Fill some shit!");
			return;
		}
		console.log(content);
		props.onSend(content);
	};

	return (
		<div>
			<Editor
				apiKey="13r0r9q6rug567olj00oucsijv821yet498j8h0fu8x4d0y3"
				init={{
					plugins:
						"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
					toolbar:
						"undo redo | blocks fontfamily fontsize | bold italic underline | link image media | align lineheight | bullist |",
					placeholder: `Entry for ${currentDateTime}`,
				}}
				onChange={(event) => {
					setContent(event.target.getContent());
				}}
			/>

			<div
				style={{
					marginTop: 25,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Button label="Add" onClick={submitHandler} />
			</div>
		</div>
	);
};

export default CustomEditor;

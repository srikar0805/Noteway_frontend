import React from "react";
import CustomEditor from "../components/CustomEditor";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FETCH_ENTRIES } from "../store/store";

const NewEntry = () => {
	const dispatch = useDispatch();
	const entries = useSelector((state) => state.entries);

	const navigate = useNavigate();

	const sendToBackend = async (content) => {
		const details = { content };
		const response = await axios.post(
			"https://srikar-noteway.onrender.com/new",
			details
		);
		console.log(response);
		alert("Added!");

		const curr = new Date();
		console.log(curr);

		const newResponse = await axios.post(
			"https://srikar-noteway.onrender.com/find",
			{
				curr,
			}
		);

		console.log(newResponse.data);

		dispatch({ type: "save_entries", entries: newResponse.data });

		navigate("/life");
	};

	return (
		<div>
			<Navbar />
			<div
				style={{
					justifyContent: "center",
					display: "flex",
					alignItems: "center",
					marginTop: 20,
				}}>
				<div
					style={{
						width: "75%",
					}}>
					<CustomEditor onSend={sendToBackend} />
				</div>
			</div>
		</div>
	);
};

export default NewEntry;

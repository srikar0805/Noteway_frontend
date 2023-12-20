// redux.js (or store.js)
import { createStore } from "redux";

import axios from "axios";

// Actions
export const FETCH_ENTRIES = "FETCH_ENTRIES";
export const CLEAR_ENTRIES = "CLEAR_ENTRIES";

// Reducer
const initialState = {
	entries: [],
};

const getResponsePerDate = async (date) => {
	const response = await axios.post("https://srikar-noteway.onrender.com/find", { date });
	console.log(response);
	return response;
};

const reducer = (state = initialState, action) => {
	if (action.type == "save_entries") {
		return { ...state, entries: action.entries };
	}

	return state;
};

// Store
const store = createStore(reducer);

export default store;

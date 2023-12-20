import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import HTMLRenderer from "../components/HTMLRenderer";
import { Panel } from "primereact/panel";

import "./life.css";

const Life = () => {
	const entries = useSelector((state) => state.entries);

	useEffect(() => {
		console.log(entries);
	}, [entries]);

	const giveTime = (inputTime) => {
		const [timePart] = inputTime.split("T")[1].split(".");
		const [hours, minutes, seconds] = timePart.split(":");
		const ampm = hours >= 12 ? "PM" : "AM";
		const formattedHours = hours % 12 || 12;
		const formattedTime = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
		return formattedTime;
	};

	return (
		<div>
			<Navbar />
			<div>
				{entries.length !== 0 &&
					entries.map((entry, index) => (
						<div
							style={{
								all: "initial",
								marginLeft: 25,
								marginRight: 25,
							}}
							key={index}>
							<Panel
								header={giveTime(entry.createdAt)}
								className="custom-panel-header">
								<HTMLRenderer htmlContent={entry.content} />
							</Panel>
						</div>
					))}
			</div>
		</div>
	);
};

export default Life;

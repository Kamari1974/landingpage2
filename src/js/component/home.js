import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Card.js";
import { Footer } from "./footer.js";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
}

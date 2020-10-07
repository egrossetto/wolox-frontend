import React from 'react';
import './styles.css';

export default function ListCard({ tech, setFilter }) {
	return (
		<li className="cards_item">
			<div className="card">
				<div className="card_title">
					{tech.tech}
				</div>
				<div className="card_image">
					<img src={tech.logo} alt={tech.tech} />
				</div>
				<div>
					<div className="card_text">
						<div className="tag">
							<span className="type_tag" onClick={() => setFilter(tech.type.toLowerCase())}>Type:</span>
							<span className="type">{tech.type}</span>
						</div>
						<div className="tag">
							<span className="author_tag">Author:</span>
							<span className="author">{tech.author}</span>
						</div>
						<div className="tag">
							<span className="year_tag">Year created:</span>
							<span className="year">{tech.year}</span>
						</div>
						<div className="tag">
							<span className="license_tag">License:</span>
							<span className="license">{tech.license}</span>
						</div>
						<div className="tag">
							<span className="language_tag">Language:</span>
							<span className="language">{tech.language}</span>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

import React, { useEffect, useState } from 'react';
import ListService from '../../services/listService';
import ListCard from './listCard';
import './styles.css';
import SortUp from './icons/sortup.png';
import SortDown from './icons/sortdown.png';

export default function List() {
	const [list, setList] = useState([]);
	const [filter, setFilter] = useState('');
	const listService = new ListService();

	useEffect(() => {
		getList();
	}, []);

	const getList = async () => {
		try {
			const response = await listService.getList();
			setList(response);
		} catch (error) {}
	};

	const sortByName = (asc) => {
		let sortedList = list.sort((a, b) => a.tech.localeCompare(b.tech));

		asc ? setList([...sortedList]) : setList([...sortedList.reverse()]);
	};

	const filteredList = list.filter(
		(el) =>
			filter === '' ||
			el.tech.toLowerCase().includes(filter) ||
			el.type.toLowerCase().includes(filter)
	);

	return (
		<div>
			<div className="header">
				<span className="header_span">
					<input
						className="textfield"
						name="filter"
						type="text"
						placeholder="Filtrar.."
						value={filter}
						onChange={(e) => {
							setFilter(e.target.value.toLowerCase());
						}}
					/>
					<h2 className="clear" onClick={() => setFilter('')}>
						x
					</h2>
				</span>
				<span className="sort">
					<h5>Sort</h5>
					<img
						src={SortUp}
						className="icons"
						onClick={() => sortByName(true)}
					/>
					<img
						src={SortDown}
						className="icons"
						onClick={() => sortByName(false)}
					/>
				</span>
			</div>
			<ul className="cards">
				{filteredList
					? filteredList.map((l) => {
							return (
								<ListCard
									key={l.tech}
									tech={l}
									setFilter={setFilter}
								/>
							);
					  })
					: null}
			</ul>
			<div className="footer">
				<span>
					<h4 className='count'>Tecnologies: {filteredList.length}</h4>
				</span>
			</div>
		</div>
	);
}

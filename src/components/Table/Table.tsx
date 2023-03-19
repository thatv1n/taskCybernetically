import { useEffect } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Button } from '../Button';

import { currentPageSelector, stocksSelector } from './selector';

import { fetchStock } from './thunk';

import { ItemTable } from '../ItemTable/ItemTable';

import { setCurrentPage, setFormattedList } from './slice';

import './style.scss';

export const Table = () => {
	const stocks = useAppSelector(stocksSelector);
	const currentPage = useAppSelector(currentPageSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const obj = { offset: currentPage };
		dispatch(fetchStock(obj));
	}, [currentPage]);

	const onDragEnd = (result: DropResult) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (destination.index === source.index) {
			return;
		}
		const findElem = stocks[source.index];
		const newList = [...stocks];
		newList.splice(Number(draggableId), 1);
		newList.splice(destination.index, 0, findElem);

		dispatch(setFormattedList(newList));
	};

	const prev = () => {
		dispatch(setCurrentPage(currentPage - 10));
	};
	const next = () => {
		dispatch(setCurrentPage(currentPage + 10));
	};

	if (!stocks.length) {
		return <div>Loading...</div>;
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<table className='table'>
				<Droppable droppableId={'board'}>
					{(provided) => (
						<tbody ref={provided.innerRef} {...provided.droppableProps}>
							<tr className='table__header'>
								<th>№</th>
								<th>Key</th>
								<th>Entity Name</th>
								<th>Entity Address City Or Town</th>
								<th>Assets Current</th>
								<th>Net Income Loss</th>
								<th>Operating Income Loss</th>
							</tr>

							{stocks.map((item, i) => (
								<ItemTable item={item} index={i} key={i} />
							))}
							{provided.placeholder}
						</tbody>
					)}
				</Droppable>
			</table>
			<div className='table__buttons'>
				<Button click={prev} disabled={currentPage === 0}>
					Prev
				</Button>
				<Button click={next}>Next</Button>
			</div>
		</DragDropContext>
	);
};

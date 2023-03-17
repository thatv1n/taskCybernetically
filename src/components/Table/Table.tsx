import { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { Button } from '../Button';

import { stocksSelector } from './selector';

import { fetchStock } from './thunk';

import { ItemTable } from '../ItemTable/ItemTable';

import { setFormattedList } from './slice';

import './style.scss';

export const Table = () => {
	const stocks = useAppSelector(stocksSelector);

	const dispatch = useAppDispatch();

	const [params, setParams] = useState({ limit: 10, offset: 0 });

	useEffect(() => {
		dispatch(fetchStock(params));
	}, [params]);

	const onDragEnd = (result: any) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (destination.draggableId === source.draggableId && destination.index === source.index) {
			return;
		}
		const findElem = stocks[source.index];
		const newList = [...stocks];
		newList.splice(draggableId, 1);
		newList.splice(destination.index, 0, findElem);

		dispatch(setFormattedList(newList));
	};

	const prev = () => {
		if (params.offset >= 0) setParams((item) => ({ ...item, offset: item.offset - 10 }));
	};
	const next = () => {
		setParams((item) => ({ ...item, offset: item.offset + 10 }));
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
								<ItemTable item={item} i={i} key={i} />
							))}
							{provided.placeholder}
						</tbody>
					)}
				</Droppable>
			</table>
			<div className='table__buttons'>
				<Button click={prev} disabled={params.offset === 0}>
					Prev
				</Button>
				<Button click={next}>Next</Button>
			</div>
		</DragDropContext>
	);
};

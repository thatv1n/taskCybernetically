import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ITest } from './interface';

import './style.scss';

export const ItemTable: FC<ITest> = ({ item, index }) => {
	return (
		<Draggable draggableId={`${index}`} key={index} index={index}>
			{(provided) => (
				<tr
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className='item'
				>
					<td>{item.id}</td>
					<td>{item.key}</td>
					<td>{item.entityName || '-'}</td>
					<td>{item.EntityAddressCityOrTown || '-'}</td>
					<td>{item.AssetsCurrent || '-'}</td>
					<td>{item.NetIncomeLoss || '-'}</td>
					<td>{item.OperatingIncomeLoss || '-'}</td>
				</tr>
			)}
		</Draggable>
	);
};

import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { ITest } from './interface';

import './style.scss';

export const ItemTable: FC<ITest> = ({ item, i }) => {
	return (
		<Draggable draggableId={`${i}`} key={i} index={i}>
			{(provided) => (
				<tr
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className='item'
				>
					<td>{i + 1}</td>
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

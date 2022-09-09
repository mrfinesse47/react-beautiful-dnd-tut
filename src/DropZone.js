import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const DropZone = ({ droppableId, items }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <ul
          className='characters'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {items.map(({ id, name, thumb }, index) => {
            return (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className='characters-thumb'>
                      <img src={thumb} alt={`${name} Thumb`} />
                    </div>
                    <p>{name}</p>
                  </li>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default DropZone;

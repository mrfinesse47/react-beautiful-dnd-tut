import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DropZone from './DropZone';
import './App.css';

const charactersObj = {
  characters: [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
      thumb: '/images/gary.png',
    },
    {
      id: 'cato',
      name: 'Little Cato',
      thumb: '/images/cato.png',
    },
    {
      id: 'kvn',
      name: 'KVN',
      thumb: '/images/kvn.png',
    },
    {
      id: 'mooncake',
      name: 'Mooncake',
      thumb: '/images/mooncake.png',
    },
    {
      id: 'quinn',
      name: 'Quinn Ergon',
      thumb: '/images/quinn.png',
    },
  ],
  characters1: [
    {
      id: 'gary1',
      name: 'Gary Goodspeed',
      thumb: '/images/gary.png',
    },
    {
      id: 'cato1',
      name: 'Little Cato',
      thumb: '/images/cato.png',
    },
    {
      id: 'kvn1',
      name: 'KVN',
      thumb: '/images/kvn.png',
    },
    {
      id: 'mooncake1',
      name: 'Mooncake',
      thumb: '/images/mooncake.png',
    },
    {
      id: 'quinn1',
      name: 'Quinn Ergon',
      thumb: '/images/quinn.png',
    },
  ],
  characters2: [],
};

function App() {
  const [items, setItems] = useState(charactersObj);

  function handleOnDragEnd(move) {
    if (!move.destination) return;
    setItems((prevItems) => {
      const originArr = items[move.source.droppableId];
      const [reorderedItem] = originArr.splice(move.source.index, 1);
      const destinationArr = items[move.destination.droppableId];
      destinationArr.splice(move.destination.index, 0, reorderedItem);
      return prevItems;
    });
  }

  const itemsArr = [];

  for (const key in charactersObj) {
    itemsArr.push(
      <DropZone droppableId={key} items={charactersObj[key]} key={key} />
    );
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          {itemsArr}
        </DragDropContext>
      </header>
      <p>
        Images from{' '}
        <a href='https://final-space.fandom.com/wiki/Final_Space_Wiki'>
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default App;

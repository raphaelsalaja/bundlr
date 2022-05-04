import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';



function App()
{
  const [tabs, updatetabs] = useState(finalSpacetabs);

  function handleOnDragEnd(result)
  {
    if (!result.destination) return;

    const items = Array.from(tabs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updatetabs(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current Tabs</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tabs">
            {(provided) => (
              <ul className="tabs" {...provided.droppableProps} ref={provided.innerRef}>
                {tabs.map(({ id, name, thumb }, index) =>
                {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="tabs-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="tabs">
            {(provided) => (
              <ul className="tabs" {...provided.droppableProps} ref={provided.innerRef}>
                {tabs.map(({ id, name, thumb }, index) =>
                {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="tabs-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="tabs">
            {(provided) => (
              <ul className="tabs" {...provided.droppableProps} ref={provided.innerRef}>
                {tabs.map(({ id, name, thumb }, index) =>
                {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="tabs-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <p>
        Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
      </p>
    </div>
  );
}

export default App;
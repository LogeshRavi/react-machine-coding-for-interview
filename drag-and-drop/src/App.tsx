import React, { useState } from "react";

const DragAndDrop = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggedIndex, setDraggedIndex] = useState<any>(null);


  const handleDragStart = (e:any,index:any) => {
      setDraggedIndex(index)
  }


  const handleDragOver = (e:any) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  const handleDrop = (e:any, index:any) => {
    const newItems = [...items];

    // Remove the dragged item
    const [draggedItem] = newItems.splice(draggedIndex, 1);

    // Insert the dragged item at the new index
    newItems.splice(index, 0, draggedItem);

    setItems(newItems);

  };

  return (
    <div>
      <h3>Drag and Drop List</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e)=>handleDragStart(e,index)}
            onDragOver={(e)=>handleDragOver(e)}
            onDrop={(e)=>handleDrop(e,index)}
            style={{
              padding: "8px",
              margin: "4px",
              border: "1px solid #ccc",
              cursor: "move",
              backgroundColor: "#f9f9f9",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDrop;

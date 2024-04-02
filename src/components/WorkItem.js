import React from "react";

const WorkItem = ({ item, createdAt }) => {
  const addToCalendar = () => {
    console.log("Add to calendar:", item);
  };

  return (
    <div className="work-item">
      <div className="work-item-content">
        <p>{item}</p>
        <p className="created-at">Created at: {createdAt}</p>
        <button className="add-button" onClick={addToCalendar}>
        Add to Calendar
      </button>
      </div>
      
    </div>
  );
};

export default WorkItem;

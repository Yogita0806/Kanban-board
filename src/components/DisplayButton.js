// // src/components/DisplayButton.js
// import React, { useState } from 'react';

// const DisplayButton = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="display-button-container">
//       <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
//         Display
//       </button>
//       {isOpen && (
//         <div className="dropdown-menu">
//           <div className="dropdown-item">
//             <label>Grouping</label>
//             <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
//               <option value="status">Status</option>
//               <option value="user">User</option>
//               <option value="priority">Priority</option>
//             </select>
//           </div>
//           <div className="dropdown-item">
//             <label>Ordering</label>
//             <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
//               <option value="priority">Priority</option>
//               <option value="title">Title</option>
//             </select>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisplayButton;

// src/components/DisplayButton.js  
import React, { useState } from 'react';  

const DisplayButton = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {  
  const [isOpen, setIsOpen] = useState(false);  

  return (  
    <div className="display-button-container">  
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>  
        <img src="/images/Display.svg" alt="Display" className="display-icon" />  
        Display  
        <img src="/images/down.svg" alt="Down" className="down-icon" />  
      </button>  
      {isOpen && (  
        <div className="dropdown-menu">  
          <div className="dropdown-item">  
            <label>Grouping</label>  
            <div className="select-wrapper">  
              <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>  
                <option value="status">Status</option>  
                <option value="user">User</option>  
                <option value="priority">Priority</option>  
              </select>  
              <img src="/images/down.svg" alt="Down" className="select-icon" />  
            </div>  
          </div>  
          <div className="dropdown-item">  
            <label>Ordering</label>  
            <div className="select-wrapper">  
              <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>  
                <option value="priority">Priority</option>  
                <option value="title">Title</option>  
              </select>  
              <img src="/images/down.svg" alt="Down" className="select-icon" />  
            </div>  
          </div>  
        </div>  
      )}  
    </div>  
  );  
};  

export default DisplayButton;
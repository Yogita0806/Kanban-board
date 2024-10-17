// import React from 'react';  

// const Card = ({ ticket, user }) => {  
//   return (
//     <div className="card">  
//       <div className="card-header">  
//         <span className="ticket-id">{ticket.id}</span>  
//         <span className={`user-avatar ${user.available ? 'available' : ''}`}>  
//           {user.name.charAt(0).toUpperCase()}  
//         </span>  
//       </div>  
//       <h3 className="card-title">{ticket.title}</h3>  
//       <div className="card-footer">  
//         <div className="priority-tag">  
//           <img src="/images/SVG - Urgent Priority Grey.svg" alt="Priority" className="priority-icon" />  
//           <span className="tag">{ticket.tag}</span>  
//         </div>  
//       </div>
      
//     </div>  
//   );  
// };  

// export default Card; 


// import React from 'react';  

// const Card = ({ ticket, user, grouping }) => {  
//   const getStatusIcon = (status) => {  
//     const statusIcons = {  
//       'In progress': 'in-progress.svg',  
//       'Todo': 'To-do.svg',  
//       'Backlog': 'Backlog.svg',  
//       'Done': 'Done.svg',  
//       'Cancelled': 'Cancelled.svg'  
//     };  
//     return statusIcons[status] || '';  
//   };  

//   return (  
//     <div className="card">  
//       <div className="card-header">  
//         <span className="ticket-id">{ticket.id}</span>  
//         <span className={`user-avatar ${user.available ? 'available' : ''}`}>  
//           {user.name.charAt(0).toUpperCase()}  
//         </span>  
//       </div>  
//       <h3 className="card-title">  
//         {grouping !== 'status' && (  
//           <img  
//             src={`/images/${getStatusIcon(ticket.status)}`}  
//             alt={ticket.status}  
//             className="status-icon"  
//           />  
//         )}  
//         {ticket.title}  
//       </h3>  
//       <div className="card-footer">  
//         <div className="priority-tag">  
//           <img src="/images/SVG - Urgent Priority Grey.svg" alt="Priority" className="priority-icon" />  
//           <span className="tag">{ticket.tag}</span>  
//         </div>  
//       </div>  
//     </div>  
//   );  
// };  

// export default Card;

import React from 'react';  

const Card = ({ ticket, user, grouping }) => {  
  const getStatusIcon = (status) => {  
    const statusIcons = {  
      'In progress': 'in-progress.svg',  
      'Todo': 'To-do.svg',  
      'Backlog': 'Backlog.svg',  
      'Done': 'Done.svg',  
      'Cancelled': 'Cancelled.svg'  
    };  
    return statusIcons[status] || '';  
  };  

  return (  
    <div className="card">  
      <div className="card-header">  
        <span className="ticket-id">{ticket.id}</span>  
        <span className={`user-avatar ${user.available ? 'available' : ''}`}>  
          {user.name.charAt(0).toUpperCase()}  
        </span>  
      </div>  
      <h3 className="card-title">  
        {grouping !== 'status' && (  
          <img  
            src={`/images/${getStatusIcon(ticket.status)}`}  
            alt={ticket.status}  
            className="status-icon"  
          />  
        )}  
        {ticket.title}  
      </h3>  
      <div className="card-footer">  
        <div className="priority-tag">  
          <img src="/images/SVG - Urgent Priority Grey.svg" alt="Priority" className="priority-icon" />  
          <span className="tag">{ticket.tag}</span>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Card;
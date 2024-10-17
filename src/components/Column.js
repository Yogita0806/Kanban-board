// import React from 'react';  
// import Card from './Card';  

// const Column = ({ title, tickets, users, grouping }) => {  
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
//     <div className="column">  
//       <h2 className="column-title">  
//         {grouping === 'status' && (  
//           <img src={`/images/${getStatusIcon(title)}`} alt={title} className="status-icon" />  
//         )}  
//         <span>{title}</span>  
//         <span className="ticket-count">{tickets.length}</span>  
//       </h2>  
//       {tickets.map(ticket => (  
//         <Card key={ticket.id} ticket={ticket} user={users.find(u => u.id === ticket.userId)} />  
//       ))}  
//     </div>  
//   );  
// };  

// export default Column;  

import React from 'react';  
import Card from './Card';  

const Column = ({ title, tickets, users, grouping }) => {  
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

  const getPriorityIcon = (priority) => {  
    const priorityIcons = {  
      'Urgent': 'SVG - Urgent Priority colour.svg',  
      'High': 'Img - High Priority.svg',  
      'Medium': 'Img - Medium Priority.svg',  
      'Low': 'Img - Low Priority.svg',  
      'No priority': 'No-priority.svg'  
    };  
    return priorityIcons[priority] || '';  
  };  

  const getIcon = () => {  
    if (grouping === 'status') {  
      return getStatusIcon(title);  
    } else if (grouping === 'priority') {  
      return getPriorityIcon(title);  
    }  
    return '';  
  };  

  return (  
    <div className="column">  
      <div className="column">  
      <h2 className="column-title">  
        {(grouping === 'status' || grouping === 'priority') && (  
          <img src={`/images/${getIcon()}`} alt={title} className="column-icon" />  
        )}  
        <span>{title}</span>  
        <span className="ticket-count">{tickets.length}</span>  
      </h2>  
      {tickets.map(ticket => (  
        <Card   
          key={ticket.id}   
          ticket={ticket}   
          user={users.find(u => u.id === ticket.userId)}   
          grouping={grouping}  
        />  
      ))}  
    </div>
    </div>  
  );  
  // return (  
  //   <div className="column">  
  //     <h2 className="column-title">  
  //       {(grouping === 'status' || grouping === 'priority') && (  
  //         <img src={`/images/${getIcon()}`} alt={title} className="column-icon" />  
  //       )}  
  //       <span>{title}</span>  
  //       <span className="ticket-count">{tickets.length}</span>  
  //     </h2>  
  //     {tickets.map(ticket => (  
  //       <Card   
  //         key={ticket.id}   
  //         ticket={ticket}   
  //         user={users.find(u => u.id === ticket.userId)}   
  //         grouping={grouping}  
  //       />  
  //     ))}  
  //   </div>  
  // ); 
};  

export default Column;
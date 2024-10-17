// src/components/KanbanBoard.js
import React, { useState, useEffect } from 'react';
import Column from './Column';
import DisplayButton from './DisplayButton';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const groupTickets = () => {
    let grouped = {};
    if (grouping === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        (acc[user.name] = acc[user.name] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      const priorityNames = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
      grouped = tickets.reduce((acc, ticket) => {
        (acc[priorityNames[ticket.priority]] = acc[priorityNames[ticket.priority]] || []).push(ticket);
        return acc;
      }, {});
    }
    return grouped;
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else if (sorting === 'title') {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const groupedTickets = groupTickets();
  Object.keys(groupedTickets).forEach(key => {
    groupedTickets[key] = sortTickets(groupedTickets[key]);
  });

  return (  
    <div className="kanban-board">  
      <DisplayButton  
        grouping={grouping}  
        sorting={sorting}  
        onGroupingChange={setGrouping}  
        onSortingChange={setSorting}  
      />  
      <div className="board-columns">  
        {Object.entries(groupedTickets).map(([key, tickets]) => (  
          <Column   
            key={key}   
            title={key}   
            tickets={tickets}   
            users={users}   
            grouping={grouping}   
          />  
        ))}  
      </div>
    </div>  
  );  
};

export default KanbanBoard;
 

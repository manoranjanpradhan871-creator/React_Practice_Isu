import React, { useState } from "react";

const UserList = () => {
  const [users] = useState([
    { id: 1, name: "Amit", isAdmin: true },
    { id: 2, name: "Rahul", isAdmin: false },
    { id: 3, name: "Sneha", isAdmin: true },
    { id: 4, name: "Priya", isAdmin: false },
    { id: 5, name: "Karan", isAdmin: true }
  ]);

  const [showAdmins, setShowAdmins] = useState(false);

  // Filter users based on toggle
  const filteredUsers = showAdmins
    ? users.filter(user => user.isAdmin)
    : users;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>User List</h2>

      <button
        onClick={() => setShowAdmins(!showAdmins)}
        style={{
          padding: "10px 15px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        {showAdmins ? "Show All Users" : "Show Only Admins"}
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredUsers.map(user => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              margin: "5px auto",
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: user.isAdmin ? "#e6f7ff" : "#f9f9f9"
            }}
          >
            {user.name} {user.isAdmin && "(Admin)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
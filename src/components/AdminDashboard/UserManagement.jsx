import React from "react";

function UserManagement() {
  const users = [
    { name: "John Doe", email: "john@example.com", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  ];

  return (
    <div className="user-management-container">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <button>Activate</button>
                <button>Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;

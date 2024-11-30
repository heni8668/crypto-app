import React, { useEffect, useState } from "react";
import '../../styles/responsive-table.css'

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    send: "",
    transfer: "",
    deposit: "",
    receive: "",
  });

  // Fetch users on initial load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://crypto2-j13c.onrender.com/api/auth/"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Function to handle updating user information
  const handleUpdateUser = async (userId) => {
    try {
      const response = await fetch(
        `https://crypto2-j13c.onrender.com/api/auth/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        fetchUsers(); // Refresh user list
        setIsModalOpen(false); // Close modal
      } else {
        console.error("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Function to handle deleting a user
  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://crypto2-j13c.onrender.com/api/auth/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        fetchUsers(); // Refresh user list
      } else {
        console.error("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle opening modal to edit user
  const openModal = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      send: user.send,
      transfer: user.transfer,
      deposit: user.deposit,
      receive: user.receive,
    });
    setIsModalOpen(true);
  };

  // Handle form change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <>
      {/* User Management Table */}
      <div>
        <h2>User Management</h2>

        <table className="responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Send</th>
              <th>Transfer</th>
              <th>Deposite</th>
              <th>Receive</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.send}</td>
                <td>{item.transfer}</td>
                <td>{item.deposit}</td>
                <td>{item.receive}</td>
                <td className="action-buttons">
                  <button className="edit-btn" onClick={() => openModal(item)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Updating User */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
            >
              <h3 className="modal-title">Edit User</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateUser(selectedUser._id);
                }}
                className="modal-form"
              >
                {/* Input Fields */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Enter name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="send">Send</label>
                  <input
                    type="number"
                    id="send"
                    name="send"
                    value={formData.send}
                    onChange={handleFormChange}
                    placeholder="Send amount"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="transfer">Transfer</label>
                  <input
                    type="number"
                    id="transfer"
                    name="transfer"
                    value={formData.transfer}
                    onChange={handleFormChange}
                    placeholder="Transfer amount"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="deposit">Deposit</label>
                  <input
                    type="number"
                    id="deposit"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleFormChange}
                    placeholder="Deposit amount"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="receive">Receive</label>
                  <input
                    type="number"
                    id="receive"
                    name="receive"
                    value={formData.receive}
                    onChange={handleFormChange}
                    placeholder="Receive amount"
                    min="0"
                  />
                </div>

                {/* Action Buttons */}
                <div className="modal-actions">
                  <button type="submit" className="btn btn-update">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-cancel"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserManagement;

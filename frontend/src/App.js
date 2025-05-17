import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/users'; // This will call our Flask backend

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  const fetchUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  const createUser = async () => {
    await axios.post(API, form);
    setForm({ name: '', email: '' });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>React CRUD App</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        style={{ marginLeft: '1rem' }}
      />
      <button onClick={createUser} style={{ marginLeft: '1rem' }}>Add</button>
      <ul style={{ marginTop: '2rem' }}>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => deleteUser(u.id)} style={{ marginLeft: '1rem' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

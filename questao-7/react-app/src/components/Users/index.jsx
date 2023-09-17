import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'

function Users() {
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editingUserName, setEditingUserName] = useState('');

    useEffect(() => {
        fetch("http://localhost:4000/usuarios")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error("Erro ao buscar usuários:", err));
    }, []);

    const handleEditClick = (userId, currentName) => {
        setEditingUserId(userId);
        setEditingUserName(currentName);
    };

    const handleNameChange = (e) => {
        setEditingUserName(e.target.value);
    };

    const handleSaveClick = () => {
        const updatedUsers = users.map(user => {
            if (user.id === editingUserId) {
                return {
                    ...user,
                    name: editingUserName
                };
            }
            return user;
        });
        setUsers(updatedUsers);
        setEditingUserId(null);
    };
    return (
      <div className={styles.userList}>
          <h2>Lista de Usuários</h2>
          <ul>
              {users.map(user => (
                  <li key={user.id}>
                      {editingUserId === user.id ? (
                          <>
                              <button onClick={handleSaveClick}>Salvar</button>
                              <input
                                  value={editingUserName}
                                  onChange={handleNameChange}
                              />
                          </>
                      ) : (
                          <>
                              <button onClick={() => handleEditClick(user.id, user.name)}>Editar</button>
                              {user.name}
                          </>
                      )}
                  </li>
              ))}
          </ul>
      </div>
  );
                      }
export default Users;
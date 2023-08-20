import React, { useState } from 'react';
import { createClient } from '../services/requests';
import { useNavigate } from 'react-router-dom';

const statuses = ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'];

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createClient({ name, email, cpf, phone, status })
    navigate('/clients');
  };

  const handleGoBack = () => {
    navigate('/clients');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e, setName)}
          placeholder="Nome"
          minLength={3}
          required
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
          placeholder="Email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={cpf}
          onChange={(e) => handleInputChange(e, setCpf)}
          placeholder="CPF"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => handleInputChange(e, setPhone)}
          placeholder="Telefone"
          pattern="\d{10,11}"
          required
        />
      </div>
      <div>
      <select value={status} onChange={(e) => handleInputChange(e, setStatus)} required>
          <option value="" disabled>
            Status
          </option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit">Criar</button>
        <button 
          type="button"
          onClick={ handleGoBack }
        >
          Voltar
        </button>
      </div>
    </form>
  );
}

export default Formulario;
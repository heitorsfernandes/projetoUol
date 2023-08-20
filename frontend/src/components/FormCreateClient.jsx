import React, { useState } from 'react';
import { createClient } from '../services/requests';
import { useNavigate } from 'react-router-dom';
import { cpf } from 'cpf-cnpj-validator';
import * as EmailValidator from 'email-validator';


const statuses = ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'];

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpfInput, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidCPF = cpf.isValid(cpfInput);
    const isValidEmail = EmailValidator.validate(email);
    if (!isValidCPF) {
      return alert('CPF inválido');
    }

    if (!isValidEmail) {
      return alert('Email inválido');
    }

    await createClient({ name, email, cpf: cpfInput, phone, status })
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
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={cpfInput}
          onChange={(e) => handleInputChange(e, setCpf)}
          placeholder="CPF"
          title="Digite apenas os números do CPF (11 dígitos)"
          pattern="\d{11}"
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
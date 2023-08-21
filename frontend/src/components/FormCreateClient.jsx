import React, { useState, useEffect, useContext } from 'react';
import { createClient, updateClient } from '../services/requests';
import { useNavigate } from 'react-router-dom';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import * as EmailValidator from 'email-validator';
import AppContext from '../context/AppContext';

const statuses = ['Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'];

function Formulario() {
  const { editClient, setEditClient } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (editClient) {
      setFormData(editClient);
    } else {
      setFormData({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        status: '',
      });
    }
  }, [editClient]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id, name, email, cpf, phone, status } = editClient || formData; // Use formData if editClient is null

    const isValidCPF = cpfValidator.isValid(cpf);
    const isValidEmail = EmailValidator.validate(email);

    if (!isValidCPF) {
      return alert('CPF inválido');
    }

    if (!isValidEmail) {
      return alert('Email inválido');
    }

    if (editClient) {
      await updateClient({ id, name, email, cpf, phone, status }); // Call update function instead of create
      setEditClient(null); // Clear editClient after updating
    } else {
      await createClient({ name, email, cpf, phone, status });
    }

    navigate('/clients');
  };

  const handleGoBack = () => {
    setEditClient(null); // Clear editClient when going back
    navigate('/clients');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Nome"
          minLength={3}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
          placeholder="CPF"
          title="Digite apenas os números do CPF (11 dígitos)"
          pattern="\d{11}"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Telefone"
          pattern="\d{10,11}"
          required
        />
      </div>
      <div>
        <select
          name="status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          required
        >
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
        <button type="submit">{editClient ? 'Editar' : 'Criar'}</button>
        <button type="button" onClick={handleGoBack}>
          Voltar
        </button>
      </div>
    </form>
  );
}

export default Formulario;
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
      setFormData({
        name: editClient.name,
        email: editClient.email,
        cpf: editClient.cpf,
        phone: editClient.phone,
        status: editClient.status,
      });
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

    const isValidCPF = cpfValidator.isValid(formData.cpf);
    const isValidEmail = EmailValidator.validate(formData.email);

    if (!isValidCPF) {
      return alert('CPF inválido');
    }

    if (!isValidEmail) {
      return alert('Email inválido');
    }

    if (editClient) {
      const { id } = editClient;
      await updateClient({
        id,
        name: formData.name,
        email: formData.email,
        cpf: formData.cpf,
        phone: formData.phone,
        status: formData.status,
      });
      setEditClient(null);
    } else {
      await createClient({
        name: formData.name,
        email: formData.email,
        cpf: formData.cpf,
        phone: formData.phone,
        status: formData.status,
      });
    }

    navigate('/clients');
  };

  const handleGoBack = () => {
    setEditClient(null);
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
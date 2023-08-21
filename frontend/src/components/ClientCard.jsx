import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function ClientCard({ id,name, email, cpf, phone, status }) { 
  const { setEditClient } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = () => {
    console.log(id, name)
    setEditClient({ id, name, email, cpf, phone, status });
    navigate('/client/edit');
  }

    return ( 
      <div className="client-info">
        <div>
          <p className="client-name">{name}</p>
          <p className="client-email">{email}</p>
        </div>
        <div>
          <p className="client-cpf">{cpf}</p>
          <p className="client-phone">{phone}</p>
        </div>
        <p className={`client-status ${status}`}>
          {status}
        </p>
        <button 
          className="edit-button"
          onClick={ () => handleChange()}
        >
            Editar
        </button>
      </div>
    ) 
}
        
export default ClientCard;

ClientCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};
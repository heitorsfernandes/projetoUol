import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ClientCard({ name, email, cpf, phone, status }) { 
    return ( 
      <div className="client-info">
        <div>
          <button disabled={true} className="edit-button">Nome</button>
          <p className="client-name">{name}</p>
          <p className="client-email">{email}</p>
        </div>
        <di>
          <p className="client-cpf">{cpf}</p>
          <p className="client-phone">{phone}</p>
        </di>
        <p className={`client-status ${status}`}>
          {status}
        </p>
        <button className="edit-button">Editar</button>
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
import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box, Grid } from "@mui/material";

function ClientCard({ id, name, email, cpf, phone, status }) {
  const { setEditClient } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setEditClient({ id, name, email, cpf, phone, status });
    navigate('/client/edit');
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      style={{
        border: '1px solid #E0E0E0',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        marginRight: '100px',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box 
          style={{ 
            width: '30%',
          }}>
          <Typography variant="body1" style={{ paddingLeft: '15px' }}>
            {name}
          </Typography>
          <Typography variant="body2" style={{ paddingLeft: '15px' }} color="textSecondary">
            {email}
          </Typography>
        </Box>
        <Box style={{ width: '20%' }}>
          <Typography variant="body1">{cpf}</Typography>
          <Typography variant="body2" color="textSecondary">
            {phone}
          </Typography>
        </Box>
        <Box style={{ width: '20%', textAlign: 'center'}}>
          <Typography variant="body1">{status}</Typography>
        </Box>
        <Box style={{ width: '30%', textAlign: 'right' }}>
          <Button
            variant={isHovered ? 'contained' : 'outlined'}
            style={{
              backgroundColor: isHovered ? 'rgb(226, 153, 51)' : 'white',
              color: isHovered ? 'white' : 'rgb(226, 153, 51)',
              border: '1px solid #e29933',
              marginRight: '15px',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleChange}
          >
            Editar
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default ClientCard;

ClientCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

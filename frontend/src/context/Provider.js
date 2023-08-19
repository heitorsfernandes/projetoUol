import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) { 
    const [clients, setClients] = React.useState([]);
    
    const context = {
        clients,
        setClients,
    };

    return (
        <AppContext.Provider value={ context }>
            { children }
        </AppContext.Provider>
    );
}
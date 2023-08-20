import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { getClients } from '../services/requests';
import ClientCard from '../components/ClientCard';

function ClientsBoard() {
    const { clients, setClients } = useContext(AppContext);

    useEffect(() => { 
        const fetchClients = async () => {
            const clientsList = await getClients();
            console.log(clientsList);
            setClients(clientsList);
        };
        fetchClients();
        }, []);

    const clientListHtml = clients.map((client) => (
        <ClientCard 
            key={client.id}
            name={client.name}
            email={client.email}
            cpf={client.cpf}
            phone={client.phone}
            status={client.status}
        />
    ));
            
    
    return (
        <>
            <nav></nav>
            <main>
                <h3> Painel de clientes </h3>
                <div>
                    <div>
                        <span> Listagem de usuários </span>
                        <span> Escolha um cliente para visualizar os detalhes </span>
                    </div>
                    <button className="create-client"> Novo Cliente </button>
                </div>
                { clientListHtml }
                {clients.length === 1 ? (
                    <span>Exibindo 1 cliente</span>
                    ) : (
                    <span>Exibindo {clients.length} clientes</span>
                )}
            </main>
        </>
    );
    }

export default ClientsBoard;
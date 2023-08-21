import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { getClients } from '../services/requests';
import ClientCard from '../components/ClientCard';
import Navbar from '../components/Navbar';

function ClientsBoard() {
    const { clients, setClients } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => { 
        const fetchClients = async () => {
            const clientsList = await getClients();
            setClients(clientsList);
        };
        fetchClients();
        }, []);

    const clientListHtml = clients.map((client) => (
        <ClientCard 
            key={client.id}
            id={client.id}
            name={client.name}
            email={client.email}
            cpf={client.cpf}
            phone={client.phone}
            status={client.status}
        />
    ));
            
    
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <h3> Painel de clientes </h3>
                <div>
                    <div>
                        <span> Listagem de usuários </span>
                        <p> Escolha um cliente para visualizar os detalhes </p>
                    </div>
                    <button 
                      className="button-create-client"
                      onClick={() => navigate('/client/edit')}
                    > 
                        Novo Cliente 
                    </button>
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
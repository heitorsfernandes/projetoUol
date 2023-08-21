import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { getClients } from '../services/requests';
import ClientCard from '../components/ClientCard';
import Navbar from '../components/Navbar';
import { MainStyle } from '../styles/MainStyle';
import { InfoBoardStyle, TextWrapper, ButtonStyle } from '../styles/InfoBoardStyle';
import { Typography } from '@mui/material';

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
                <MainStyle>
                    <Typography 
                        variant="h6" 
                        fontFamily="UOLTextBold"
                        fontWeight={500} 
                    > 
                        Painel de clientes 
                    </Typography>
                    <InfoBoardStyle>
                        <TextWrapper>
                        <Typography variant="body1">Listadem de usuários </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Escolha um cliente para visualizar os detalhes
                        </Typography>
                        </TextWrapper>
                        <ButtonStyle
                            className="button-create-client"
                            onClick={() => navigate('/client/edit')}
                        >
                            Novo Cliente 
                        </ButtonStyle>
                    </InfoBoardStyle>
                    { clientListHtml }
                    <Typography variant="body2" color="text.secondary" >
                        {clients.length === 1 ? (
                            <span>Exibindo 1 cliente</span>
                            ) : (
                            <span>Exibindo {clients.length} clientes</span>
                        )}
                    </Typography>
                </MainStyle>
            </main>
        </>
    );
    }

export default ClientsBoard;
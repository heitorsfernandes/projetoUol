import React from 'react';
import Navbar from '../components/Navbar';
import FormCreateClient from '../components/FormCreateClient';
import { MainStyle } from '../styles/MainStyle';
import { Typography } from "@mui/material";


function ClientEdit() {
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
                    <div className="client-form">
                        <Typography variant="body1">Novo usuário</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Informe os campos a seguir para criar novo usuário
                        </Typography>
                    </div>
                <FormCreateClient />
                </MainStyle>
            </main>
        </>
    );
    }

export default ClientEdit;
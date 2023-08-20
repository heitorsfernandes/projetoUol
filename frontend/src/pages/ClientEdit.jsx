import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FormCreateClient from '../components/FormCreateClient';

function ClientEdit() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <h3> Painel de clientes </h3>
                <div className="client-form">
                    <span> Listagem de usuários </span>
                    <p> Escolha um cliente para visualizar os detalhes </p>
                </div>
                <FormCreateClient />
            </main>
        </>
    );
    }

export default ClientEdit;
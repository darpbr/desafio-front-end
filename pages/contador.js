import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const contador = () => {

    const [qtd, setQtd] = useState(0);

    function adicionar() {
        setQtd(qtd + 1);
        console.log('Quantidade atual:', qtd);
    }

    return (
        <Pagina>
            <h1>contador</h1>
            <Button variant="primary" onClick={adicionar}>
                +
            </Button>
            <h2 className='mt-3'>{qtd}</h2>
        </Pagina>
    )
}

export default contador
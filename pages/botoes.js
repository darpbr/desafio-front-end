import Pagina from '@/components/Pagina'
import React from 'react'
import { Button } from 'react-bootstrap'

const botoes = () => {
    return (
        <Pagina>
            <h1>Botoes</h1>

            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
                'link',
            ].map((variant) => (
                <p>
                    <Button key={variant} variant={variant}>
                        {variant}
                    </Button>
                </p>
            ))}

        </Pagina>
    )
}

export default botoes
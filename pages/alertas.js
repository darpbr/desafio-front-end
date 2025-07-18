import Pagina from '@/components/Pagina'
import React from 'react'
import { Alert } from 'react-bootstrap'

const alertas = () => {
    return (
        <Pagina>
            <h1>Alertas</h1>

      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
        </Pagina>
    )
}

export default alertas
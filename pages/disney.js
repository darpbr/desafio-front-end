import Pagina from '@/components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const disney = () => {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        axios.get('https://api.disneyapi.dev/character')
            .then(res => {
                setPersonagens(res.data.data)
            })
            .catch(err => {
                console.error("Erro ao buscar personagens:", err)
            })
    }, [])

    return (
        <Pagina>

            <h1>API da Disney</h1>

            <Row md={4}>
                {personagens.map((personagem) => (
                    <Col className='mb-3' key={personagem._id}>
                        <Card style={{ width: '18rem' }} className='mb-3' bg='primary' text='white'>
                            <Card.Img variant="top" src={personagem.imageUrl} height={200} alt={personagem.name} />
                            <Card.Body>
                                <Card.Title>{personagem.name}</Card.Title>
                                <Card.Text>
                                    Filmes: {personagem.films.join(', ')}
                                    Séries: {personagem.tvShows.join(', ')}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Pagina>
    )
}

export default disney
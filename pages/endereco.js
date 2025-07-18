import Pagina from '@/components/Pagina'
import axios from 'axios'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const endereco = () => {

    const { register, handleSubmit, setValue } = useForm();

    function buscarCep(event) {
        const cep = event.target.value;

        if (cep.length === 8) {
            console.log('Buscando CEP...');
            console.log(cep);

            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    const data = response.data;
                    if (!data.erro) {
                        setValue('uf', data.uf);
                        setValue('cidade', data.localidade);
                        setValue('bairro', data.bairro);
                        setValue('logradouro', data.logradouro);
                        setValue('complemento', data.complemento);
                    } else {
                        setValue('uf', '');
                        setValue('cidade', '');
                        setValue('bairro', '');
                        setValue('logradouro', '');
                        setValue('complemento', '');
                    }
                    console.log(data);
                })
                .catch(error => {
                    console.error('Erro ao buscar CEP:', error);
                    setValue('uf', '');
                    setValue('cidade', '');
                    setValue('bairro', '');
                    setValue('logradouro', '');
                    setValue('complemento', '');
                });
        }
    }

    function salvar(dados){
        console.log('Dados salvos:', dados);
        // Aqui você pode implementar a lógica para salvar os dados, como enviar para uma API ou armazenar localmente.
    }

    return (
        <Pagina>
            <h1>Endereço</h1>
            <Form>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control type="text" placeholder="00000000" {...register('cep')} onChange={buscarCep} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="uf">
                    <Form.Label>UF: </Form.Label>
                    <Form.Control type="text" {...register('uf')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control type="text" {...register('cidade')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text" {...register('bairro')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control type="text" {...register('logradouro')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control type="text" {...register('complemento')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número: </Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>

                <Button variant="success" onClick={handleSubmit(salvar)}>
                    Enviar
                </Button>
            </Form>

        </Pagina>
    )
}

export default endereco
import {listClientes,addCliente,getClienteById,removeCliente,vincularCliente,desvincularCliente} from "../models/ClienteModel.js"

export const list = async (req,res) => {
    try{
        let Clientes = await listClientes();
        return res.json(Clientes);       
    }catch(e){
        return res.status(400).send({'Status':false,'Message':e.message});
    };
};

export const add = async(req, res) => {
    try{        
        await addCliente(req.body.data_cadastro_cliente,req.body.cpf_cliente,req.body.telefone_cliente,req.body.email_cliente,req.body.senha_cliente);
        return res.status(200).send({'Status':true});
    }catch(e){
        return res.status(400).send({'Status':false,'Message':e.message});
    };
};

export const getById = async(req, res) => {
    try{
        let Cliente = await getClienteById(req.body.id);
        return res.json(Cliente);
    }catch(e){
        return res.status(400).send({'Status':false,'Message':e.message});
    }
};

export const remove = async(req, res) => {
    try{
        await removeCliente(req.body.cliente_id_cliente);
        return res.status(200).send({'Status':true});
    }catch(e){
        return res.status(400).send({'Status':false,'Message':e.message});
    };
};


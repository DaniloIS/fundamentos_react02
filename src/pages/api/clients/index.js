export default function handlerClient(req, res) {

    if(req.method === 'GET') {
        res.status(200).json({
            id: 1,
            name: 'Danilo',
            age: 23
        });  
    } else {
        res.status(405).send();
    }
    
}
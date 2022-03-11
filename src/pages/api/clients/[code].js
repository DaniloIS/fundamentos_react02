export default function handlerCode(req, res) {

    const code = req.query.code;

    if(req.method === 'GET') {
        res.status(200).json({
            id: code,
            name: 'Danilo',
            age: 23
        });  
    } else {
        res.status(405).send();
    }
    
}
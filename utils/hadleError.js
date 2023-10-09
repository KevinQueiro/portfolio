export const handleError = (error, res) => {
    switch (error.code) {
        case 1:
            res.status(401).send('Wrong password');
            break;
    
        default:
            res.status(401).send(`${error.errors? Object.keys(error.errors)[0] : 'password'} is required`)
            break;
    }
}
import bcrypt from 'bcrypt';

const access = async (pass, hash) => {
    const passwordsMatch = await bcrypt.compare(pass, hash);
    if (!passwordsMatch) {
        const error = new Error('Password doesn not match');
        error.code = 1; 
        throw error;
    }
    return passwordsMatch;
}

export default access;
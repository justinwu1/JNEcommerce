import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin user',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Doe',
        email:'John@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Justin Wu',
        email:'Justin@example.com',
        password:bcrypt.hashSync('123456',10),
    }
]

export default users;
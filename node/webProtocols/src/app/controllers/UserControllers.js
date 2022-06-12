import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (userExists) {
            return res.status(400).json({
                error: 'Usuário Já Cadastrado!'
            });
        }

        const { id, name, email, provider } = await User.create(req.body);
        return res.json({ id, name, email, provider });
    }

    async update(req, res) {
        // console.log(req.userId) userId comres from middleware auth.js
        
        return res.json({
             message: true
        })
    }
}
export default new UserController();

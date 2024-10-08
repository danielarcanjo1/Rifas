import User from '../models/User.js';


const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error; 
  }
};

const setUser = async (req, res) => {
  console.log(req.body);
  const {
    name,
    username,
    email,
    password,
    confirmPassword,
    cpf,
    date_of_birth,
    phone,
    confirmPhone,
    address,
  } = req.body;

  const {
    cep,
    street,
    number,
    district,
    address_complement,
    uf,
    city,
    reference_point,
  } = address;

  if (
    !name ||
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !cpf ||
    !date_of_birth ||
    !phone ||
    !confirmPhone ||
    !cep ||
    !street ||
    !number ||
    !district ||
    !address_complement ||
    !uf ||
    !city ||
    !reference_point
  ) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "As senhas não coincidem" });
  }

  if (phone !== confirmPhone) {
    return res.status(400).json({ message: "Os números de telefones não coincidem" });
  }

  try {
    const userExistCpf = await User.findOne({ where: { cpf } });
    if (userExistCpf) {
      return res.status(400).json({ message: "Já existe um usuário registrado com esse CPF" });
    }

    const userExistUsername = await User.findOne({ where: { username } });
    if (userExistUsername) {
      return res.status(400).json({
        message: "Já existe um usuário registrado com esse nome de usuário",
      });
    }

    const newUser = await User.create({
      name,
      username,
      email,
      password,
      cpf,
      date_of_birth,
      phone,
      cep,
      street,
      number,
      district,
      address_complement,
      uf,
      city,
      reference_point,
    });

    res.status(201).json({ message: "Usuário criado com sucesso", user: newUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Erro no servidor" });
  }
};

export { getUsers, setUser }


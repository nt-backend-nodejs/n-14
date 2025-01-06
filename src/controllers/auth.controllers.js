const users = {
  ali: {
    full_name: 'per cey jecksen',
    username: 'percey',
    email: 'percey@gamil.com',
    age: 11,
    gender: 'MALE',
    password: 'qwer12345',
    country: 'USA',
    phone_number: '+998946110061',
  },
};

export const registerController = (req, res) => {
  const body = req.body;
  /**
   * full_name
   * username
   * email
   * age
   * gender
   * password
   * country
   * phone_number
   */
  const userExisty = users[body.username];
  if (userExisty) {
    res.status(409).send({
      message: 'username already exists',
    });
    return;
  }
  //ali
  const newUser = {
    ...body,
    id: Object.keys(users).length + 1,
  };

  users[body.username] = newUser;

  res.status(201).send(newUser);
};

export const loginController = (req, res) => {
  const body = req.body;

  const username = body.username; // ali

  const userExists = users[username]; // users["ali"] or users.ali

  if (!userExists) {
    res.status(404).send({
      message: 'User not found!',
    });
    return;
  }

  const passwordMatch = userExists.password === body.password;
  if (!passwordMatch) {
    res.status(401).send({
      message: 'username or password wrong!',
    });
    return;
  }

  res.status(200).send({ message: 'HUSH KELIBSIZ!', ...userExists });
};

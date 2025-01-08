import path from 'node:path';
import fs from 'node:fs/promises';
import exp from 'node:constants';

const dbFilePath = path.join(import.meta.dirname, 'users.json');

export const readDB = async () => {
  try {
    const jsonData = await fs.readFile(dbFilePath, 'utf-8');
    const users = await JSON.parse(jsonData);
    return {
      ok: true,
      data: users,
    };
  } catch (error) {
    console.error(error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

export const writeDB = async (user) => {
  try {
    const { data: users } = await readDB();

    const newUser = {
      id: users.length + 1,
      ...user,
    };
    console.log(users);

    users.push(newUser);
    await fs.writeFile(dbFilePath, JSON.stringify(users));

    return {
      ok: true,
    };
  } catch (error) {
    console.error(error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

writeDB({
  full_name: 'alisher navoiy',
  username: 'alisher',
  email: 'alisher@gamil.com',
  age: 99,
  gender: 'MALE',
  password: 'qwer12345',
  country: 'USA',
  phone_number: '+998946110061',
});

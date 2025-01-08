import path from 'node:path';
import fs from 'node:fs/promises';
import exp from 'node:constants';

const dbPaths = {
  users: path.join(import.meta.dirname, 'users.json'),
  products: path.join(import.meta.dirname, 'products.json'),
  orders: path.join(import.meta.dirname, 'orders.json'),
};

export const readDB = async (dbName) => {
  try {
    const filePath = dbPaths[dbName];
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = await JSON.parse(jsonData);
    return {
      ok: true,
      data,
    };
  } catch (error) {
    console.error(error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

export const writeDB = async (dbName, userData) => {
  try {
    const filePath = dbPaths[dbName];

    const { data } = await readDB(dbName);
    const newUser = {
      id: data.length + 1,
      ...userData,
    };

    data.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(data));

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

export const updateDB = async (dbName, id, data) => {
  try {

  } catch (error) {}
};

export const deleteDB = async (dbName, id) => {
  try {
    const filePath = dbPaths[dbName];

    const { data, ok } = await readDB(dbName);
    if (!ok) {
      throw new Error('xato');
    }

    const filteredData = data.filter((item) => item.id !== id);

    await fs.writeFile(filePath, JSON.stringify(filteredData));
    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};


/*
writeDB('users', {
  full_name: 'Amir temur',
  username: 'amirtemur',
  email: 'amirtemur@gamil.com',
  age: 91,
  gender: 'MALE',
  password: 'qwer12345',
  country: 'USA',
  phone_number: '+998946110061',
});

*/
/*
writeDB('products', {
  name: 'iPhone 16',
  price: 1999.99,
  description: 'Latest Apple iPhone',
  stock: 10,
});


*/

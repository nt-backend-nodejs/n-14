import mongoose from 'mongoose';


await mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'))
  .catch((err) => console.error(err));

const Schema = mongoose.Schema;

const User = new Schema(
  {
    first_name: String,
    last_name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 100,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model('User', User);

const newUser = new Users({
  first_name: 'John',
  last_name: 'Doe',
  age: 25,
  phone_number: '08123456789',
  address: '123 Main Street, Lagos',
  email: 'joh2n@gmail.com',
  password: 'password',
  gender: 'male',
});

newUser
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

// crud
// create
// read
// update
// delete
// find
// findOne
// findById
// findByIdAndUpdate
// findByIdAndDelete
// findOneAndUpdate

console.log(await Users.deleteMany({}));
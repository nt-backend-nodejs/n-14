import { connect } from 'mongoose';

connect('mongodb://127.0.0.1:27016/test')
  .then(() => console.log('Connected!'))
  .catch((err) => console.error(err));
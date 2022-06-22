import mongoose from 'mongoose';
import config from 'config';

function connect() {
  const dbUri = config.get<string>('dbUri');

  return mongoose.connect(dbUri)
    .then(() => {
      console.log('Connected to DB');
    })
    .catch(() => {
      console.error('Could not connect to DB');
      process.exit(1);
    });
}

export default connect;
import db from '../config/connection.js';

const cleanDB = async (): Promise<void> => {
  try {
    await db.dropCollection("Question");
    console.log('Question collection dropped.');
  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
}

export default cleanDB;

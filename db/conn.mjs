import { MongoClient } from 'mongodb';
import '../loadenvironment.mjs';

const cs = process.env.ATLAS_URI || '';
const client = new MongoClient(cs);

let conn;

try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db('sample_restaurants');

export default db;
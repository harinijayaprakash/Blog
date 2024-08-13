import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://harinikowsi2122:Harini21@blog-app-shard-00-00.aj50m.mongodb.net:27017,blog-app-shard-00-01.aj50m.mongodb.net:27017,blog-app-shard-00-02.aj50m.mongodb.net:27017/?ssl=true&replicaSet=atlas-dh9x9h-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
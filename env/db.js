import mongoose from 'mongoose';

const ConnectDB = async () => {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    });
    return conn;
};

export default ConnectDB;

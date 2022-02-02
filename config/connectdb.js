import mongoose from 'mongoose';

const Connectdb = () => {
    if (mongoose.connections[0].readyState){
        console.log('aleady connected to database')
        return;
    }
    mongoose.connect(process.env.MONGODB_URL,{},err=>{
        if (err) throw err
        console.log('connected to mongodb')
    })
}

export default Connectdb;

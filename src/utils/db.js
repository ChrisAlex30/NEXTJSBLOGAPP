import mongoose from"mongoose"
const connect =()=>{
    // try {
    //     await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
    //   } catch (error) {
    //     throw new Error('connection failed')
    //   }
    
    mongoose.connect(`${process.env.MONGO}`);
    
}

export default connect;
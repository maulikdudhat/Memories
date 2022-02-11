import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();


// localhost:5000/posts
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use('/posts', postRoutes);



const CONNECTION_URL = 'mongodb+srv://maulikdudhat:12345@cluster0.qd3hz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 6000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })

    .then(() => app.listen(PORT, () => console.log(`server runnig on Port:${PORT}`)))
    .catch((error) => console.log(error.message));

// app.listen(PORT,()=>console.log(`server running on Port:${PORT}`))

// mongoose.set('useFindAndModify', false);
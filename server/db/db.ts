import mongoose from "mongoose";

mongoose.connect('mongodb+srv://noorimannoor:<password>@todo-app.gxbbzyp.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'MongoDB Connection Error'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

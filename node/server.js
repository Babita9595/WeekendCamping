const mongoose = require('mongoose');

const dotenv = require('dotenv')

const app = require('./app');

dotenv.config({ path: './config.env' })

mongoose
    .connect('mongodb+srv://weekend_camping:weekendcamping@cluster0.7p6yo13.mongodb.net/WeekendCamping?retryWrites=true&w=majority')
    .then(() => console.log('connection established succesfull'))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})
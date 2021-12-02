const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(express.json());

const routes = require('./routes');
app.use('/API', routes.login);
app.use('/API', routes.changepwd);
app.use('/API', routes.sendotp);
app.use('/API', routes.signup);

app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(PORT, () => {
    console.log(`[listen] Server listening on port ${PORT}.`);
});

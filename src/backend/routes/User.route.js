module.exports = (app) => {

    const userSign = require('../controllers/userSignUp.controller');

  

    // ---------------user api start from here--------------------------------

    app.post('/api/userSignUP' ,userSign.userSignUP);

    app.post('/api/UserLogin' ,userSign.UserLogin);

       
 
}
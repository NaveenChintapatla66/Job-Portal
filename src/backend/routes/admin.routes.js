module.exports = (app) => {

    const admin =require("../controllers/admin.controller");

  
 
    // --------------------api start from here--------------------------------
    
    app.post("/api/adminSignUp" ,admin.adminSignUp );

    app.post("/api/adminLogin",admin.adminLogin)
 

}
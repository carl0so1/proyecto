//archivo 
const express = require("express");
const app = express();
let areaRouter=require("./router/areaRouter");
let empleadosRouter =require("./router/empleadosRouter");
let empresaRouter =require("./router/empresaRouter");

//mild...
app.use("/api", empresaRouter);
app.use("/api",empleadosRouter );
app.use("/api",areaRouter );



//servidor frv
const PORT = 1251;
app.listen(PORT, () => {
    console.log(`servidor ya funcionado full  ${PORT}`);
});

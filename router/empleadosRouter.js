const express=require("express");
const router=express.Router();

router.get("/empleado",(req, res )=>{
    res.send("hola estoy en el get de empleado");
});
router.post("/empleado",(req, res )=>{
    res.send("hola estoy en el post de empleado");
});
router.put("/empleado",(req, res )=>{
    res.send("hola estoy en el put de empleado");
});
router.delete("/empleado",(req, res )=>{
    res.send("hola estoy en el delete de empleado");
});
    
router.get("/empleado/:id"),
module.exports = router;
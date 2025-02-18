const express=require("express");
const router=express.Router();

router.get("/area",(req, res )=>{
    res.send("hola estoy en el get de area");
});
router.post("/area",(req, res )=>{
    res.send("hola estoy en el post de area");
});
router.put("/area",(req, res )=>{
    res.send("hola estoy en el put de area");
});
router.delete("/area",(req, res )=>{
    res.send("hola estoy en el delete de area");
});

router.get("/area/:id"),
module.exports = router;
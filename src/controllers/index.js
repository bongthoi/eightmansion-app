import express from 'express';


let router = express.Router();

/**public */
router.get("/", (req, res) => {
	res.render("index", { title: "Home" });
});

router.get("/explanation", (req, res) => {
	res.render("explanation", { title: "Explanation" });
});

router.get("/solution", (req, res) => {
	res.render("solution", { title: "Solution" });
});

/**export */
module.exports=router;
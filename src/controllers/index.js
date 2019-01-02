import express from 'express';


let router = express.Router();

/**public */
router.get("/", (req, res) => {
	res.render("index", { title: "Trang Chủ" });
});

router.get("/explanation", (req, res) => {
	res.render("explanation", { title: "Giải Trình" });
});

router.get("/solution", (req, res) => {
	res.render("solution", { title: "Phương Pháp Hóa Giải" });
});

/**export */
module.exports=router;
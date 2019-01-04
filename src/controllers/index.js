import express from 'express';


let router = express.Router();

/**vi */
router.get("/", (req, res) => {
	res.render("vn/index", { title: "Trang Chủ" });
});

router.get("/explanation", (req, res) => {
	res.render("vn/explanation", { title: "Giải Trình" });
});

router.get("/solution", (req, res) => {
	res.render("vn/solution", { title: "Phương Pháp Hóa Giải" });
});

/**en */
router.get("/en", (req, res) => {
	res.render("en/index", { title: "Home" });
});

router.get("/en/explanation", (req, res) => {
	res.render("en/explanation", { title: "explanation" });
});

router.get("/en/solution", (req, res) => {
	res.render("en/solution", { title: "solution" });
});

/**cn */
router.get("/cn", (req, res) => {
	res.render("cn/index", { title: "主页" });
});

router.get("/cn/explanation", (req, res) => {
	res.render("cn/explanation", { title: "解释" });
});

router.get("/cn/solution", (req, res) => {
	res.render("cn/solution", { title: "化解方法" });
});

/**export */
module.exports=router;
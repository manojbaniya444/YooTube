const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/tmp/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;

// to use this
/*
const upload = require("../middlewares/multer.middleware");
and use as middleware
upload.single("image")
upload.array("images", 4)
upload.fields([
    {
        name: "image",
        maxCount: 1,
    },
    {
        name: "images",
        maxCount: 4,
    }
])

*/

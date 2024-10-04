const path =require('path')
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        if (file.mimetype === 'application/pdf') {
            cb(null, 'public/pdfs'); // Save PDFs in the 'public/pdfs' directory
        } else if (file.mimetype.startsWith('image/')) {
            cb(null, 'public/images'); // Save images in the 'public/images' directory
        } else if (file.mimetype.startsWith('video/')) {
            cb(null, 'public/videos'); // Save videos in the 'public/videos' directory
        } else {
            cb(new Error('Unsupported file type'), null); // Handle unsupported file types
        }
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    },
});

exports.upload = multer({ storage: storage });
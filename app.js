const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());

const port = 3000;

app.get('/items/:filename', (req, res) => {
    const filename = req.params.filename;
    const ext = path.extname(filename);

    // ファイルの拡張子が.jsonであることを確認
    if (ext === '.json') {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                res.status(500).send('Error reading file');
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    } else {
        res.status(400).send('Invalid file type');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

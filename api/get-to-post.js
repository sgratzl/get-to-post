const fetch = require('node-fetch');

module.exports = async (req, res) => {
    if (!req.query.url) {
        res.json({ status: 'error', message: `missing "url" parameter` });
        return;
    }
    const response = await fetch(req.query.url, {
        method: 'POST',
        body: req.query.body
    });

    if (response.ok) {
        return response.body.pipe(res);
    }

    res.json({ status: 'error', message: `unexpected response ${response.statusText}` });
}
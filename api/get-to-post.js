const fetch = require('node-fetch');

module.exports = async (req, res) => {
    if (!req.query.url) {
        throw new Error(`missing "url" parameter`);
    }
    const response = await fetch(req.query.url, {
        method: 'POST',
        body: req.query.body
    });

    if (response.ok) {
        return response.body.pipe(res);
    }

    throw new Error(`unexpected response ${response.statusText}`);
}
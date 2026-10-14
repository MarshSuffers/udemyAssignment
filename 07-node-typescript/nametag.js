import express from "express";
const app = express();
const PORT = 3000;
app.get("/greet/:name", (req, res) => {
    const name = req.params.name;
    const nameTag = {
        firstName: name
    };
    return res.send(`Hello, ${nameTag.firstName}! Your digital name-tag is ready.`);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=nametag.js.map
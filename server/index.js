const express = require('express');
const app = express();
const port = 5050;
const emoteController = require('./controllers/EmoteController')


app.use(express.json())


app.get("/api/emotes", emoteController.getEmotes)
app.post("/api/emotes", emoteController.addEmotes)
app.delete(`${"/api/emotes"}/:id`, emoteController.deleteEmotes)
app.put(`${"/api/emotes"}/:id`, emoteController.editEmotes)

app.listen(port, () => {
    console.log(`I hear ya ${port}`)
})
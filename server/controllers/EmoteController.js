const emotes = [
    {
        id: 1,
        img:
        "https://vignette.wikia.nocookie.net/internet-meme/images/6/6e/Pogchamp.jpg/revision/latest?cb=20180310053228",
        name: "PogChamp",
        description: "PogChamp comes from the streamer Gootecks, and is used to show excitement in the chat"
    },
    {
        id: 2,
        img: "https://i.imgur.com/JlXtPpf.png",
        name: "PepeHands",
        description: "PepeHands is used to express sadness in the chat. Pepe is an internet meme, one of the originals from all over the web"
    },
    {
        id: 3,
        img: "https://cdn.frankerfacez.com/emoticon/262468/4",
        name: "WeirdChamp",
        description: "WeirdChamp is used to show disgust to the person its aimed at. This is a variation of the PogChamp emote",
        
    },{
    id: 4,
    img: "https://i.imgur.com/IPiVSnk.png",
    name: "4Weird",
    description: "Easily the most toxic emote on the entire website. This is similar to WeirdChamp but shows a lot more disgust to the streamer. Many users have been banned for spamming 4Weird"
    }
]
let id = 5
const getEmotes = (req, res) => {
    res.json(emotes)
}

const addEmotes = (req, res) => {

    const {img, name, description} = req.body;
    let emoteObj = {
    id,
    img,
    name,
    description,
    }
    emotes.push(emoteObj)
    id++
    res.json({img,name,description})
    
}

const deleteEmotes = (req, res) => {
    const deleteID = req.params.id;
    emotesIndex = emotes.findIndex(emote => emote.id == deleteID)
    emotes.splice(emotesIndex, 1)
    res.status(200).send(emotes)

}

const editEmotes = (req,res) => {
    const editID = req.params.id;
    emotesIndex = emotes.findIndex(emote => emote.id == editID)
    emotes[emotesIndex].description = req.body.description
    res.status(200).send(emotes)
}


module.exports = {
deleteEmotes,
getEmotes,
addEmotes,
editEmotes
}
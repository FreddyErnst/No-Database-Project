import React, { Component } from "react"
import axios from "axios";
import EmotesCard from './EmotesCard'


class Emotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emotes: []
        }
        this.editEmote = this.editEmote.bind(this)
        this.deleteEmote = this.deleteEmote.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.emote.img !== this.props.emote.img || prevProps.emote.name !== this.props.emote.name ||
            prevProps.emote.description !== this.props.emote.description) {
            this.setState({
                emotes: [...this.state.emotes, this.props.emote]
            })
        }
    }

    componentDidMount() {
        axios
            .get("/api/emotes")
            .then(response => {
                this.setState({ emotes: response.data })
            })
            .catch(() => console.log("error"))
    }

    deleteEmote(id) {
        axios
            .delete("/api/emotes/" + id)
            .then(response => {
                this.setState({
                    emotes: response.data
                })
            })
            .catch(() => console.log("error"))
    }

    editEmote(id, description) {
        axios
            .put("/api/emotes/" + id, { description })
            .then(response => {
                this.setState({
                    emotes: response.data
                })
                
            })
            .catch(() => console.log("error"))
    }




    render() {
        return (
            <main className="container">
                {this.state.emotes.map((element, index) => {
                    console.log(element.img)
                    return (
                        <EmotesCard
                        img={element.img}
                        name={element.name}
                        description={element.description}
                        editEmote = {this.editEmote}
                        deleteEmote = {this.deleteEmote}
                        id = {element.id}
                        />

                    )
                })}




            </main>
        )
    }

}

export default Emotes;
// This is where the add functionality will be built, stateful component.//
import React, {Component} from "react";
import Axios from "axios";

class AddEmotes extends Component {
    constructor() {
        super()
        this.state = {
            emotes: [
                {
                    img: '',
                    name: '',
                    description: ''
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="AddForm">
                <form onSubmit={() => {
                    Axios.post("/api/emotes", {
                        img: this.state.img,
                        name: this.state.name,
                        description: this.state.description
                    })
                    .then (response => {
                        this.props.updateEmotes(response.data)
                    })
                    .catch(() => console.log("error"))
                }}
                >
                <input placeholder="Add Emote Image"
                name="img"
                onChange={this.handleChange}
                value={this.state.img}
                
                /> 
                <input placeholder="Emote Name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                
                />
                <input placeholder="Description(Ex:Origin,use)"
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
                
                
                />
                <button type="submit">Add Emote!</button>
                </form>
            </div>
        )
    }
}

export default AddEmotes;
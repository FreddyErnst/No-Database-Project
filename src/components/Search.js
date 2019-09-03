// This component is not being used, please don't consider when grading the project. Leaving it here so I can work on it after. //

import React, {Component} from 'react'
import './Search.css'
import Emotes from './Emotes'



class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    handleChange = e => {
        this.setState({search: e.target.value})
    }


    render() {
        return (
            <div className="SearchBox">
                <input onChange = {this.handleChange}
                placeholder="Search emote..."
                
                
                />
                    <button>
                    <img src="https://discordemoji.com/assets/emoji/9879_hackerman.gif" className="Hackerman"/>
                    </button>

            </div>
        )
    }
}

export default Search;
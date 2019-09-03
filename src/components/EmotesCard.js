import React,{Component} from 'react'


class EmotesCard extends Component {
    constructor() {
        super()
        this.state = {
            newDescription: '',
            displayInput: false
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput (e) {
        this.setState ({
        newDescription: e.target.value
        })
    }

    toggleDisplay () {
        this.setState ({
            displayInput: !this.state.displayInput
        })
    }


    render () {
        const {img, name, id, description, deleteEmote, editEmote} = this.props;
        return ( 
            <div className="Pokedex">      
            <img src={img} className="images" />
            <h1>{name}</h1>
            {
                this.state.displayInput 
                    ? 
                    <div>
                        <input onChange={this.handleInput}/>
                        <button onClick={() => {
                            editEmote(id, this.state.newDescription)
                            this.toggleDisplay()
                        }}>Edit Me</button>
                    </div>
                    : <p>{description}</p>
            }
            
            <button onClick = {() => {deleteEmote(id)}}>Delete</button>
            <button onClick = {() => {this.toggleDisplay()}}>Edit</button>
            
        
        </div>
        )
    }}
        export default EmotesCard;
        
    

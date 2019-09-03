import React from 'react';
import Header from './components/Header'
import './components/Header.css'
import Search from './components/Search'
import './components/Search.css'
import AddEmotes from './components/AddEmotes'
import './components/AddEmotes.css'
import Emotes from './components/Emotes'
import './components/Emotes.css'
import Footer from './components/Footer'
import './components/Footer.css'



class App extends React.Component  {
  constructor() {
    super()
    this.state = {
      emote: {}
    }
    this.updateEmotes = this.updateEmotes.bind(this)
  }
  updateEmotes (obj) {
    this.setState ({
      emote: obj
    })
  }



  render () {
    const {updateEmotes, emote} = this.state;
  return (
    
    <div>
      <Header/>
      <Search/>
      <AddEmotes updateEmotes={updateEmotes}/>
      <Emotes emote={emote}/>
      <Footer/>
      

    </div>
  );
  }
}

export default App;

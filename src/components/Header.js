// This is a stateless component, will return the header "html" //
import React from 'react'
class Header extends React.Component {
render() {
    return (
        <header className="header-style">
            <h1 className="Title">Twitch Emote Directory</h1>
        </header>
    )
}
}

export default Header;
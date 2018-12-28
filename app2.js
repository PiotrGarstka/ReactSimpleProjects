class Message extends React.Component {
    constructor(props){
        super(props)
        this.state={
            messageIsActive: false
        }
        this.handleMessageButton=this.handleMessageButton.bind(this)
    }

    handleMessageButton(){
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    render() {
        console.log(this.state.messageIsActive)
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt" +
            " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
            " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
            "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        return (
            <React.Fragment>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive?"Ukryj":"Pokaż"}</button>
                {this.state.messageIsActive? <p>{text}</p>:null}
                {/*<p>{this.state.messageIsActive && text}</p>*/}

            </React.Fragment>
        )
    }
}

ReactDOM.render(<Message/>, document.getElementById("root"))
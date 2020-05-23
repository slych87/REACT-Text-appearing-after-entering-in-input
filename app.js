class App extends React.Component {
    state = {
        value: ""
    }

    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value,
        })
    }

    handlResetClick = () => {
        this.setState({
            value: ""
        })
    }

    render() {



        return (
            <>
                <input value={this.state.value} placeholder="wpisz..." onChange={this.handleInputChange} type="text" />
                <button onClick={this.handlResetClick}>Reset</button>
                <h1 className="title">{this.state.value.toUpperCase()}</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
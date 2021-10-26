import React,{Component} from "react";

class welcome extends Component {
    state = {
        num: 0
    }
    add = () => {
        this.setState({num: this.state.num + 1})
    }
    subtract = () => {
        this.setState({num: this.state.num - 1})
    }
    reset = () => {
        this.setState({num: this.state.num = 0})
    }
    render(props) {
        return (
            <div>
                <h1>{this.props.colors}</h1>
                <h1>{this.state.num}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.subtract}>subtract</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}


export default welcome
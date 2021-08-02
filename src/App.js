import React, {Component} from 'react';

class App extends Component {
    state = {
        peopleInSpace: []
    }

    render() {
        return(
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(({people}) => this.setState({peopleInSpace: people}))
    }
}

export default App;
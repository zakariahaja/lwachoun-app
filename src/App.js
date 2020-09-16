import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import {Title} from "./components/title/title.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            lwachoun: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({lwachoun: users})
            })
    }

    handleChanges = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {lwachoun, searchField} = this.state;
        const filtredLwachoun = lwachoun.filter(amza => amza.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className='App'>
                <Title/>
                <SearchBox
                    placeholder="search amza"
                    handleChanges={this.handleChanges}
                />
                <CardList lwachoun={filtredLwachoun}>
                </CardList>
            </div>
        );
    }
}

export default App;

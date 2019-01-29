import React, {Component} from 'react';
import './App.css';

const dataUrl = 'https://raw.githubusercontent.com/azat-co/react-quickly/master/ch05/users/real-user-data.json'

class App extends Component {

    render() {
        return (
            <section className="App">
                <GetCurrencies data-url={dataUrl} title={'Currencies - BTC to USD'}/>
            </section>
        );
    }
}


class GetCurrencies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        console.log('---------', this.state);


    }

    componentDidMount() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((users) => this.setState({users: users}))
    }

    render() {
        return <div className="grid">
            <h1>Test</h1>
            <table>
                <tbody>{this.state.users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.first_name} {user.last_name}</td>
                        <td> {user.email}</td>
                        <td> {user.ip_address}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}


export default App;

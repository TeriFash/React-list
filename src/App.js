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
            currency: []
        }

    }

    componentDidMount() {
        fetch(this.props['data-url'])
            .then((response) => response.json())
            .then((currency) => this.setState({currency: currency}))
    }

    render() {
        return <div className="grid">
            <h1>{this.props.title}</h1>
            <table>
                <tbody>{this.state.currency.map((item) =>
                    <tr key={item.id}>
                        <td>{item.first_name} {item.last_name}</td>
                        <td> {item.email}</td>
                        <td> {item.ip_address}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}


export default App;

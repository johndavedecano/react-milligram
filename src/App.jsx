import React, {Component} from 'react';
import Nav from './sample/Nav';
import Code from './sample/Code';
import Button from './Button';
import Highlight from 'react-highlight';

class App extends Component {

    render() {
        return <main className="wrapper">
            <Nav />
            <section className="container">
                <h3 className="title">Getting Started</h3>
                <p className="description">
                    React-Milligram is a library of reusable front-end components which extends the power of Milligram CSS Framework. A clean and fast CSS UI Framework.
                </p>
                <h3 className="title">Installation</h3>
                <Code>npm install react-milligram --save</Code>
                <p className="description">
                   <strong>Add to your index.html head tag</strong>
                </p>
                <Highlight className="code prettyprint">
                    {'<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>\n'}
                    {'<link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"/>\n'}
                    {'<link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"/>'}
                </Highlight>
            </section>
            <section className="container" name="#buttons">
                <h3 className="title">Buttons</h3>
                <Button style={{marginRight: 10}}>Default</Button>
                <Button style={{marginRight: 10}} outline>Outline</Button>
                <Button clear>Clear</Button>
                <Highlight className="code prettyprint">
                    {"<Button>Default</Button>"}
                </Highlight>
                <Highlight className="code prettyprint">
                    {"<Button outline>Outline</Button>"}
                </Highlight>
                <Highlight className="code prettyprint">
                    {"<Button clear>Clear</Button>"}
                </Highlight>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>outline</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>clear</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>onClick</td>
                            <td>Function</td>
                            <td>undefined</td>
                            <td>Handles onclick event.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    }
}

export default App;

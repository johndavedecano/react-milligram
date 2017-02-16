import React, {Component} from 'react';
import Nav from './sample/Nav';
import Code from './sample/Code';
import Button from './Button';

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
                <Code>
                    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
                </Code>
                <Code>
                    <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css"/>
                </Code>
                <Code>
                    <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"/>
                </Code>
            </section>
            <section className="container" name="#buttons">
                <h3 className="title">Buttons</h3>
                <p className="description">We have three kinds of buttons default outline and clear.</p>
                <Button style={{marginRight: 10}}>Default</Button>
                <Button style={{marginRight: 10}} outline>Outline</Button>
                <Button clear>Clear</Button>
                <Code><Button>Default</Button></Code>
                <Code><Button outline>Outline</Button></Code>
                <Code><Button clear>Clear</Button></Code>
            </section>
        </main>
    }
}

export default App;
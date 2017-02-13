import React, {Component} from 'react';
import Nav from './components/Nav';
import Code from './components/Code';

class App extends Component {
    
    state = {
        page: undefined
    };

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
                    &lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic&quot;/&gt;
                </Code>
                <Code>
                    &lt;link rel=&quot;stylesheet&quot; href=&quot;//cdn.rawgit.com/necolas/normalize.css/master/normalize.css&quot;/&gt;
                </Code>
                <Code>
                    &lt;link rel=&quot;stylesheet&quot; href=&quot;//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css&quot;/&gt;
                </Code>
            </section>
            <section className="container" name="#buttons">
                <h3 className="title">Buttons</h3>
                <p className="description">
                   
                </p>
            </section>
        </main>
    }
}

export default App;
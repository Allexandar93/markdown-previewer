import React, { Component } from "react"
import './App.scss';
import marked from 'marked'


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends Component{
  state = {
    text: placeholder
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })

  }
  
  


  render() {
    const {text} = this.state
    const markdown = marked(text, {breaks: true})
    
    return(
      <header>
      <div>
        <h1 className="text-center m-4">Convert your Markdown</h1>
        <div className="row" id="rows">
          
          <div className="col-6">
          <h5>Enter your markdown</h5>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange} />
          </div>

          <div className="col-6" >
            <h5 className="text-center">See the result:</h5>
            <div className="preview" id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
          </div>

        </div>
      </div>
      </header>

    )

  }

}

export default App;

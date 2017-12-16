// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Bmi from './Bmi';

class App extends React.Component {

  inputValidator = (value) => {
    if (value.length < 1) {
      return 'Enter a value for '
    }
    if (isNaN(value)) {
      return 'Only numbers are allowed for '
    }
    return null
  }

  render() {
    return (
      <Bmi getErrorMessage={this.inputValidator} />
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('bmi')
  )
})

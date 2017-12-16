import React from 'react';

class Bmi extends React.Component {
  state = {
    bmi: '',
    error: 'Enter numbers for Weight and Height'
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.massInput.value)
    console.log(this.heightInput.value)
    const mass = this.massInput.value
    const height = this.heightInput.value
    this.setState({
      bmi: (mass / Math.pow(height, 2)).toFixed(2)
    })
  }

  handleChange = event => {
    let massError = '', heightError = '', error = null
    
    error = this.props.getErrorMessage(this.massInput.value)
    if (error) { massError = error + 'Weight' }

    error = this.props.getErrorMessage(this.heightInput.value)
    if (error) { heightError = error + 'Height' }

    if (massError || heightError) {
      error = massError + ' ' + heightError
    }

    this.setState({
      error: error,
      bmi: ''
    })
  }

  render() {
    const {bmi, error} = this.state
    return (
      <div className="App">
      <h4>
        {error ? (
          <div style={{color: 'red'}}>
          {error}
          </div>
        ) : null}
        </h4>
        <form onSubmit={this.handleSubmit}>
          <label>Weight:
            <input type="text" onChange={this.handleChange} ref={input => this.massInput = input} />
          </label>
          <label>Height:
            <input type="text" onChange={this.handleChange} ref={input => this.heightInput = input} />
          </label>
          <button disabled={Boolean(error)} type="submit">Calculate BMI</button>
        </form>
        
        {bmi ? (<h4 className="App-intro">Body Mass Index: {bmi}</h4>) : null}
      </div>
    )
  }
}

export default Bmi;

import React from 'react';
class Country extends React.Component {
  constructor() {

    super();
    this.onCountryClick = this.onCountryClick.bind(this);


  }
  onCountryClick(country){
    console.log('click', country);
    this.props.onCountryClick(country)
  }
  render() {
    // let currentInput = this.props.currentInput;
    let { currentInput, country, activeCountry } = this.props;
    return (
      <div className={'auto-complete-country ' + (country === activeCountry ? 'active' : '')} onClick={()=>this.onCountryClick(country)}>
        <strong>{country.substr(0, currentInput.length)}</strong>{country.substr(currentInput.length, country.length)}
      </div>
        );
    }


}

export default Country;

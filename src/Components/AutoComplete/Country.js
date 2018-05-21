import React from 'react';
class Country extends React.Component {
  constructor() {
    super();

    this.onCountryClick = this.onCountryClick.bind(this);
  }
  onCountryClick(country){
    this.props.onCountryClick(country)
  }
  render() {
    let { currentInput, country, activeCountry } = this.props;
    // Display the drop down list
    // If arrow key is going through the list, show active
    // Also show strong on the current input value
    return (
      <div className={'auto-complete-country ' + (country === activeCountry ? 'active' : '')} onClick={()=>this.onCountryClick(country)}>
        <strong>{country.substr(0, currentInput.length)}</strong>{country.substr(currentInput.length, country.length)}
      </div>
        );
    }


}

export default Country;

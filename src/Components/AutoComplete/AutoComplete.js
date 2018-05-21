import React from 'react';
import './AutoComplete.css';
import Country from './Country';

var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
class AutoComplete extends React.Component {
  constructor() {

    super();

    this.state = {
      filteredCountries: [],
      currentInput: '',
      activeCountry: '',
      selectedCountry: ''
    }
    this._arrowCount = -1;
    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onInputValuechange = this.onInputValuechange.bind(this);
    this.onCountryClick = this.onCountryClick.bind(this);
  }
  onInputValuechange(event){
    let input = event.target.value;

    this.setState({
      currentInput: input
    })
    this.getFilteredCountries(input);
  }
  onInputKeyDown(event){
    // let i = -1;
    if(event.key === 'ArrowDown'){
      this._arrowCount++;
      if(this._arrowCount > this.state.filteredCountries.length -1) {
        this._arrowCount = this.state.filteredCountries.length - 1;
        return;
      };
      this.setState({
        activeCountry: this.state.filteredCountries[this._arrowCount]
      })
    } else if(event.key === 'ArrowUp'){
      this._arrowCount--;
      if(this._arrowCount < -1) {
        this._arrowCount = -1;
        return;
      }
      this.setState({
        activeCountry: this.state.filteredCountries[this._arrowCount]
      })
    } else if(event.key === 'Enter'){
      this.onSelectCountry(this.state.filteredCountries[this._arrowCount]);

      // this.setState({
      //   currentInput: this.state.filteredCountries[this._arrowCount],
      //   filteredCountries: [],
      //   activeCountry: ''
      // })
      // this._arrowCount = -1;
    }
    // console.log(this);

    // this.getFilteredCountries(event.key)
  }

  getFilteredCountries (input){
    if(input === ''){
      this.setState({
        filteredCountries: []
      })
      return ;
    }
    let currentInput = input;//this.state.currentInput + input;
    let filteredCountries = [];
    this.setState({
        currentInput: currentInput
    })
    // this.state.currentInput += input
    //update this state filteredCountries
    // console.log('currentInput',currentInput);
    for (var i = 0; i < countries.length; i++) {
      if (countries[i].substr(0, currentInput.length).toLowerCase() === currentInput.toLowerCase()) {
        filteredCountries.push(countries[i]);
      }
    }
    this.setState({
      filteredCountries: filteredCountries
    })
    // console.log('this.state.filteredCountries',this.state.filteredCountries);

  }
  onCountryClick(country){
    // this.setState({
    //   currentInput: country
    // })
    this.onSelectCountry(country);
  }
  onSelectCountry(country){
    this.setState({
      currentInput: country,
      filteredCountries: [],
      activeCountry: ''
    })
    this._arrowCount = -1;
  }
  render() {
    // <input id="myInput" type="text" name="myCountry" placeholder="Country" onChange={this.onInputValuechange} onKeyDown={this.onInputKeyDown}/>
    // <List countries={this.state.filteredCountries} currentInput={this.state.currentInput} activeCountry={this.state.activeCountry} onCountryClick={this.onCountryClick}/>
    return (
      <div className="auto-complete-wrapper">
        <div className="auto-complete-input">
          <input id="country-input" type="text" name="myCountry" placeholder="Country" value={this.state.currentInput} onChange={this.onInputValuechange} onKeyDown={this.onInputKeyDown}/>
        </div>
        <div className="auto-complete-list">
          {this.state.filteredCountries.map((item, index) => <Country key={index} country={item} currentInput={this.state.currentInput} activeCountry={this.state.activeCountry} onCountryClick={this.onCountryClick}/>)}
        </div>
      </div>
        );
    }


}

export default AutoComplete;

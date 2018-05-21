import React from 'react';
import Country from './Country';
class List extends React.Component {

  render() {
    return (
      <div className="auto-complete-list">
        {this.props.countries.map((item, index) => <Country key={index} country={item} currentInput={this.props.currentInput} activeCountry={this.props.activeCountry} onCountryClick={this.props.onCountryClick}/>)}
      </div>
        );
    }


}

export default List;

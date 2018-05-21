import React from 'react';
class Country extends React.Component {

  render() {
    return (
      <div className="country">
        {this.props.country}
      </div>
        );
    }


}

export default Country;

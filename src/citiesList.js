import React from 'react';
import CitiesDetails from './citiesDetails'
class CitiesList extends React.Component{
  render() {
      const { citiesList } = this.props;
      const { deleteCity } = this.props;
      const content = citiesList.map((city)=> <CitiesDetails key={city.city.id} cityKey={city.city.id} deleteCity={deleteCity} city={city} />);
      return <div className="row">
          <div className="col-md-12">
              {content}
          </div>
      </div>
  }

}

export default CitiesList;
import React from 'react';
import Search from './search';
import CitiesList from './citiesList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesList: [],
      defaultCity: 'karachi'
    }

  }

  componentWillMount() {
    this.addCityWeather(this.state.defaultCity);
  }
  
  addCityWeather = (cityName) => {
    if(this.state.citiesList.findIndex(x=> (x.city.name).toLowerCase() == (cityName).toLowerCase()) === -1){
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`; 
    fetch(url).then(function (response) {
      if (response.ok) {
        return response.json();
      }
    }).then((json) => {
      this.setState(prevState => ({
        citiesList: [...prevState.citiesList, json]
      }));
    }).catch(function (err) {
      console.log('error', err)
    });
  }
  }

  deleteCity = (cityID) => {
    const removeIndex = this.state.citiesList.findIndex(x => x.city.id==cityID);
    this.setState(prevState => ({
      citiesList : [...prevState.citiesList.slice(0,removeIndex), ...prevState.citiesList.slice(removeIndex+1)]
    }));
  }


  render() {
    const citiesList  = this.state.citiesList;
    console.log(this.state.citiesList)
  //  if(this.state.citiesList[0]){
  //    console.log(this.state.citiesList[0].city.id);}
    return <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Search searchCity={this.addCityWeather} />
          <CitiesList deleteCity={this.deleteCity} citiesList={citiesList} />
        </div>
      </div>
    </div>


  }
}

export default App;

import React from 'react';

class CitiesDetails extends React.Component{
   
    deleteCity = () => {

       
        const { cityKey } = this.props;
        this.props.deleteCity(cityKey);

        // console.log(cityKey)
    }

    render(){
      const { city } = this.props;
      const { deleteCity } = this.props;
      const weatherToday = city && city.list && city.list[0];
     
      return <div className="row"> 
          <div className="col">
      <div>{weatherToday.temp.day}  </div> 
      <span className="input-group-btn">
       <button 
        className="btn btn-secondary" 
        type="button"
        onClick = {this.deleteCity}
       >Delete</button>
     </span>
      </div>
      </div>     
    }
}

export default CitiesDetails;
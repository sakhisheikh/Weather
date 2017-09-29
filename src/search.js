import React from "react";

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  searchCity = () => {   
    if(this.state.searchText!==''){
    this.props.searchCity(this.state.searchText); 
    this.setState({
      searchText: ''
    })  
    } 
  }
  

  render() {
     return <div className="input-group">
     <input 
      type="text" 
      className="form-control" 
      placeholder="Search for..." 
      aria-label="Search for..." 
      value={this.state.searchText}
      onChange={(e) => {this.setState({ searchText: e.target.value })}}
      onKeyUp = { (e) => {  if(e.key=="Enter"){
          this.searchCity()}}}
    />
     <span className="input-group-btn">
       <button 
        className="btn btn-secondary" 
        type="button"
        onClick = {this.searchCity}
       >Search</button>
     </span>
   </div>

     
 }
}

export default Search;
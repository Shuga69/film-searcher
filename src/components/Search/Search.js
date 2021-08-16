import React, {Component} from 'react';
import {getMovie} from "../../redux/actions/moviesAction";
import {connect} from "react-redux";
import {getAllMovie} from "../../redux/reducers/moviesReducer";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
    }
  async handleChange(event){
        if(event.target.value !== "") {
           await fetch(`https://api.themoviedb.org/3/search/movie?api_key=067dcc3067b9033cb3827552cc15eb92&language=en-US&query=${event.target.value}&page=1&include_adult=false`)
                .then((response) => response.json())
                .then((data) => {
                    this.props.getMovie(data.results)
                });
        }
        else{
            this.props.getAllMovie();
        }
    }

    render() {
        return (
            <div className="search-container">
                <input className="input-search"
                       onChange={this.handleChange}
                       type="text"
                       placeholder="Search...."/>
            </div>
        );
    }
}

export default connect(null, {getAllMovie, getMovie })(Search);
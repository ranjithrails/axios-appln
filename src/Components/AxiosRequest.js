import React from 'react';
import axios from '../axios-config';

class AxiosRequest extends React.Component {
  state = {
    photos : []
  }
  componentDidMount() {
    axios.get('/photos').then(response=>{
    // console.log(response.data);
    this.setState({photos: response.data})
    }).catch((error) => {
      console.log(error);
    }).then(() => {
      console.log("-----always executes");
    })
  }
  render() {
    return (
      <>
      <div>{this.state.photos.length}</div>
      </>
    )
  }
};

export default AxiosRequest;
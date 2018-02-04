import React from 'react'


export default class FilterByProfession extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOpen: false
    };
  }

  toggleButton = () => {
    this.setState(
        {
          isToggleOpen: !this.state.isToggleOpen
        }
    )
  };

  render() {
    return (
        <div className="filter-by-profession" style={{display:"flex", justifyContent:"center"}}>
          <div className="filter-by-profession">

          </div>
          <p style={{marginTop: 200 + "px", position: "absolute", fontWeight: "bold", width: 100 + "%"}}>The state of
            xxxx is: {this.state.isToggleOpen === true ? " true " : " false"}</p>
        </div>
    );
  }
}


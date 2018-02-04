import React from 'react'


export default class DropDown extends React.Component {

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
        <div className="wrap-dropdown" style={{display:"flex", justifyContent:"center"}}>
          <div className="dropdown">
            <button style={{display:"block"}} className="btn btn-secondary dropdown-toggle" onClick={this.toggleButton}>
              Dropdown button
            </button>
            <div className="dropdown-menu"
                 style={this.state.isToggleOpen === true ? {display: 'block'} : {display: 'none'}}>
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          <p style={{marginTop: 200 + "px", position: "absolute", fontWeight: "bold", width: 100 + "%"}}>The state of
            isToggleOpen is: {this.state.isToggleOpen === true ? " true " : " false"}</p>
        </div>
    );
  }
}


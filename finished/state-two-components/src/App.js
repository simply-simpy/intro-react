import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [
        {
          name: "John Doe",
          avatar: "http://i.pravatar.cc/150?img=3",
          profession: "banker",
          city: "LA",
          email: "john@gmail.com"
        },
        {
          name: "Sally Smith",
          avatar: "http://i.pravatar.cc/150?img=45",
          profession: "attorney",
          city: "NYC",
          email: "sally@gmail.com"
        },
        {
          name: "Fred Jones",
          avatar: "http://i.pravatar.cc/150?img=51",
          profession: "programmer",
          city: "Portland",
          email: "fres@gmail.com"
        },
        {
          name: "Linda Williams",
          avatar: "http://i.pravatar.cc/150?img=44",
          profession: "doctor",
          city: "Atlanta",
          email: "linda@gmail.com"
        },
        {
          name: "Piff Jenkins",
          avatar: "http://i.pravatar.cc/150?img=57",
          profession: "doctor",
          city: "LA",
          email: "piff@gmail.com"
        },
        {
          name: "Eleanor Fant",
          avatar: "http://i.pravatar.cc/150?img=48",
          profession: "attorney",
          city: "NYC",
          email: "eleanor@gmail.com"
        },
        {
          name: "Hanson Deck",
          avatar: "http://i.pravatar.cc/150?img=13",
          profession: "doctor",
          city: "Portland",
          email: "hanson@gmail.com"
        },
        {
          name: "Hilary Ouse",
          avatar: "http://i.pravatar.cc/150?img=9",
          profession: "doctor",
          city: "Atlanta",
          email: "hilary@gmail.com"
        }
      ],
      selectedCandidates: [],
      value: ""
    };
  }

  componentDidMount() {
    // setting the state one time of selectedCandidates to the master list of candidates
    this.setState(
        {
          selectedCandidates: this.state.candidates
        }
    )
  }

  render() {
    // the CSS for various page elements
    const professionStyle = {display: 'block'};
    const itemStyle = {display: 'block'};
    const peopleProfessionStyle = {display: 'block'};
    const avatarProfessionStyle = {
      display: 'flex',
      maxWidth: '375px',
      overflowX: 'scroll',
      margin: '10px auto'
    };
    const fullInfoStyle = {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '375px',
      overflowX: 'scroll',
      margin: 'auto',
      backgroundColor: '#eee',
      border: '1px solid #333',
      padding: '10px',
      lineHeight: '1.3'
    };
    const labelStyle = {
      display: 'block',
      padding: '10px',
      marginRight: '4px'
    };
    const filterByProfessionStyle = {
      width: '145px',
      margin: '30px auto',
      textAlign: 'left',
      border: '1px solid'
    };

    // Generating the HTML for the avatar and profession.
    let avatarProfession = this.state.selectedCandidates.map((candidate, index) =>
        <div className="avatar-profession" key={index}>
          <span style={peopleProfessionStyle} className="avatar"><img src={candidate.avatar} alt=""/></span>
          <span style={professionStyle} className="profession">{candidate.profession}</span>
        </div>
    );

    // Generating the HTML for the name, profession, email, and city.
    let fullInfo = this.state.selectedCandidates.map((candidate, index) =>
        <div style={fullInfoStyle} key={index}>
          <span style={itemStyle} className="profession">{candidate.name}</span>
          <span style={itemStyle} className="profession">{candidate.profession}</span>
          <span style={itemStyle} className="profession">{candidate.email}</span>
          <span style={itemStyle} className="profession">{candidate.city}</span>
        </div>
    );

    // Loops through state and creates an array of all position title, then removes duplicates.
    let filteredProfessions = [];
    this.state.candidates.map((candidate) =>
        filteredProfessions.push(candidate.profession)
    );
    filteredProfessions = [...new Set(filteredProfessions)]; // removes duplicates

    // When a radio button is selected from the list of positions, all candidates are checked to see if they can fill that position.
    // If so, they are added to the updated candidates array.
    let updatedCandidates = [];
    let handleRadio = (event) => {
      while (updatedCandidates.length) updatedCandidates.pop(); // empties this array each time the handleRadio function is called
      let profession = event.target.value; // the value of the radio button
      this.state.candidates.map(function (candidate) {
        if (candidate.profession === profession) {
          updatedCandidates.push(candidate);
        }
      });
      // Sets the state of selected candidates to the newly created array of filtered candidates.
      this.setState({
        selectedCandidates: updatedCandidates
      })
    };

    // Resets list to default state.
    let showAll = (event) => {
      event.preventDefault();
      this.setState({
        selectedCandidates: this.state.candidates
      })
    };

    // Loops through the filtered professions array, setting the HTML for the radio buttons
    let professions = filteredProfessions.map((profession, index) =>
        <label style={labelStyle} key={index}>
          <input type="radio" id={index} name="professions" value={profession} onChange={handleRadio}/>
          <span style={{marginLeft: 4 + 'px'}} className="label">{profession}</span>
        </label>
    );

    return (
        <div className="App">

          <h1>Job Candidate Search</h1>

          <div style={avatarProfessionStyle} className="avatar-profession">
            {avatarProfession}
          </div>

          <div style={filterByProfessionStyle} className="filter-by-profession">
            <form>
              {professions}
              <button style={{textAlign:"center", margin:  'auto', display: 'block'}} type="radio" id="all" name="professions" value="all" onClick={showAll}>Reset</button>
            </form>
          </div>

          <div className="full-info-wrap">
            {fullInfo}
          </div>

          <div style={{marginTop: 30 + "px"}} className="state">
            Selected Candidates State Updating:<br/>
            <code style={{fontWeight: 'bold'}}>
              {this.state.selectedCandidates.map((selectedCandidates) =>
                  JSON.stringify(selectedCandidates)
              )}
            </code>

          </div>

        </div>
    );
  }
}

export default App;

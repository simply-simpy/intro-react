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
          profession: "computer programmer",
          city: "Portland",
          email: "fres@gmail.com"
        },
        {
          name: "Linda Williams",
          avatar: "http://i.pravatar.cc/150?img=44",
          profession: "Doctor",
          city: "Atlanta",
          email: "linda@gmail.com"
        },
        {
          name: "Piff Jenkins",
          avatar: "http://i.pravatar.cc/150?img=57",
          profession: "Doctor",
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
          profession: "Doctor",
          city: "Portland",
          email: "hanson@gmail.com"
        },
        {
          name: "Hilary Ouse",
          avatar: "http://i.pravatar.cc/150?img=9",
          profession: "Doctor",
          city: "Atlanta",
          email: "hilary@gmail.com"
        }
      ],
      selectedCandidates: []
    };
  }

  componentDidMount() {
    this.setState(
        {
          selectedCandidates: this.state.candidates
        }
    )
  }

  render() {
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
      display: 'block'
    };

    let avatarProfession = this.state.selectedCandidates.map((candidate, index) =>
        <div className="avatar-profession" key={index}>
          <span style={peopleProfessionStyle} className="avatar"><img src={candidate.avatar} alt=""/></span>
          <span style={professionStyle} className="profession">{candidate.profession}</span>
        </div>
    );

    let fullInfo = this.state.selectedCandidates.map((candidate, index) =>
        <div style={fullInfoStyle} key={index}>
          <span style={itemStyle} className="profession">{candidate.name}</span>
          <span style={itemStyle} className="profession">{candidate.profession}</span>
          <span style={itemStyle} className="profession">{candidate.email}</span>
          <span style={itemStyle} className="profession">{candidate.city}</span>
        </div>
    );

    let filteredProfessions = [];
    this.state.candidates.map((candidate) =>
        filteredProfessions.push(candidate.profession)
    );
    filteredProfessions = [...new Set(filteredProfessions)]; // removes duplicates
    let professions = filteredProfessions.map((profession, index) =>
            <label key={index}>
              <input type="radio" id={index} name="candidate.profession" value="candidate.profession"/>
              <span className="label">{profession.profession}</span>
            </label>
        );
    console.log("filtered 2: ", filteredProfessions)
    // filteredLocations.push(location);
    // filteredLocations = [...new Set(filteredLocations)]; // removes duplicates
    return (
        <div className="App">
          <h1>Job Candidate Search</h1>
          <div style={avatarProfessionStyle} className="avatar-profession">
            {avatarProfession}
          </div>
          <div className="filter-by-profession">
            {professions}
          </div>
          <div className="full-info-wrap">
            {fullInfo}
          </div>

          {/*shows the updating of selected candidates*/}
          <div style={{marginTop: 30 + "px"}} className="state">
            Selected Candidates:<br/>
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

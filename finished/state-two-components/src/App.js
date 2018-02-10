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
          city: "LA"
        },
        {
          name: "Sally Smith",
          avatar: "http://i.pravatar.cc/150?img=45",
          profession: "attorney",
          city: "NYC"
        },
        {
          name: "Fred Jones",
          avatar: "http://i.pravatar.cc/150?img=51",
          profession: "computer programmer",
          city: "Portland"
        },
        {
          name: "Linda Williams",
          avatar: "http://i.pravatar.cc/150?img=44",
          profession: "Doctor",
          city: "Atlanta"
        },
        {
          name: "Piff Jenkins",
          avatar: "http://i.pravatar.cc/150?img=57",
          profession: "Doctor",
          city: "LA"
        },
        {
          name: "Eleanor Fant",
          avatar: "http://i.pravatar.cc/150?img=48",
          profession: "attorney",
          city: "NYC"
        },
        {
          name: "Hanson Deck",
          avatar: "http://i.pravatar.cc/150?img=13",
          profession: "Doctor",
          city: "Portland"
        },
        {
          name: "Hilary Ouse",
          avatar: "http://i.pravatar.cc/150?img=9",
          profession: "Doctor",
          city: "Atlanta"
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
    const name = {display: 'block'};
    const peopleProfession = {display: 'block'};
    const selectPerson = {
      display: 'flex',
      maxWidth: '50%',
      overflowX: 'scroll',
      margin: '10px auto'
    };

    let candidates = this.state.candidates.map((candidate, index) =>
        <div className="people-profession" key={index}>
          <span style={peopleProfession} className="avatar"><img src={candidate.avatar} alt=""/></span>
          <span style={name} className="name">{candidate.profession}</span>
        </div>
    );


    return (
        <div className="App">
          <div style={selectPerson} className="select-person">
            {candidates}
          </div>

          <div style={{position: 'fixed', bottom: 20+"px"}}className="state">
          Selected Candidates:<br />
            <code style={{fontWeight: 'bold'}}>
            {
              this.state.selectedCandidates.map((selectedCandidates) =>
                  JSON.stringify(selectedCandidates)
              )
            }
            </code>
          </div>
        </div>
    );
  }
}

export default App;

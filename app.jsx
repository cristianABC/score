
var PLAYERS =[
{
  id:1,
  name:"Cris",
  score:45,
},
{
  id:2,
  name:"Peter",
  score:40,
},
{
  id:3,
  name:"Daniel",
  score:19,
}
];
function Header(props){
  return (
        <div className="header">
          <h1>{props.title}</h1>
        </div>
  );
}
Header.propTypes = {
  title:React.PropTypes.string.isRequired,
};

function Player(props){
  return ( <div className="player">
              <div className="player-name">
                {props.name}
              </div>
              <div className="player-score">
                <Counter score={props.score}/>
              </div>
          </div>

  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}


 function Counter(props){
   return (
     <div className="counter">
                  <button className="counter-action decrement" >-</button>
                  <div className="counter-score">{props.score}</div>
                  <button className="counter-action increment">+</button>
                </div>
   );
 }
 Counter.propTypes = {
   score: React.PropTypes.number.isRequired,
 };

 var Aplication = React.createClass({
   propTypes : {
  title:React.PropTypes.string.isRequired,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name:React.PropTypes.string.isRequired,
    score:React.PropTypes.number.isRequired,
    id:React.PropTypes.number.isRequired,
  })).isRequired,
  },
  getDefaultProps: function(){
   return{ title: "My Scoreboard",
         }
  },
   render:function(){
      return (
        <div className="scoreboard">
        <Header title={this.props.title}/>
        <div className="players">
          {this.props.players.map(function(player){
            return <Player name={player.name} score={player.score} key={player.id}/>
          })}
        
        </div>
     </div>
      );
   }

 });


ReactDOM.render(<Aplication players ={PLAYERS} />,document.getElementById("container"));
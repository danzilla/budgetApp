import { connect } from "react-redux";

import { 
  thunk_action_fetch_ToDo_Details } from "../../redux/actions/fetchAction";

const handleAction = () => {
  console.log("Trigger Handle Action");
  thunk_action_fetch_ToDo_Details()

}
function Dashboard(porps) {
  return (
    <div className="App">
      <header className="App-header">

      <button onClick={handleAction} type="button">Click Me!</button>

        {JSON.stringify(porps.data)}

      </header>
    </div>
  );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(Dashboard);
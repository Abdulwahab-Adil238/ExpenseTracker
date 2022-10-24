import Chart from './components/Chart/Chart'
import Form from './components/Form/Form';
function App() {
  return (
    <>
      <div className='App'>
        <div className="container">
          <h1 id="Heading">Expense Tracker </h1>
        </div>
      </div>
      <div className='MainContainer'>
        {/* chart  */}
        <Chart />
        {/* form */}
        <Form />
      </div>
    </>
  );
}

export default App;

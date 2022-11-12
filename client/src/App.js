import Chart2 from './components/Chart/Chart2'
import Form from './components/Form/Form';
import { default as api } from './store/apiSlice';
function App() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
  let MyForm;

  if (isFetching) {
    MyForm = <div>Fetching</div>;
  } else if (isSuccess) {
    MyForm = <Form listData={data} ></Form>
  } else if (isError) {
    MyForm = <div>Error</div>
  }
  return (
    <>
      <div className='App'>
        <div className="container">
          <h1 id="Heading">Expense Tracker </h1>
        </div>
      </div>
      <div className='MainContainer'>
        {/* chart  */}
        <Chart2 myData={data} />
        {/* form */}
        {/* <Form listData={lebal} setLebal={setLebal} /> */}
        {MyForm}
      </div>
    </>
  );
}

export default App;

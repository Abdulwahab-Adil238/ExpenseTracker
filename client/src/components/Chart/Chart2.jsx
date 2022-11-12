import './Chart.css'
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Lebal from '../Partials/lebal/Label';
import { default as api } from '../../store/apiSlice';
import { getLabels, chart_Data, getTotal } from '../../Lodash/helper'
Chart.register(ArcElement)

const Chart2 = ({ myData }) => {
     const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
     let Mylebal;
     let MyChart;
     if (isFetching) {
          Mylebal = <div>Fetching</div>;
          MyChart = <div>Fetching</div>;
     } else if (isSuccess) {
          MyChart = <Doughnut {...chart_Data(data)}></Doughnut>
          Mylebal = getLabels(data, 'type').map((lebelItem, index) => {
               return < Lebal lebelItem={lebelItem} index={index} key={index} />
          });
     } else if (isError) {
          Mylebal = <div>Error</div>
          MyChart = <div>Error</div>
     }
     return (
          <>
               {/* chart and labels */}
               <div className='chart_container'>
                    <div className='chart_item'>
                         <div className='chart_box'>
                              {/* pie chart of the Expense */}
                              {MyChart}
                              <h3>
                                   Total <span >${getTotal(data) ?? 0}</span>
                              </h3>

                         </div>
                         <div className='labels_container'>
                              {/* labels container */}
                              {
                                   // myData.map((lebelItem, index) => {
                                   //      return < Lebal lebelItem={lebelItem} index={index} key={index} />
                                   // })
                                   Mylebal
                              }
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Chart2;
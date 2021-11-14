import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ForumIcon from '@mui/icons-material/Forum';
import { Chart } from "react-google-charts";

export function Overview() {
    const data = [
        ['x', 'Earnings'],
        ['Jan', 0],
        ['', 10000],
        ['Mar', 5000],
        ['', 15000],
        ['May', 10000],
        ['', 20000],
        ['Jul', 15000],
        ['', 25000],
        ['Sep', 20000],
        ['', 30000],
        ['Nov', 25000],
        ['', 40000],
    ]
  return (
    <div>
      <h3>Dashboard</h3>
      <div id="mainoverviewbox">
          {['40,000', '215,000', '50', '18'].map((num, index) => {
              return (
                    <div>
                      <Card  sx={{ minWidth: 275 }}>
                      <CardContent id="mainoverview">
                            <div className='colorbar' style={{margin: 0}}></div>
                            <div>
                                <div>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        {index === 0 ? "EARNINGS (MONTHLY)" : null}
                                        {index === 1 ? "EARNINGS (ANNUALLY)" : null}
                                        {index === 2 ? "TASKS" : null}
                                        {index === 3 ? "PENDING REQUESTS" : null}
                                    </Typography>
                                    <Typography sx={{ fontSize: 25 }} variant="body2">
                                        {index === 0 ? `$ ${num}` : null}
                                        {index === 1 ? `$ ${num}` : null}
                                        {index === 2 ? `${num}%` : null}
                                        {index === 3 ? `${num}` : null}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <Typography id="icon" >
                                    {index === 0 ? <CalendarTodayIcon /> : null}
                                    {index === 1 ? <AttachMoneyIcon /> : null}
                                    {index === 2 ? <AssignmentTurnedInIcon /> : null}
                                    {index === 3 ? <ForumIcon /> : null}
                                </Typography>
                            </div>
                      </CardContent>
                          </Card>
                  </div>
                  )
          })}
          
      </div>
      <br></br>
      <div id="chart">
      <Card  sx={{ maxWidth: 750 }}>
        <LineChart data={data}/>
        </Card>
        <Card  sx={{ maxWidth: 750 }}>
        <PieChart data={data}/>
        </Card>
        
    </div>
    </div>
  );
}

function LineChart ({data}) {
    return (
        <Chart
            width={'700px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                hAxis: {
                title: 'Time',
                },
                vAxis: {
                title: 'Money',
                },
            }}
            rootProps={{ 'data-testid': '1' }}
            />
    )
}

function PieChart ({data}) {
    return (
        <div id="pieChart">
            <Chart
                width={'700px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Earning Distribution',
                }}
                rootProps={{ 'data-testid': '1' }}
                />
        </div>
    )
}
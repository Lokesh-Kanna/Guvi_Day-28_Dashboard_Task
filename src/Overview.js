import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ForumIcon from '@mui/icons-material/Forum';

export function Overview() {
    const overview = []
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
    </div>
  );
}

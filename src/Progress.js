import * as React from "react";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';


export function Progress() {
  return (
    <div id="progressandtext">
      <div>
          <Card id="progressbar-card" sx={{ minWidth: 850 }}>
            <div class="card-header">
                <h3><i>Progress</i></h3>
            </div>
              <div className="progresstitle">
                  <Typography>Server Migration</Typography>
                  <Typography>20%</Typography>
              </div>
            <div class="progress">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style={{"width": "20%"}}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br></br>
            <div className="progresstitle">
                <Typography>Sales Tracking</Typography>
                <Typography>40%</Typography>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style={{"width": "40%"}}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br></br>
            <div className="progresstitle">
                <Typography>Customer Database</Typography>
                <Typography>60%</Typography>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style={{"width": "60%"}}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br></br>
            <div className="progresstitle">
                <Typography>Payout Details</Typography>
                <Typography>80%</Typography>
            </div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{"width": "80%"}}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br></br>
            <div className="progresstitle">
                <Typography>Account Setup</Typography>
                <Typography>Completed</Typography>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style={{"width": "100%"}}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <br></br>
          </Card>
      </div>
      <div>
          <Card id="developementcard" sx={{ maxWidth: 490 }}>
          <div class="card-header">
                <h3><i>Developement Approach</i></h3>
            </div>
            <Typography className="cardText">
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
            Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
            </Typography>
          </Card>
      </div>
    </div>
  );
}

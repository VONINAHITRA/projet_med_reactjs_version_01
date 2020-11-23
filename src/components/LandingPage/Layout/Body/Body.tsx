import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../../LandingStyle.css';

const Body = () => {
  return (
    <div id="Groupe_410">
      <div id="NOTRE_OBJECTIFS">
        <FormattedMessage id="home.objectif.title" />
        <br />
        <svg className="Ligne_30" viewBox="0 0 86 5">
          <path id="Ligne_30" d="M 0 0 L 86 0"></path>
        </svg>
      </div>

      <Grid container justify="center" spacing={2}>
        <Grid item md={4} sm={6} xs={10}>
          <Box display="flex">
            <div id="ID01" className="objectifID">
              <span>01.</span>
            </div>
            <div id="Lorem_Ipsum_Dolor_sit_amet" className="objectifSubTitle">
              <span>
                Lorem
                <br />
                Ipsum Dolor sit amet
              </span>
            </div>
          </Box>
          <div
            id="Lorem_ipsum_dolor_sit_amet_con_cw"
            className="objectifContenu"
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br />
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip <br />
              ex ea commodo consequat.
            </span>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={10}>
          <Box display="flex">
            <div id="ID02" className="objectifID">
              <span>02.</span>
            </div>
            <div id="Lorem_Ipsum_Dolor_sit_amet" className="objectifSubTitle">
              <span>
                Lorem
                <br />
                Ipsum Dolor sit amet
              </span>
            </div>
          </Box>
          <div
            id="Lorem_ipsum_dolor_sit_amet_con_cw"
            className="objectifContenu"
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br />
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip <br />
              ex ea commodo consequat.
            </span>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={10}>
          <Box display="flex">
            <div id="ID03" className="objectifID">
              <span>03.</span>
            </div>
            <div id="Lorem_Ipsum_Dolor_sit_amet" className="objectifSubTitle">
              <span>
                Lorem
                <br />
                Ipsum Dolor sit amet
              </span>
            </div>
          </Box>
          <div
            id="Lorem_ipsum_dolor_sit_amet_con_cw"
            className="objectifContenu"
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br />
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip <br />
              ex ea commodo consequat.
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;

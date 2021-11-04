import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import axios from 'axios';
import './get-videos.css';

function GetVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`api.json`)
      .then((res) => {
        console.log(res.data);
        setVideos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={4}>
        {videos.map((item, index) => (
          <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
              className='yt-link'
            >
              <Box>
                <img
                  style={{ width: '100%' }}
                  alt={item.title}
                  src={item.thumb}
                />
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant='body1'
                    color='textPrimary'
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Box>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GetVideos;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto-condensed';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles({
    bannerBar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    banner: {
        minWidth: 65,
        width: '15%',
        maxWidth: 100,
        marginLeft: 'auto',
        marginRight: 50,
    }
});

const bannerSrc = 'https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg'
const mlhSite = 'https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white'

export default function MLHBanner(props) {
  const classes = useStyles();

  return (
      <Slide in={true} timeout={1500} direction='left'>
        <AppBar position='absolute' className={classes.bannerBar}>
            <a href={mlhSite} target='_blank' rel='noopener noreferrer' className={classes.banner}>
                <img src={bannerSrc} alt='MLH Banner' />
            </a>
        </AppBar>
    </Slide>
  );
}
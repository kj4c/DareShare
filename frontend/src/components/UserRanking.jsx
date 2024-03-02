/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserRanking = (props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1, borderColor: 'rgb(121, 19, 168)', p: 1 }}>
      <Typography variant='h6' sx={{ color: 'white' }}>
        {props.rank}. {props.username}
      </Typography>
      <Typography variant='h6' sx={{ color: 'white' }}>
        {props.point} points
      </Typography>
    </Box>
  );
};

export default UserRanking;

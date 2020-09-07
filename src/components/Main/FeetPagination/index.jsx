import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function FeetPagination({ currentSelected, limit, paging }) {

  const classes = useStyles();

  const history = useHistory();
  const { query, offset } = useParams();
  const [page, setPage] = useState(() => parseInt(offset, 10) / limit);

  const handleChange = (event, value) => {
    setPage(value);
    history.push(`/search/${query}/${value * limit}`);
    currentSelected(value * limit);
  };
  return (
    <div className={classes.root}>
      <Pagination count={Math.ceil(paging / (limit * 1.5))} page={page || 1} onChange={handleChange} shape='rounded' />
    </div>
  );
}

export default FeetPagination;

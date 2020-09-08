import React, { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import { useStyles } from './style';

function ProductImages({ title, pictures = [] }) {
  const classes = useStyles();
  const [baseImg, setBaseImg] = useState();

  const handlerImg = (event) => {
    setBaseImg(event.target.id);
  };

  return (
    <>
      <div className={classes.root}>
        <div>
          <img height='500px' width='100%' alt={title} src={baseImg || (pictures[0] && pictures[0].secure_url)} />
        </div>
        <GridList className={classes.gridList} cols={2.5}>
          {pictures.map((tile, index) => (
            <GridListTile key={tile.id}>
              <img src={tile.url} alt={tile.id} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={(
                  <IconButton onClick={handlerImg}>
                    <AddIcon id={tile.url} className={classes.title} />
                  </IconButton>
                )}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default ProductImages;


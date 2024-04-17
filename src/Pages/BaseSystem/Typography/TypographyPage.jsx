import React from 'react'

import {  Typography } from '@mreycode/system';

import typpographyVariants from '../../../packages/mreycode-system/src/types/typographyVariants';

const styles = {
  root: {
    flex: 1,
    borderColor: '#fff',
    border: 1,
    borderStyle: 'solid',
    borderRadius: 24,
    padding: 1
  }
};


const TypographyPage = () => {
  return (
    <div style={styles.root}>
      <Typography variant='h2'>{'#<Typography/>'}</Typography>
      <hr/>
      <div>
        {
          Object.entries(typpographyVariants).map(([typographyValue], index) => (
            <>
              <Typography variant={typographyValue} key={`typography-${index}`}>{typographyValue}: Hello world!</Typography>
              <hr/>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default TypographyPage;
import React from 'react'
import { Typography }  from '@mreycode/system';

const styles = {
  root: {
    flex: 1,
    borderColor: '#fff',
    border: 1,
    borderStyle: 'solid',
    borderRadius: 24,
    padding: 1,
  }
};

const PageLayout = ({ children, title = '', variant='h2' }) => {
  return (
    <div style={styles.root}>
      <Typography variant={variant}>{`#<${title}/>`}</Typography>
      <hr/>
      {children}
    </div>
  )
}

export default PageLayout
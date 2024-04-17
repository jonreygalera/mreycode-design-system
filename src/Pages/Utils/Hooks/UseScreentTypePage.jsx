
import PageLayout from '../../../Layouts/PageLayout';
import Typography  from '../../../packages/mreycode-system/src/Typography';

import React from 'react'
import { useScreenType  } from '@mreycode/utils';

const UseScreentTypePage = () => {
  const screentType = useScreenType();

  return (
    <PageLayout title='Use Screen Type'>
      <Typography variant='body1'>resize windows or responsive design mode</Typography>
      <Typography variant='subtitle1'>
        {JSON.stringify(screentType)}
      </Typography>
    </PageLayout>
  )
}

export default UseScreentTypePage
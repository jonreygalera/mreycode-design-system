import React from 'react'

import { Typography }  from '@mreycode/system';

import typpographyVariants from '../../../packages/mreycode-system/src/types/typographyVariants';
import PageLayout from '../../../Layouts/PageLayout';


const TypographyPage = () => {
  return (
    <PageLayout title='Typography'>
      <Typography>Working in progress!</Typography>
      <div>
        {
          Object.entries(typpographyVariants).map(([typographyValue], index) => (
            <div key={`typography-${index}`}>
              <Typography variant={typographyValue} >{typographyValue}: Hello world!</Typography>
              <hr/>
            </div>
          ))
        }
      </div>
    </PageLayout>
  )
}

export default TypographyPage;
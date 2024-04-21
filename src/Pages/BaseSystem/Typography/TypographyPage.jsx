import React from 'react'

import { Typography }  from '@mreycode/system';

import PageLayout from '../../../Layouts/PageLayout';

const typpographyVariants = Object.freeze({
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  button: 'button',
  caption: 'caption',
  overline: 'overline',
})

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
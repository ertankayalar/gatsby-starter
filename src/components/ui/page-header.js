import React from 'react'
import PropTypes from 'prop-types'
import Container from '../layout/container'

const PageHeader = ({ title, description }) => {
  return (
    <div className='w-full bg-gray-200 text-gray-700'>
      <Container className='py-20 mb-5'>
        <h1 className='text-6xl font-semibold mb-3'>{title}</h1>
        <p className='text-sm'>{description}</p>
      </Container>
    </div>
  )
}
PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

PageHeader.defaultProps = {
  title: ``,
  description: ``,
}

export default PageHeader

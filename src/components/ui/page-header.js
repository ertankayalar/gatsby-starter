import React from 'react'
import PropTypes from 'prop-types'
import Container from '@components/Container'

const PageHeader = ({ title, description }) => {
  return (
    <div className='w-full text-gray-700 bg-gray-200'>
      <Container className='py-20 mb-5'>
        <h1 className='mb-3 text-6xl font-semibold'>{title}</h1>
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

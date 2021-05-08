import React from 'react'
import PropTypes from 'prop-types'
import BigButton from './big-button'

const Cta = ({ title, message, buttonLink, buttonText, darkMode }) => {
  return (
    <div className={darkMode ? 'w-full bg-gray-800' : 'w-full bg-white'}>
      <div className='container mx-auto text-center py-20 px-10'>
        <h2
          className={
            darkMode ? 'text-4xl text-gray-50' : 'text-4xl text-gray-700'
          }
        >
          {title}
        </h2>
        <p
          className={
            darkMode
              ? 'text-2xl text-gray-100 my-5'
              : 'text-2xl text-gray-600 my-5'
          }
        >
          {message}
        </p>
        <BigButton href={buttonLink}>{buttonText}</BigButton>
      </div>
    </div>
  )
}
Cta.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
}

Cta.defaultProps = {
  title: ``,
  message: ``,
  buttonLink: `/iletisim/`,
  buttonText: `Bize Ulaşın`,
  darkMode: false,
}
export default Cta

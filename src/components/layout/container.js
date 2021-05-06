import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, className, style }) => {
  return (
    <div className={`max-w-screen-lg mx-auto  ${className}`} style={style}>
      {children}
    </div>
  )
}

// Container.propTypes = {
//   children: PropTypes.string,
//   className: PropTypes.string,
//   style: PropTypes.string,
// }

// Container.defaultProps = {
//   children: ``,
//   className: ``,
//   style: ``,
// }

export default Container

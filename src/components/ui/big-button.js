import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const BigButton = ({ to, title, className }) => {
  return (
    <Link to={to}>
      <div className={className}>{title}</div>
    </Link>
  )
}

BigButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
}

BigButton.defaultProps = {
  to: `/`,
  title: `Başla`,
  className: `my-5 bg-green-700 text-white text-xl inline-block font-semibold py-3 px-10 rounded-sm hover:bg-green-200 hover:text-gray-700`,
}

export default BigButton

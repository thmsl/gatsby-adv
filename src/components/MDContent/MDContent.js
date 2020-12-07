import React from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown'

const converter = new showdown.Converter()

const MDContent = ({ content, className }) => (
  <content className={className} dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
)

MDContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}


export default MDContent
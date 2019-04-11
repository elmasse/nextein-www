import React, { Component, Fragment } from 'react'

export default class Meta extends Component {
  render() {
    const { title, url, type="website", description } = this.props;
    return (
      <Fragment>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={url} />
          {/* <meta property="og:image" content={`${url}/static/images/logo.png`} /> */}
      </Fragment>
    )
  }
}
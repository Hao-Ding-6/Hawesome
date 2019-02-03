import React from 'react'

function HomePage({history}) {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">H-Awesome</div>
          </h1>
          <h2>Hi friend, you are welcome here!</h2>
          <div onClick={() => history.push('/events')} className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        This website is made by{' '}
        <a href="https://www.linkedin.com/in/haoding6/" title="HaoDING">
          Hao DING
        </a>{' '}
        from{' '}
        <a href="https://www.rice.edu/" title="">
          Rice University
        </a>{' '}
      </div>
    </div>
  )
}

export default HomePage

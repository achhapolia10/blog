import React from 'react'
import Navbar from '../../navbar/navbar'
import SideDrawer from '../../side-drawer/side-drawer'
import Backdrop from '../../backdrop/backdrop'
import Card from '../../cards-home/card-blog'

class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navbarOpen: false,
      loading: true,
      sideDrawerOpen: false,
      isLoggedIn: false
    }

    // Component Activity

    this.user = this.props.user

    // Event Handlers
    this.handleToggleClick = () => {
      this.setState((pevState) => {
        return { sideDrawerOpen: !pevState.sideDrawerOpen } // passing reference
      })
    }

    this.backdropClickHandle = () => {
      this.setState({ sideDrawerOpen: false })
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
    this.setState({ loading: true })
  }

  render () {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop handleOnClick={this.backdropClickHandle} />
    }

    const ret =
      <div className='center' style={{ height: '100%' }}>
        <Navbar onToggleClick={this.handleToggleClick} user={this.user} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className='align'>
          <div className='heading-blog'>
            <h1>Blogs</h1>
            <div className='text-blog'>
              <p>Write something here to describe<br />blogs!</p>
            </div>
          </div>
          <div className='blog-svg'>
            <img src='http://localhost:3000/svg/blog.svg' alt='blog' />
          </div>
          <div className='blog-svg-m'>
            <img src='http://localhost:3000/svg/mobile_feed.svg' alt='feed' />
          </div>
        </div>
        <div className='rendered-values-blogs'>
          <Card />
        </div>
      </div>

    return (
      <div>
        {ret}
      </div>
    )
  }
}

export default Index

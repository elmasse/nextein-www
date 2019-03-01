import React, { Component } from 'react'

export default class ScrollSync extends Component {
  state = {
    activeTarget: '',
    targetsTopOffset: []
  }

  componentDidUpdate(prevProps) {
    const { post } = this.props;
    if (prevProps.post.data.toc !== post.data.toc) {
      this.calculateTargetTopOffsets();
    }
  }

  componentDidMount() {
    this.calculateTargetTopOffsets();

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  calculateTargetTopOffsets = () => {
    const { post: { data: { toc = []} }, threshold = 50 } = this.props;

    const targetsTopOffset = toc.map(item => {
      const id = item.href.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        return {
          id, offsetTop: Math.max((element.offsetTop - threshold), 0)
        }
      }
    }).filter(Boolean)

    this.setState({
      targetsTopOffset
    })
    
  }

  handleResize = () => {
    this.calculateTargetTopOffsets();
    this.handleScroll();
  }

  handleScroll = () => {
    const { targetsTopOffset}  = this.state;
    const item = targetsTopOffset.find((itemTopOffset, i) => {
      const nextItemTopOffset = targetsTopOffset[i + 1];
      if (nextItemTopOffset) {
        return (
          window.scrollY >= itemTopOffset.offsetTop &&
          window.scrollY < nextItemTopOffset.offsetTop
        );
      }
      return window.scrollY >= itemTopOffset.offsetTop;
    });
    this.setState({
      activeTarget: item ? item.id : '',
    });
  }
  render() {
    const { children } = this.props
    const { activeTarget } = this.state
    return children({ activeTarget })
  }
}
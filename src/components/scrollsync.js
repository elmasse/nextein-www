import  { useEffect, useState } from 'react'

export default function ScrollSync ({ post, threshold = 50, children }) {
  const [activeTarget, setActiveTarget] = useState('')
  const [targetsTopOffset, setTargetsTopOffset] = useState([])

  useEffect(() => {
    calculateTargetTopOffsets()
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [post])

  function calculateTargetTopOffsets () {
    const  { data: { toc = [] } } = post
    const targetsTopOffset = toc.map(item => {
      const id = item.href.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        return {
          id, offsetTop: Math.max((element.offsetTop - threshold), 0)
        }
      }
    }).filter(Boolean)
    setTargetsTopOffset(targetsTopOffset)    
  }

  function handleResize () {
    calculateTargetTopOffsets()
    handleScroll()
  }

  function handleScroll () {    
    const item = targetsTopOffset.find((itemTopOffset, i) => {
      const nextItemTopOffset = targetsTopOffset[i + 1]
      if (nextItemTopOffset) {
        return (
          window.scrollY >= itemTopOffset.offsetTop &&
          window.scrollY < nextItemTopOffset.offsetTop
        )
      }
      return window.scrollY >= itemTopOffset.offsetTop
    })
    setActiveTarget(item ? item.id : '')
  }

  return children({ activeTarget })
}

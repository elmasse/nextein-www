import  { useEffect, useState, useCallback } from 'react'

export default function ScrollSync ({ post, threshold = 50, children }) {
  const [activeTarget, setActiveTarget] = useState('')
  const [targetsTopOffset, setTargetsTopOffset] = useState([])

  useEffect(() => {    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)    
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [targetsTopOffset])

  useEffect(() => {
    calculateTargetTopOffsets()
  }, [post.data.__id])

  function calculateTargetTopOffsets () {   
    const { data: { toc }} = post
    const _targetsTopOffset = toc.map(item => {
      const id = item.href.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        return {
          id, offsetTop: Math.max((element.offsetTop - threshold), 0)
        }
      }
    }).filter(Boolean)

    setTargetsTopOffset(_targetsTopOffset)
  }

  function handleResize () {
    calculateTargetTopOffsets()
    handleScroll()
  }
 
  function handleScroll () {
    console.log('scroll', targetsTopOffset.length)
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

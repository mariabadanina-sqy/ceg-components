import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

export default ({ selector, children }) => {
  const [element, setElement] = useState(null)

  useEffect(() => {
    const selectorEl = document.querySelector(selector)
    if (!selectorEl) {
      const modalRoot = document.createElement('div')
      modalRoot.setAttribute('id', 'modal')
      document.body.append(modalRoot)
      setElement(modalRoot)
    } else {
      setElement(selectorEl)
    }
  }, [])

  if (!element) return null
  return ReactDOM.createPortal(children, element)
}

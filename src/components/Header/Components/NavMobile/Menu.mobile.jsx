import React, { useState } from 'react'
import Icons from './Icosn'
import Container from './Mobile.header'

function MenuMobile() {
  const [ isActive, setIsActive ] = useState(false)
  const [ isActiveBtn, setIsActiveBtn ] = useState(false)

  return (
    <Container className='menuContacts'>
      <button
        className={`link ${isActive === true ? "open" : "exit"}`}
        type='button'
        onClick={ () => {
          setIsActive(!isActive),
          setIsActiveBtn(!isActiveBtn)
        } }
        style={{
          padding: '0',
          border: 'none',
          margin: '0',
        }}
      >
        Contacts
      </button>
      <div className={`menu ${isActive === true ? "open" : "exit"}`}>
        <Icons />
      </div>
    </Container>
  )
}

export default MenuMobile

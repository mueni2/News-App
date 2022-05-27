import React from 'react'
import Form from './Form'

const Header = ({
  handleSubmit,
  language,
  languageHandler,
  searchRef,
  todaysDisplayDate,
}) => {
  return (
    <header>
      <h1>News</h1>
      <h3>{todaysDisplayDate}</h3>
      <aside>
        <Form
         handleSubmit={handleSubmit}
         language={language}
         languageHandler={languageHandler}
         searchRef={searchRef}
          />
      </aside>
    </header>
  )
}

export default Header

//export and import ,the props and use effect and use ref and use state .package lock json and read me .node modules and public and gitignore and all the properties ,characteristics ,effects,prons,cons,advantages,disadvantages,
//first create react,create components with lower class,then inside components with upper class then link,use state,use effect and useref,in the app.jsx,create usestate as an array and declare the usestate also install the react icons and uuidv4

import React from 'react'

const Container = ({ children, classes }) => {
  return (
    <main className={`flex justify-center items-center mx-auto max-w-[1400px] ${classes}`}>
      {children}
    </main>
  )
}

export default Container
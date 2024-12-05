import { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex itens-center gap-2 mb-2 mt-10'>
          <p className='text-3xl'>{currentState}</p>
      </div>
      {currentState === 'Login' ? '' : <input type='text' placeholder='Name' className='w-full px-3 py-2  border border-gray-800' required/>}
      <input type='email' placeholder='Email' className='w-full px-3 py-2  border border-gray-800' required/>
      <input type='password' placeholder='Password' className='w-full px-3 py-2  border border-gray-800' required/>
    </form>
  )
}

export default Login
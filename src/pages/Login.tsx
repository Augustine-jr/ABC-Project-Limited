import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      try {
        setError(null);
        const formData = new FormData(event.currentTarget);
        const data = {
           name: formData.get('name'),
           email: formData.get('email'),
           password: formData.get('password'),
        }
          console.log(data);
          // Simulate API call to register user here
      } catch (err) {
        setError('An error occurred while trying to register.');
      } finally {
        setLoading(false);
      }
  
  }

  return (
    <form 
        onSubmit={onSubmitHandler} 
        className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='text-3xl'>{currentState}</p>
      </div>
       {currentState === 'Sign Up' && (
                <input 
                    type='text' 
                    placeholder='Name' 
                    name='name' 
                    className='w-full px-3 py-2 border border-gray-800' 
                    required 
                />
            )}
            <input 
                type='email' 
                placeholder='Email' 
                name='email' 
                className='w-full px-3 py-2 border border-gray-800' 
                required 
            />
            <div className="relative w-full">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    className="w-full px-3 py-2 border border-gray-800"
                    required
                />
                <button
                    type="button"
                     aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
                >
                    {showPassword ? <EyeOff size={20} /> :  <Eye size={20} />}
                </button>
            </div>
            <div className='w-full flex justify-between text-sm mt-2'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {currentState === 'Login' ? (
                    <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
                        Create account
                    </p>
                ) : (
                    <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>
                        Login Here
                    </p>
                )}
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            <button 
                disabled={loading} 
                className={`bg-black text-white font-light px-8 py-2 mt-4 ${loading && 'opacity-50 cursor-not-allowed'}`}
            >
                {loading ? 'Processing...' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
        </form>
    );
};

export default Login;
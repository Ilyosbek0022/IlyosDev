import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      
    
    <form action="" method="post" id="Login">
      
      <div className="left">
        <div>
          
          <p>Hello, Welcome!</p>
         
          <Link href={'/loginup'}><input type="submit" name="" id="" value="Sign Up" /></Link>
        </div>
      </div>

      
      <div className="right">
        <div>
          
          <h1>Login</h1>

          
          <input type="text" name="Username" id="" placeholder="Username" />
          <span className="material-symbols-outlined person">  </span>

          
          <input type="password" name="Password" id="" placeholder="Password" />
          <span className="material-symbols-outlined lock">  </span>

          
         

          
          <Link href={'/'}><button type="submit">Create an account</button></Link>

          
          <p>or login with social platforms</p>
          <div>
           <div className="login-social-icons-wrapper">
  <p className="login-social-text">Our social</p>
  <div className="login-social-icons-grid">
    <a 
      href="https://www.instagram.com/nuriddinov_ilyosbek_14/" 
      className="login-social-icon instagram" 
      aria-label="Instagram"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
      </svg>
    </a>

    <a 
      href="https://github.com/Ilyosbek0022/Ilyosbek022" 
      className="login-social-icon github" 
      aria-label="GitHub"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"/>
      </svg>
    </a>

    <a 
      href="https://x.com/Ilyosbek0224" 
      className="login-social-icon twitter" 
      aria-label="Twitter"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>

    <Link 
      href={'https://t.me/IlyosDev_official'} 
      className="login-social-icon telegram" 
      aria-label="Telegram"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.03-.09.06-.17-.06-.26-.12-.09-.3-.06-.43-.04-.18.03-3.1 1.97-4.37 2.89-.4.29-.76.43-1.09.42-.36-.01-1.06-.2-1.57-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 7.36-3.45.83-.44 1.66-.67 2.08-.57.54.13.87.5.8 1.48z"/>
      </svg>
    </Link>
  </div>
</div>



          </div>
        </div>
      </div>
    </form>

    </div>
  )
}

export default Page
'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
import Footer from './footer';




const Header = () => {
  

 useEffect(() => {
    if (!localStorage.getItem('cookieAccepted')) {
      toast.info('🍪cookies are accepted click to close', {
        position: 'bottom-center',
        autoClose: false,
        closeOnClick: true,
        onClose: () => localStorage.setItem('cookieAccepted', 'true')
      });
    }
 

  }, []);


  
  return (
    <div className="glavniy">
      
      <div className="container">

        <header className="header">
          <div className='logo'>
            <img src="/logoheader.png" alt="" />
          </div>
          
          <div className='social-icons-container'>
            <div className="social-icons">
              <a href="https://www.instagram.com/ilyosdev_officialcomunity?igsh=dG01dXV1cGdsNmU0" className="icon-card" aria-label="Instagram">
                <svg fillRule="nonzero" height="30px" width="30px" viewBox="0,0,256,256" className="instagram">
                  <g style={{mixBlendMode: 'normal'}}>
                    <g transform="scale(8,8)">
                      <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
                    </g>
                  </g>
                </svg>
              </a>

              <a href="https://github.com/Ilyosbek0022/Ilyosbek022" className="icon-card" aria-label="GitHub">
                <svg height="30px" width="30px" viewBox="0 0 30 30" className="github">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </a>

              <a href="https://x.com/Ilyosbek0224" className="icon-card" aria-label="Twitter">
                <svg height="30px" width="30px" viewBox="0 0 48 48" className="twitter">
                  <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                </svg>
              </a>
<Link href={'https://t.me/IlyosDev_official'} className="icon-card" aria-label="Telegram">
  <svg height="30px" width="30px" viewBox="0 0 24 24" className="telegram">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.03-.09.06-.17-.06-.26-.12-.09-.3-.06-.43-.04-.18.03-3.1 1.97-4.37 2.89-.4.29-.76.43-1.09.42-.36-.01-1.06-.2-1.57-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 7.36-3.45.83-.44 1.66-.67 2.08-.57.54.13.87.5.8 1.48z" fill="currentColor"/>
  </svg>
</Link>
            </div>
          </div>
          
          <div className='auth-buttons'>
 <ToastContainer />
            <Link href={'/loginup'}><button className="sign-btn">Sign up</button> </Link>
           <Link href={'/login'}> <button className="sign-btn">Sign in</button></Link>
          </div>
        </header>
       
        <div className='text'>
             <div className="infos">

        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 animate-slide-in">
            The strongest team in Uzbekistan
          </h1>
          <h2 className="text-xl text-gray-300 animate-slide-in">
            Join our team - quality matters!
          </h2>
        </section>
      </div>
        </div>


                
          
       <div className="tree-container">
  
  
  <div className="minimal-tree">
    
    <div className="tree-node main-node">
      <div className="node-content">
        <img src="/giyosmallim.jpg" alt="G`iyosiddin ibn Ubaydulloh" />
        <div className="node-info">
          <h3>G`iyosiddin ibn Ubaydulloh</h3>
          <p>Lead Instructor</p>
        </div>
      </div>
      
      
      <div className="branch-level">
        <div className="branch-line"></div>
        
        <div className="tree-node">
          <div className="node-content">
            <img src="/akateacher.jpg" alt="Muhammmad Fayziyev" />
            <div className="node-info">
              <h3>Muhammmad Fayziyev</h3>
              <p>Middle Developer</p>
            </div>
          </div>
        </div>
        
        <div className="tree-node">
          <div className="node-content">
            <img src="/ismoilaka.jpg" alt="Olimov Ismoil" />
            <div className="node-info">
              <h3>Olimov Ismoil</h3>
              <p>Strong Junior Developer</p>
            </div>
          </div>
        </div>
        
        <div className="tree-node">
          <div className="node-content">
            <img src="/rasmim.webp" alt="Nuriddinov Ilyosbek" className="pos" />
            <div className="node-info">
              <h3>Nuriddinov Ilyosbek</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
           
          
          <div className="branch-level">
            <div className="branch-line"></div>
            
            <div className="tree-node">
              <div className="node-content">
                <img src="/kimdur.jpg" alt="Tadashi" />
                <div className="node-info">
                  <h3>Tadashi</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
            
            <div className="tree-node">
              <div className="node-content">
                <img src="/shox.jpg" alt="O`lmasov Shohjaxon" className="h-[120px] w-[220px]" />
                <div className="node-info">
                  <h3>O`lmasov Shohjaxon</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
            
            <div className="tree-node">
              <div className="node-content">
                <img src="/user.png" alt="Elendar" />
                <div className="node-info">
                  <h3>Elendar</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
            
            <div className="tree-node">
              <div className="node-content">
                <img src="azam.jpg" alt="Azamat Odilov" />
                <div className="node-info">
                  <h3>Azamat Odilov</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
 <div className="why">
  <h1>Why true developers choose us?</h1>
 </div>
      <div className="sides">
        <div className='side1'>
          <img src="rasm.webp" alt="" />
        </div>
        <div className="side2">
          <h1>Join a supportive developer community</h1>
          <h2>Connect with peers for code reviews, career advice, and friendship. Beat imposter syndrome alongside developers who understand your journey, guided by mentors who've walked this path.</h2>
        </div>
      </div>


  <div className="sides">
        
        <div className="side2">
          <h1>Create a portfolio that gets you hired</h1>
          <h2>Build impressive projects with professional designs. Recruiters tell us these portfolio pieces consistently "wow" them in interviews by demonstrating real-world capabilities.</h2>
        </div>
        <div className='side1'>
          <img src="portfrasm.webp" alt="" />
        </div>
      </div>

  <div className="sides">
        <div className='side1'>
          <img src="vibe.webp" alt="" />
        </div>
        <div className="side2">
          <h1>Master AI-powered development workflows</h1>
          <h2>Practice with AI tools that 76% of developers use daily. Learn to work effectively with Cursor, GitHub Copilot, ChatGPT, and other assistants while maintaining code quality and problem-solving skills.</h2>
        </div>
      </div>
      <div className="why">
        <h1>Ready to increase your productivity?</h1>
      </div>
<div className="troya">


<div className="productivity">
  <img src="workk.png" alt="" />
  <h2>Build portfolio projects that get you hired</h2>
  <h3>Create multi-page websites, interactive dashboards, and full-stack applications that make your portfolio stand out to employers.</h3>
</div>


<div className="productivity">
  <img src="messsage.png" alt="" />
  <h2>Get instant feedback on every submission</h2>
  <h3>Our AI-enhanced reports spot up to 3x more improvement opportunities than our standard reports, accelerating your growth without waiting.</h3>
</div>



<div className="productivity"> 
  <img src="codding.png" alt="" id='codding'/>
  <h2>Master the design-to-code workflow pros use</h2>
  <h3>Work with exact specs from Figma files—colors, spacing, fonts, and components—just like professional developers.</h3>
</div>

</div>
<div className="why">
  <h1>Main Point:</h1>
</div>
 <div className="sides">
        <div className='side1'>
          <img src="talant.webp" alt="" />
        </div>
        <div className="side2">
          <h1 className='talent'>Talent</h1>
          <h1>Discover junior talent through skills, not resumes</h1>
          <h2>See real code and live projects upfront, then connect directly with developers who've demonstrated the skills and passion you need.</h2>
          <Link href={'/login'}><button className='sign-btn'>Login</button></Link>
        </div>
      </div>


</div>

<Footer/>

    </div>
  )
}

export default Header
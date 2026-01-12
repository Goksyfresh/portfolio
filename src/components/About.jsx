import { FaDev, FaGithub } from 'react-icons/fa';
import PortfolioImage from '../images/Me.png';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useState } from 'react';
gsap.registerPlugin(SplitText);

const About = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const linkPreviews = {
    github: {
      title: 'Goksyfresh',
      description: 'Passionate Software Engineer | React Native Developer',
      image: PortfolioImage,
      stats: '20+ repositories '
    },
    twitter: {
      title: '@Oyegoke19',
      description: 'Frontend Developer',
      image: PortfolioImage,
      stats: 'Tweets • 1k Following • 1.1k Followers'
    },
    linkedin: {
      title: 'Opajobi Oyegoke',
      description: 'Personal Blog',
      image: PortfolioImage,
      stats: '56,244 post view'
    },
    mail: {
      title: 'Email Me',
      description: 'opajobioyegokeoyebola@gmail.com',
      image: null,
      stats: 'Available for opportunities'
    }
  };

  const PreviewCard = ({ data }) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-[var(--link-bg)] rounded-xl p-4 shadow-2xl z-50 pointer-events-none">
      <div className="flex items-start gap-3">
        {data.image && (
          <img 
            src={data.image} 
            alt={data.title}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="text-[var(--heading_1_color)] font-semibold text-lg">
            {data.title}
          </h3>
          <p className="text-[var(--text-color)] text-sm mt-1">
            {data.description}
          </p>
          <p className="text-[var(--text-color)] text-xs mt-2 opacity-70">
            {data.stats}
          </p>
        </div>
      </div>
    </div>
  );
  
  useGSAP(() => {
    const split = new SplitText('.name', { type: 'lines', linesClass: 'lineChildren', mask:'lines' });
        const split2 = new SplitText('.bio', { type: 'lines', linesClass: 'lineChildren', mask:'lines' });

    const tl = gsap.timeline();
    tl.fromTo('#portfolioImg', 
      { opacity: 0, translateY: -30 }, 
      { opacity: 1, translateY: 0, duration: 0.8, ease: 'power2.out' }
    );
    tl.fromTo(split.lines, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, duration: 0.5, y: 0, ease: 'power2.out' }
    );
     tl.fromTo(split2.lines, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, duration: 0.5, y: 0, stagger: 0.1, ease: 'power2.out' }
    );
     tl.fromTo('.links a', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, duration: 0.5, y: 0, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);
  return (
    <section className='flex flex-col items-center justify-center gap-4 mt-35 px-6'>
      <img src={PortfolioImage} className='h-[190px] w-[190px]' id='portfolioImg' alt="Portfolio" />
      <h1 className='name [color:var(--heading_1_color)] lg:text-4xl text-2xl'>Opajobi Oyegoke</h1>
      <p className='bio [color:var(--text-color)] lg:text-xl text-sm text-center w-[65%]'>I build user interfaces, think deeply about how software works, and write to make complex ideas easier to understand. I’m most excited when a project moves from an idea in my head to something real in the world.</p>
  <div class="links flex gap-6 justify-center items-center flex-wrap font-mono">
       <a
        class="text-[var(--text-color)] text-sm h-8 px-4 bg-[var(--link-bg)] transition-colors duration-200 hover:bg-[var(--link-hover)] rounded-full leading-0 flex items-center gap-1.5 relative group"
  href="https://github.com/Goksyfresh"
  target="_blank"
  rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink('github')}
          onMouseLeave={() => setHoveredLink(null)}
>
  <FaGithub class="text-[var(--heading_1_color)] -mt-0.5" size={20}/>
  Github
   {hoveredLink === 'github' && <PreviewCard data={linkPreviews.github} />}
</a>
            <a
                class="text-[var(--text-color)] bg-[var(--link-bg)] h-8 rounded-full px-4 text-sm transition-colors duration-200 hover:bg-[var(--link-hover)] leading-0 flex items-center gap-1.5"
                href="https://x.com/Oyegoke19"
                target="_blank"
                rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink('twitter')}
          onMouseLeave={() => setHoveredLink(null)}
                >
                  <FaXTwitter class="text-[var(--heading_1_color)] -mt-0.5"
                    size={14} />
                Twitter
                 {hoveredLink === 'twitter' && <PreviewCard data={linkPreviews.twitter} />}
            </a>
            <a
                class="text-[var(--text-color)] bg-[var(--link-bg)] h-8 rounded-full px-4 leading-0 transition-colors duration-200 hover:bg-[var(--link-hover)] text-sm flex items-center gap-1.5"
                href="https://www.linkedin.com/in/opajobioyegoke/"
                 target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink('linkedin')}
          onMouseLeave={() => setHoveredLink(null)}
            >
              <FaDev class="text-[var(--heading_1_color)] -mt-0.5"
                    size={20} />
                Writing blog
                 {hoveredLink === 'linkedin' && <PreviewCard data={linkPreviews.linkedin} />}
            </a>
            <a
                class="text-[var(--text-color)] bg-[var(--link-bg)] h-8 rounded-full px-4 text-sm transition-colors duration-200 hover:bg-[var(--link-hover)] leading-0 flex items-center gap-1.5"
                href="mailto:opajobioyegokeoyebola@gmail.com"
                  target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink('mail')}
          onMouseLeave={() => setHoveredLink(null)}
            >
              <IoIosMail  class="text-[var(--heading_1_color)] -mt-0.5"
                    size={20} />
                Mail
                {hoveredLink === 'mail' && <PreviewCard data={linkPreviews.mail} />}
            </a>
        </div>
    </section>
  )
}

export default About

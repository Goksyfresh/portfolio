import { FaDev, FaGithub } from 'react-icons/fa';
import PortfolioImage from '../images/Me.png';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 mt-35 px-6'>
      <img src={PortfolioImage} className='h-[220px] w-[220px]' alt="Portfolio" />
      <h1 className='[color:var(--heading_1_color)] lg:text-4xl text-2xl'>Opajobi Oyegoke</h1>
      <p className='[color:var(--text-color)] lg:text-xl text-sm text-center w-[50%]'>Passionate Software Engineer with a focus on React Native development,
dedicated to crafting elegant and user-friendly mobile applications.</p>
  <div class="flex gap-6 justify-center items-center flex-wrap font-mono">
            <a
                class="text-[var(--text-color)] text-sm h-8 px-4 bg-[var(--link-bg)] transition-colors duration-200 hover:bg-[var(--link-hover)] rounded-full leading-0 flex items-center gap-1.5"
                href="https://github.com/Goksyfresh"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaGithub class="text-[var(--heading_1_color)] -mt-0.5"
                    size={20}/>
                Github
            </a>
            <a
                class="text-[var(--text-color)] bg-[var(--link-bg)] h-8 rounded-full px-4 text-sm transition-colors duration-200 hover:bg-[var(--link-hover)] leading-0 flex items-center gap-1.5"
                href="https://x.com/Oyegoke19"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FaXTwitter class="text-[var(--heading_1_color)] -mt-0.5"
                    size={14} />
                Twitter
            </a>
            <a
                class="text-[var(--text-color)] bg-[var(--link-bg)] h-8 rounded-full px-4 leading-0 transition-colors duration-200 hover:bg-[var(--link-hover)] text-sm flex items-center gap-1.5"
                href="https://www.linkedin.com/in/opajobioyegoke/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaDev class="text-[var(--heading_1_color)] -mt-0.5"
                    size={20} />
                Writing blog
            </a>
            <a
                class="text-[var(--text-color)] bg-[var(--link-bg)] h-8 rounded-full px-4 text-sm transition-colors duration-200 hover:bg-[var(--link-hover)] leading-0 flex items-center gap-1.5"
                href="mailto:opajobioyegokeoyebola@gmail.com"
            >
              <IoIosMail  class="text-[var(--heading_1_color)] -mt-0.5"
                    size={20} />
                Mail
            </a>
        </div>
    </section>
  )
}

export default About

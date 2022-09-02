import React from 'react';
import AnimatedText from 'react-animated-text-content';

const Header = () => {
    return (
        <div className='Container'>
            <header>
                <div className='HeaderText'>
                    <div >
                    <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="bounce"
  interval={0.06}
  duration={1}
  tag="h1"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
                        GO JOBBER
                        </AnimatedText>
                        <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="rifle"
  interval={0.06}
  duration={0.6}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>Enjoy Online Job Searching with GO JOBBER </AnimatedText>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
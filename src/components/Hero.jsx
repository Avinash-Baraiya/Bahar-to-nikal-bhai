import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1524388661439-fb4a523ded9a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vhc2hvcmUlMjBkYXJrfGVufDB8fDB8fHww" alt="beachimage" className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col p-4 text-white'>
                <h1 className='font-bold text-4xl'>Lorem ipsum dolor sit amet.</h1>
                <h2 className='text-4xl py-4 italic'>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos possimus error ullam aperiam, temporibus beatae enim pariatur! Molestiae magnam harum cupiditate qui eaque beatae asperiores molestias deleniti maiores earum laborum ipsa, possimus pariatur at porro nisi dolor reprehenderit dolores </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
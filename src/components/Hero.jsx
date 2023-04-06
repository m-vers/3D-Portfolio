import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full hero mx-auto xsmall:h-96'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/* Create gradient line & circle */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fa3879]'/> 
          <div className='w-1 sm:h-80 h-40 red-gradient'/>
        </div>

        {/* Header Message */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#fa3879]'>Mitchell</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop front end with a focus <br className='sm:block hidden'/>on creating interactive, accessible, and responsive applications.</p>
        </div>

        <div className='xsmall:hidden'>
          <img src="./src/assets/header.svg" alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
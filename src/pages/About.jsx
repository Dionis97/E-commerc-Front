import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Të udhëhequr nga nevoja për inovacion dhe për të ruajtur një lidhje të ngushtë me klientët tanë, ne përpiqemi të flasim në një gjuhë të ngrohtë dhe njerëzore—pa u dukur teknikë, të larguar ose tepër të komplikuar për t'u kuptuar.</p>
        <p>Ne besojmë në markën tonë, thjeshtësinë dhe sigurinë e saj, por më e rëndësishmja, besojmë në aftësinë e produkteve tona për të bërë jetën tuaj dhe jetën e familjes tuaj më të këndshme dhe më të lehtë.</p>
        <p className='text-gray-800'>OUR MISSION</p>
        <p>Pavarësisht nëse bëhet fjalë për gatimin e një vakti të shijshëm për një grumbullim familjar, larjen e disa rrobave për një rast të veçantë, ruajtjen e higjienës së përsosur në shtëpinë tuaj, ose thjesht dëshironi të relaksoheni ndërsa shikoni shfaqjen tuaj të preferuar televizive, ne do të jemi aty pranë jush, do t'ju mbajmë për dore dhe do t'ju udhëheqim në çdo hap të rrugës. Mund të uleni, të relaksoheni dhe të mbështeteni në kujdesin dhe cilësinë tonë për të bërë ditën tuaj të përsosur.</p>
        </div>

      </div>
        
        <div className='text-4xl text-center mt-20'>
          <Title text1={'TEST'} text2={'WASAP'}/>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import HeroSection from '../../component/layout/hero'
import ProductSlide from '../../component/layout/productSlide'
import BlogsCard from '../../component/layout/blogs'
import FaqsComponent from '../../component/layout/faqs'

const Home = () => {
  return (
   <>
    <HeroSection/>
    <ProductSlide/>
    <BlogsCard/>
    <FaqsComponent/>
   </>
  )
}

export default Home

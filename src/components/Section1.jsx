import React from 'react'
import doc from "../assets/doc2.png"
function section1() {
  return (
   <>
   <section class="text-gray-600 body-font bg-gray-300 rounded-bl-[500px]">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="md:w-1/2 lg:pl-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome!
      </h1>
      <p class="mb-8 leading-relaxed">Medical Care, equipped with latest technology and modern functioning. Signup and get your data in an efficient manner.</p>
      
    </div>
    <div class=" w-[80%] sm:w-[56%] flex justify-center">
      <img class="w-[56%] object-center rounded" alt="docter" src={doc}/>
    </div>
  </div>
</section>
   </>
  )
}

export default section1;

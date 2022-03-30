import './App.css';

import IMG from './images/aman.img'
import React, {useEffect, useRef} from 'react';
import gsap from "gsap"
import tel from "./images/telegram-brands.svg"
import what from "./images/whatsapp-brands (1).svg"
import phone from "./images/phone-solid.svg"


const App = () => {

    const tl = useRef();
    useEffect(()=>{
        tl.current = gsap.timeline();
        gsap.from(".right", {
            x : -100,
            opacity : 0,
            duration : 1,
            stagger : 0.3
        })
    })
    useEffect(()=>{
        tl.current = gsap.timeline();
        gsap.from(".bottom", {
            y : 200,
            opacity : 0,
            duration : 1,
            stagger : 0.3
        })
    })
    useEffect(()=>{
        tl.current = gsap.timeline();
        gsap.from(".top", {
            y : -200,
            opacity : 0,
            duration : 1,
            stagger : 0.3
        })
    })
  return (
      <div className="container mx-auto">
          <div className=" border-2 my-4 px-5 pt-3 pb-3 w-[96.5%] top rounded-[5px]">
              <h1 className={"aman"}>aman$oft</h1>
          </div>
          <div className="grid grid-cols-6 gap-4">
             <div className="col-span-2 w-[90%] relative bg-white">
                 <div className=" border-2 px-5 pt-8 pb-3 right rounded-[5px]">
                     <div className="flex justify-center">
                         <div className="w-[60%] rounded-[50%] relative truncate border-2 h-[180px] object-cover">
                             <img src={IMG} alt="" className="w-[100%] object-cover h-[100%]"/>
                         </div>
                     </div>
                     <div className="my-4 pt-4">
                         <h1 className='text-[28px] text font-bold'>Исмайилов Аман</h1>
                         <p className="text">
                             Фронтенд разработчик • Веб-разработчик • Средний (Junior)
                         </p>
                     </div>
                 </div>
                 <div className=" border-2 my-4 px-5 pt-8 pb-3 rounded-[5px] right">
                     <div className="">
                         <h1 className="question">Возраст : <span className="answer">22 года</span></h1>
                         <h1 className="question">Опыт работы : <span className="answer">1 год</span></h1>
                         <h1 className="question">Регистрация : <span className="answer">----</span></h1>
                         <h1 className="question ">Последний визит : <span className="answer">15 дней назад</span></h1>
                         <h1 className="question my-3">Местоположение : <span className="answer">Кыргызстан, Бишкек</span></h1>
                         <h1 className="question">Профессиональные навыки
                             : <span className="answer">React • Redux • JavaScript  • SCSS •Tailwindcss • Адаптивная верстка • Git •CSS • HTML • БЭМ </span></h1>
                     </div>
                 </div>
                 <div className=" border-2 my-4 px-5 pt-8 pb-3 rounded-[5px] right">
                     <div className="flex justify-between">
                         <h1 className="question">Рекомендательные письма : </h1><span className="answer">0</span>
                     </div>
                     <div className="flex justify-between">
                         <h1 className="question">Друзья : </h1><span className="answer">0</span>
                     </div>
                 </div>
             </div>
              <div className="col-span-4 -ml-10 w-[100%] relative ">
                  <div className="border-2  px-5 pt-4 pb-3 rounded-[5px] bottom">
                      <h1 className="text text-[18px] my-4 font-bold">Обо мне</h1>
                      <p><span className=" font-bold">Frontend</span> Developer. Люблю все, что связано с технологиями , играю все виды спорта. Начинал свой путь с разработки проложения(Flutter-dart). Применяю в работе такие инструменты как: <span className="font-bold">React , Next</span>.</p>
                      <div>
                          <h1 className="question mt-6"><i>Skills :</i></h1>
                          <div className="relative pl-4">
                              <h1 className="question mt-1">- JavaScript(ES6+)</h1>
                              <h1 className="question mt-1">- React / Redux</h1>
                              <h1 className="question mt-1">- HTML / CSS</h1>
                              <h1 className="question mt-1">- SCSS / SASS</h1>
                              <h1 className="question mt-1">- TailwindCSS</h1>
                              <h1 className="question mt-1">- BEM</h1>
                              <h1 className="question mt-1">- Git / GitHub</h1>
                              <h1 className="question mt-1">- GSAP</h1>
                              <h1 className="question mt-1">- Flexbox / Grid</h1>
                          </div>
                          <div>
                              <h1 className="question mt-6"><i>Projects:</i></h1>
                              <div>
                                  <h1 className="question mt-1">- <a href="https://shop-tailwind-lilac.vercel.app/" ><span className="answer">React/Redux/Shop</span></a></h1>
                                  <h1 className="question mt-1">- <a href="https://react-search-dun.vercel.app/" ><span className="answer">React/Search</span></a></h1>
                                  <h1 className="question mt-1">- <a href="https://univer-drab.vercel.app/" ><span className="answer">iusm.edu.kg</span></a></h1>
                                  <h1 className="question mt-1">- <a href="https://gsap-photo.vercel.app" ><span className="answer">Gsap</span></a></h1>
                                  <h1 className="question mt-1">- <a href="https://hovers.vercel.app/" ><span className="answer">Buttons hover </span></a></h1>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="border-2 mt-4 px-5 pt-4 pb-3 rounded-[5px] bottom">
                      <h1 className="text text-[18px] my-4 font-bold">Контакт</h1>
                      <div>
                          <h1 className="question mt-1 flex ">- <a href="https://wa.me/+996707405152"><span className="answer flex justify-center items-center "> <img src={what} alt="" className="svg"/> Whatsapp</span></a></h1>
                          <h1 className="question mt-1 flex ">- <a href="tel:+996707405152" ><span className="answer flex justify-center items-center "><img src={phone} alt="" className="svg"/> Phone</span></a></h1>
                          <h1 className="question mt-1 flex">- <a href="https://telegram.me/aman_soft" ><span className="answer  justify-center items-center flex"><img src={tel} alt="" className="svg"/> Telegram</span></a></h1>
                          <h1 className="question mt-1">- <a href="mailto:itdeveloperaman@gmail.com" ><span className="answer">  @ E-mail</span></a></h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default App;
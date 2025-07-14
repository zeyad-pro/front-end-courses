"use client"
import FaqItem from "@/app/comps/text";
import Traingle from "@/app/comps/traingle";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function Add() {
  return (
    <div className="main-l">
      <h1 className="text-h">صفحه شراء كورس</h1>
      <hr className="w-4/5 border-2 border-white rounded-full my-1 my-10" />
      <img
        src="/imgs/course.png"
        alt="course"
        className="mb-15"
        style={{ width: "60%", height: "80%", borderRadius: 25 }}
      />
      <h1 className="text-h">كورس الجافا اسكربت</h1>
      <p className="text-h4 mx-30 my-5">
        الةامب قرﻻي رمينت ارثمياقلثقلماث قملا ثقرقثﻻرثق رث قمر ثقر قثتا ثقار ق
        رقثا رمث لاةبابا ب ب اب ب يﻻيل بل بىب بنبتنتمعر يري لنيل نريق راق تﻻنت
        رقمى ؤتم ا امه ن تاﻻ ماﻻ ما ﻻتا ﻻ اﻻ اا رقثا رث قر
      </p>
       <button className="btn my-5">اشتريه الان مقابل 299$</button>
        {/* <Traingle q='g' a='g'/> */}
       <FaqItem question="text qu" answer="test an"/>
    </div>
  );
}

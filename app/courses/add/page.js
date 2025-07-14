"use client"
import ImageUploader from "@/app/comps/img";
import FaqItem from "@/app/comps/text";
import Traingle from "@/app/comps/traingle";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Description, Field, Input, Label } from '@headlessui/react'
import { Button } from '@headlessui/react'
import clsx from 'clsx'
export default function Add() {
  return (
    <div className="main-l">
      <h1 className="text-h">صفحه اضافه كورس</h1>
      <hr className="w-4/5 border-2 border-white rounded-full my-1 my-10" />
    <div className="w-full  py-5 px-4">
      <Field className="w-full">
        <Label className="text-sm/6 font-medium text-white text-h4">اسم الكورس:</Label>
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
        <Description className="text-sm/6 text-white/50 ">هذا الاسم الذي سيظهر للمشتري</Description>
      </Field>   <Field className="w-full">
        <Label className="text-sm/6 font-medium text-white text-h4"> الوصف:</Label>
        <Input
          className={clsx(
            'mt-3 p-5 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 p-10 data-focus:outline-white/25'
          )}
        
        />
        <Description className="text-sm/6 text-white/50 ">هذا الوصف الذي سيظهر للمشتري</Description>
      </Field><Field className="w-full">
        <Label className="text-sm/6 font-medium text-white text-h4"> السعر:</Label>
        <Input type='number'
          className='mt-3 p-5 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 p-10 data-focus:outline-white/25'
        />
        <Description className="text-sm/6 text-white/50 ">هذا السعر الذي سيظهر للمشتري</Description>
      </Field>
          <ImageUploader />
      <a href="/courses">
         <Button className="btn ">
        Save changes
      </Button>
      </a>
    </div>
 </div>
  );
}

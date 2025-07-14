import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function FaqItem() {
  return (
    <div className="my-10 w-full">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/10 rounded-xl bg-white/5">
        {/* السؤال الأول */}
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          {({ open }) => (
            <>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm font-medium text-white group-hover:text-white/80">
                  من هو المؤسس لهذا الكورس؟
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 fill-white/60 transition-transform duration-200 ${
                    open ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-white/50">
                انه الباش مهندس: احمد خيري
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        {/* السؤال الثاني */}
        <Disclosure as="div" className="p-6">
          {({ open }) => (
            <>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm font-medium text-white group-hover:text-white/80">
                  ما تاريخ هذا الكورس؟
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 fill-white/60 transition-transform duration-200 ${
                    open ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-white/50">7/7/2026</DisclosurePanel>
            </>
          )}
        </Disclosure>        
        
        <Disclosure as="div" className="p-6">
          {({ open }) => (
            <>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm font-medium text-white group-hover:text-white/80">
                لماذا لا يوجد تقيمات؟
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 fill-white/60 transition-transform duration-200 ${
                    open ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-white/50">لان مطور الموقع يعمل علي ذالك وستتم اضافتها قريبا ان شاء الله.</DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

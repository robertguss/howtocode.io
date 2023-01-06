import { useState, useEffect } from 'react'
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Banner() {
  const [showBanner, setBanner] = useState(true)

  const hideBanner = () => {
    localStorage.setItem('displayBanner', false)
    setBanner(false)
  }

  useEffect(() => {
    if (localStorage.getItem('displayBanner')) {
      setBanner(false)
    }
  }, [])

  return (
    <>
      {showBanner && (
        <div className="bg-sky-700">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-sky-900 p-2">
                  <MegaphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">
                    Check out my new book, Getting Started with Astro
                  </span>
                  <span className="hidden md:inline">
                    Check out my new book, Getting Started with Astro
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="https://leanpub.com/gettingstartedwithastro"
                  target="_blank"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-sky-600 shadow-sm hover:bg-sky-50"
                  rel="noreferrer"
                >
                  Learn more
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  onClick={hideBanner}
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

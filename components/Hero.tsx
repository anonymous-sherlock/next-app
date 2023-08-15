"use client"

import { useState } from "react"

import { siteConfig } from "@/config/site"

import Wrapper from "./Wrapper"
import Loader from "./loader"
import { Button } from "./ui/button"

export function Hero() {
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    const url = (e.currentTarget.elements[0] as HTMLInputElement).value
    e.preventDefault()
    const pattern = new RegExp(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    )
    if (!pattern.test(url)) {
      alert("Invalid URL")
      return
    }
    try {
      setTimeout(async () => {
         console.log("hello")
      }, 1000)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      // setLoading(false)
    }

    // Validate URL
  }

  return (
    <>
      {loading && <Loader />}
      <Wrapper className="px-2 sm:px-0">
        <div className="hero text-center flex flex-col px-0 py-[100px] space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-5;">
            Webscrush Powerful SEO Analysis Tool
          </h1>
          <p className="text-xl mb-10;">
            Get valuable insights and improve your website's performance
          </p>
          <form
            className="seo-analysis-form"
            action={siteConfig.API_URL}
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group flex justify-center items-center max-w-[600px] mx-auto my-0">
              <input
                type="text"
                id="urlInput"
                placeholder="Enter your website URL"
                required={true}
                className="grow-[2] bg-[#333333] text-white text-sm sm:text-lg w-[65%] p-5 rounded-[3px_0_0_3px] border-none outline-none"
              />
              <Button
                type="submit"
                className="text-sm sm:text-lg cursor-pointer w-[35%] px-0 py-5 rounded-[0_3px_3px_0] h-full"
              >
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  )
}

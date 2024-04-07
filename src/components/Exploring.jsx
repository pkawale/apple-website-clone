import { useGSAP } from "@gsap/react"
import { batteryImg, iphone, iphonecamera, iphonepro, iphoneprocamera, iphoneprocessor, iphoneproprocessor, rightImg } from "../utils"
import { gsap } from "gsap";
import { models } from "../constants";


const Exploring = () => {

    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0 })
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    }, []);
  return (
      <section className="w-screen overflow-hidden h-screen common-padding bg-zinc">
          <div className="screen-max-width">
              <div className="mb-12 w-full md:flex items-end justify-between">
                  <h1 id="title" className="section-heading">Keep exploring iPhone.</h1>

                  <div className="flex flex-wrap items-end gap-5 ">
                      <p className="link">
                          Explore all iPhone
                          <img src={rightImg} alt="rightImg" className="ml-2"/>
                      </p>
                  </div>
              </div>
              <div className="w-screen flex overflow-hidden h-full common-padding bg-black rounded-lg justify-center">
                  <div className="flex flex-col flex-wrap items-center">
                      <img src={iphonepro} alt="iphone15pro" className="w-[40%]" />
                      
                      <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-black">
                          {models.map((item, i) => (
                            <li key={i} className="w-4 h-4 rounded-full mx-1 cursor-pointer"
                                style={{ backgroundColor: item.color[0] }}
                            />
                          ))}
                      </ul>
                      <h1 className="text-3xl font-semibold text-center">iPhone 15 Pro</h1>
                      <h2 className="text-lg font-semibold text-center mt-5">From $999 or $41.62/mo. for 24 mo.</h2>

                      <div className="flex flex-center w-full justify-between gap-12 mt-14 mb-12">
                          <p className="text-gray">Currently Viewing</p>
                          <button className="text-blue hover:underline cursor-pointer flex items-center text-xl">
                              Buy
                              <img src={rightImg} alt="rightImg" className="ml-1"/>
                          </button>
                      </div>
                                
                      <div className="bg-neutral-700 my-3.5 h-[1px] w-full" />

                      <img src={iphoneproprocessor} alt="processor" className="ml-2" />
                      <h1 className="text-3xl font-semibold text-center mt-5">A17 Pro chip with 6-core GPU</h1>
                    
                      <img src={iphoneprocamera} alt="proCamera" className="mt-10" />
                      <h1 className="text-3xl font-semibold text-center mt-5">Pro camera system</h1>
                      <p className="text-white text-xs text-center">Our most advanced 48MP Main camera</p>
                      <p className="text-white text-xs text-center">3x or 5x Telephoto camera</p>
                      <p className="text-white text-xs text-center">Ultra Wide camera</p>

                      <img src={batteryImg} alt="battery" className="mt-10" />
                      <h1 className="text-3xl font-semibold text-center mt-5 mb-20">Up to 29 hours video playback</h1>
                  </div>

                  <div className="flex flex-col flex-wrap items-center">
                      <img src={iphone} alt="iphone15pro" className="w-[40%]" />
                      
                      <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-black">
                          {models.map((item, i) => (
                            <li key={i} className="w-4 h-4 rounded-full mx-1 cursor-pointer"
                                style={{ backgroundColor: item.color[0] }}
                            />
                          ))}
                      </ul>
                      <h1 className="text-3xl font-semibold text-center">iPhone 15</h1>
                      <h2 className="text-lg font-semibold text-center mt-5">From $799 or $33.29/mo. for 24 mo.</h2>

                      <div className="flex flex-center w-full justify-between gap-12 mt-10 mb-12">
                          <button className="px-5 py-1.5 rounded-3xl bg-blue my-2 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue}">
                              Learn more
                          </button>
                          <button className="text-blue hover:underline cursor-pointer flex items-center text-xl">
                              Buy
                              <img src={rightImg} alt="rightImg" className="ml-1"/>
                          </button>
                      </div>

                      <div className="bg-neutral-700 my-1 h-[1px] w-full" />
                        
                      <img src={iphoneprocessor} alt="processor" className="ml-2 mt-2" />
                      <h1 className="text-3xl font-semibold text-center mt-5">A16 Bionic chip with 5-core GPU</h1>

                      <img src={iphonecamera} alt="camera" className="mt-10" />
                      <h1 className="text-3xl font-semibold text-center mt-5">Advanced dual-camera system</h1>
                      <p className="text-white text-xs text-center">48MP Main camera</p>
                      <p className="text-white text-xs text-center">2x Telephoto</p>
                      <p className="text-white text-xs text-center">Ultra Wide camera</p>

                      <img src={batteryImg} alt="battery" className="mt-10" />
                      <h1 className="text-3xl font-semibold text-center mt-5">Up to 26 hours video playback</h1>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Exploring
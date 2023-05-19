import React from "react"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { HiMail } from "react-icons/hi"
import { useContactQuery } from "../../hooks/useContactQuery"

export default function ContactUs() {
  const data = useContactQuery()
  const title = data.wpPage.title
  const Address1 = data.wpPage.blocks[2].originalContent
  const heading1 = data.wpPage.blocks[0].originalContent
  const Address2 = data.wpPage.blocks[6].originalContent
  const heading2 = data.wpPage.blocks[4].originalContent
  const Mail = data.wpPage.blocks[8].originalContent

  //const map = data.wpPage.blocks[4].originalContent

  return (
    <>
      <section class="max-w-[85rem] mx-auto  lg:px-2 mb-[0rem] clsContact  lg:mt-[10px] min-h-[530px]">
        <div class="flex flex-wrap pr-[0px]">

          <div class="grow-0 shrink-0 basis-auto mb-6 mt-20 md:mb-0 w-full  px-3 lg:px-6">
            <h2 class="text-3xl font-bold mb-8 text-[#000] text-[36px] capitalize">
              {title}
              
            </h2>
            <div class="clsAddressSection block md:flex md:justify-between ">
            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg mr-[2%]  md:w-[48%] clsFirstAddress">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#a31e22]">
                <span className="text-[22px] text-[white]">
                  <HiOutlineOfficeBuilding />
                </span>
              </div>

              <div class="ml-4">
              <p
                  class=" mb-2 flex items-start pl-1 text-[20px] text-black"
                  dangerouslySetInnerHTML={{ __html: heading1 }}
                ></p>
                <p
                  class=" mb-2 flex items-start pl-1 text-[17px] text-black"
                  dangerouslySetInnerHTML={{ __html: Address1 }}
                ></p>
              </div>
            </div>

<br/>

            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg  md:w-[48%] clsSecondAddress">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#a31e22]">
                <span className="text-[22px] text-[white]">
                  <HiOutlineOfficeBuilding />
                </span>
              </div>

              <div class="ml-4">
              <p
                  class=" mb-2 flex items-start pl-1 text-[20px] text-black"
                  dangerouslySetInnerHTML={{ __html: heading2 }}
                ></p>
                <p
                  class=" mb-2 flex items-start pl-1 text-[17px] text-black"
                  dangerouslySetInnerHTML={{ __html: Address2 }}
                ></p>
              </div>
            </div>
            </div>



            <div class="flex justify-center items-center rounded-xl bg-white p-4 shadow-lg  md:w-[100%] mt-4">
              {/* <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#a31e22]">
                <span className="text-[24px] text-[white]">
                  <HiMail />
                </span>
              </div> */}

              <div class="ml-4 flex justify-center items-center ">
                <a
                  class=" pl-1 text-[20px] text-[#a51720] text-center font-bold"  
                  dangerouslySetInnerHTML={{ __html: Mail }}
                ></a>
              </div>
            </div>
          </div>
         {/*  <div class="grow-0 shrink-0 mt-[80px] basis-auto mb-12 md:mb-0 w-full md:w-12/12 lg:w-6/12 px-3 lg:py-2 lg:px-2 md:py-2 md:px-2 md:shadow lg:shadow h-fit">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.23739098149!2d80.23807451477853!3d13.020549190823779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526737531dd6d5%3A0x7582dd758d72316e!2sCove%20Offices%20%7C%20Coworking%20Space%20%7C%20Private%20Offices%20%7C%20Chennai!5e0!3m2!1sen!2sin!4v1677749367489!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
          {/* <div className="">     
             <img src={image}/>
</div> */}

        </div>
      </section>
    </>
  )
}

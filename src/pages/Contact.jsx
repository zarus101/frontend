import React from "react";
import { GridComponent, PageHeadingPicture, SectionTitle, Subtitle } from "../components/ui/Design";
import { ButtonMain } from "../components/ui/Buttons";
import { BsTelephonePlusFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";

const ContactIcons = [
  { id: 1, title: "Have any question?", text: "Free +92 (020)-9850", icon:< BsTelephonePlusFill size={25}/> },
  { id: 2, title: "Write email", text: "needhelp@company.com", icon:< IoMdMail size={25}/> },
  { id: 3, title: "Visit anytime", text: "66 broklyn golden street. New York", icon: <FaPaperPlane size={25}/> },
];

const Contact = () => {
  return (
    <>
      <section className="team relative">
      <PageHeadingPicture title="Contact"/>
        <div className="py-16">
          <div className="containers">
            <GridComponent col={2} gap={4}>
              <div className="right  md:w-full md:ml-0" data-aos="fade-right" data-aos-duration="1500">
                <div className="subtitle flex  justify-start">
                  <Subtitle text={"SEND US EMAIL"} />
                </div>
                <div className="my-10">
                  <SectionTitle text1="Feel free to write" />
                </div>
                <form>
                  <GridComponent col={2} gap={4} >
                    <input type="text" name="fullname" placeholder="Enter Name" className="bg-gray-200 w-full  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
                    <input type="email" name="emailAddress" placeholder="Enter Email" className="bg-gray-200 w-full p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
                    <input type="text" name="subject" placeholder="Enter Subject" className="bg-gray-200  p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />
                    <input type="text" name="phoneNo" placeholder="Enter Phone" className="bg-gray-200 w-full p-6  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required />

                  </GridComponent>
                  <textarea name="description" cols="30" rows="5" className="bg-gray-200 my-5 w-full outline-none p-3  focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required></textarea>
                  <ButtonMain text={"Send Message"} />
                </form>
              </div>
              <div className="pl-20"  data-aos="fade-left" data-aos-duration="1500">
                <Subtitle text={"NEED ANY HELP?"} />
                <div className="title flex justify-start w-full my-5">
                  <SectionTitle text1="Get in touch with us" />
                </div>
                <div className="text">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus augue, commodo ornare felis non, eleifend molestie metus pharetra eleifend.</div>
                <div>
                  <ul className="list-none contact-details__info mt-6">
                    {ContactIcons.map((item, i) => (
                      <li class="flex items-center mt-6" key={i}>
                        <div className="icon bg-orange-300 h-20 w-20 flex items-center justify-center transition-all duration-500 ease">
                          <span className=" ">{item.icon}</span>
                        </div>
                        <div className="text ml-8">
                          <h6 className=" font-bold text-2xl">{item.title}</h6>
                          <a href="tel:980089850" className="text-black text-lg transition-all duration-500 ease">
                            <span className="font-bold">{item.text}</span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GridComponent>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin" width="100%" title="contact" height="500" style={{ border: "0" }} loading="lazy"></iframe>
      </section>
    </>
  );
};

export default Contact;

"use client";
import axios from "axios";
import Image from "next/image";
import Register_hero from "@/assets/register_hero.png";
import Boy_icon from "@/assets/boy.png";
import Girl_icon from "@/assets/girl.png";
import { useEffect, useState } from "react";
// import Success from "@/app/modal/Success";
// export const metadata = {
//   title: "Getlinked Register Page",
//   description: "Generated by create next app",
// };
function RegisterPage() {
  const [options, setOptions] = useState([]);
  // const [teamName, setTeamName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [projectTopic, setProjectTopic] = useState("");
  // const [category, setCategory] = useState("");
  const [privacy, setPrivacy] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  console.log(privacy)
  useEffect(() => {
    // Define your API endpoint URL, BASE_URL is defined in next.config.js
    const getUrl = `${process.env.BASE_URL}/hackathon/categories-list`;
    // const postUrl = `${process.env.BASE_URL}/hackathon/registration`;

    // Make an Axios GET request to fetch the data
    axios
      .get(getUrl)
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.error("Error in Data Fetching:", err);
      });
  }, []);
  // Make an Axios POST request to fetch the data
  async function postData(formData) {
    const postUrl = `${process.env.BASE_URL}/hackathon/registration`;

    try {
      const response = axios.post(postUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log('Request was successful!', response.data);
    } catch (error) {}
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.value,
      phone_number: e.target.value,
      team_name: e.target.value,
      group_size: e.target.value,
      project_topic: e.target.value,
      category: e.target.value,
      private_policy_accepted: privacy,
    };
    try {
    } catch (error) {
      console.log(error);
    }
    await postData(formData);
  };

  return (
    <div className="container min-h-screen m-auto flex md:flex-row flex-col text-white mt-32  justify-between items-center">
      <div className=" md:w-1/2 w-full flex flex-col items-center justify-center">
        <Image
          src={Register_hero}
          alt="registerhero_img"
          className="w-[250px] md:w-[350px]"
        />
      </div>
      <div className="shadow-3xl ">
        <h1 className="text-4xl text-[#D434FE] font-semibold">Register</h1>
        <div className="flex items-center p-6">
          <p className="">Be part of this movement</p>
          <div className=" border-b-[1.5px] border-[#D434FE] border-dashed flex items-center justify-center">
            <Image src={Girl_icon} alt="girl" />
            <Image src={Boy_icon} alt="boy" />
          </div>
        </div>
        <div className="text-center">
          <h1>CREATE YOUR ACCOUNT</h1>
        </div>
        <form
          className="p-4  "
          onSubmit={ handleSubmit}
        >
          <div className="w-full gap-3 p-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full">
              <div>
                <label>Teams Name</label>
              </div>
              <input
                name="team_name"
                type="text"
                placeholder="Enter the name of your group"
                className="rounded p-2 w-full bg-transparent text-white border lg:w-[250px] outline-none "
              />
            </div>
            <div className="w-full">
              <div>
                <label>Phone</label>
              </div>
              <input
                type="text"
                name="phone_number"
                placeholder="Enter your phone number"
                className="rounded p-2 w-full bg-transparent text-white border lg:w-[250px] outline-none "
              />
            </div>
          </div>
          <div className="w-full  gap-3 p-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full">
              <div>
                <label>Email</label>
              </div>
              <input
                name="email"
                type="text"
                placeholder="Enter the name of your group"
                className="rounded p-2 w-full bg-transparent text-white border lg:w-[250px] outline-none "
              />
            </div>
            <div className="w-full">
              <div>
                <label>Project Topic</label>
              </div>
              <input
                name="project_topic"
                type="text"
                placeholder="Enter your phone number"
                className="rounded p-2 w-full bg-transparent text-white border lg:w-[250px] outline-none "
              />
            </div>
          </div>

          <div className="w-full gap-3 p-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full">
              <div>
                <label>Category</label>
              </div>
              <select
                // onChange={handleSelectChange}
                // value={category}
                name="category"
                className="rounded p-2 w-full bg-transparent text-white border lg:w-[250px] outline-none "
              >
                <option value="">Select an option</option>
                {options.map((opt) => (
                  <option key={opt.id} value={opt.id} className="bg-purple-400">
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <div>
                <label>Group Size</label>
              </div>
              <select
                name="group_size"
                className="rounded p-2 w-full bg-transparent text-white border lg:w-[250px] outline-none "
              >
                <option value="">Select an option</option>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
          </div>
          <p className="text-center md:text-left text-sm px-4 text-[#D434FE]">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center gap-3 justify-center text-center">
            <input
              type="checkbox"
              name="private_policy_accepted"
              value={privacy}
              onChange={() => {
                setPrivacy(!privacy);
              }}
              className=""
            />
            <p className="text-sm py-4">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <button className="w-[172px] text-center p-2 rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            Register Now
          </button>
          {/* {showModal && <Success />} */}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "flowbite-react";
import SpinnerGif from "../assets/Spinner.gif";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
const Tickets = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const URL =
      "https://smart-travel-b06756646a16.herokuapp.com/api/packages/get";
    axios
      .get(URL)
      .then((response) => {
        let filtered = response.data.filter(
          (packages) => packages.active === true,
        );
        if (searchTerm) {
          filtered = filtered.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }
        setData(filtered);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error.message);
      });
  }, [reload, searchTerm]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src={SpinnerGif}
          alt="Loading..."
          className="animate-spin-slow w-35 h-35"
        />
      </div>
    );
  }
  return (
    <div className="animate-fade-down">
      <div className="title">
        <h2 className="py-5 text-3xl lg:py-10 lg:text-4xl font-bold font-inter text-zinc-800 text-center">
          Tickets
        </h2>
      </div>
      <div className="flex flex-wrap lg:justify-center flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 p-10 rounded-lg">
        {data.map((destination) => {
          return (
            <Card
              className="transform hover:scale-110 shadow-lg rounded-lg lg:w-96 border-2  h-auto mt-2"
              imgSrc={destination.images[0].image}
            >
              <h5>{destination.title}</h5>

              <p className="text-left font-normal text-zinc-700 text-clip text-sm  overflow-auto h-20">
                {destination.description}
              </p>

              <div className="info flex justify-between">
                <div className="flex mt-2">
                  {/* <p className=" font-semibold mr-1">
                  Price
                  </p> */}
                </div>
                <p className="font-bold text-2xl mt-1 mr-auto">
                  {"$" + destination.price}
                </p>
                <Rating />
              </div>
              <span className="font-semibold">
                Available Tickets:{" "}
                <span className="text-red-500 font-bold">
                  {destination.totalCount}
                </span>
              </span>

              <Button
                color="dark"
                onClick={() => navigate(`/tickets/${destination._id}`)}
                className="shadow-sm  bg-zinc-100  text-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors duration-100  text-sm font-medium text-center rounded-lg bg-primary-700 w-full"
              >
                Book Now
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export const Rating = () => {
  return (
    <div className="mb-0 mt-0 flex items-center cursor-pointer">
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        5.0
      </span>
    </div>
  );
};
export default Tickets;

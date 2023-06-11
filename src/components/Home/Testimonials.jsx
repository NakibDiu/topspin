import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Emily Thompson",
    image: "https://i.ibb.co/6gNHVXd/testimonial-1.jpg",
    text: "My kids had an amazing time at your summer camp! They made new friends, learned valuable skills, and had unforgettable experiences. Thank you for providing such a fantastic program.",
  },
  {
    name: "Michael Rodriguez",
    image: "https://i.ibb.co/YjD3nS5/testimonial-2.jpg",
    text: "As a parent, I highly recommend your summer camp. The staff was friendly, the activities were engaging, and my child had a blast. It's a safe and nurturing environment where kids can learn, grow, and create lasting memories.",
  },
  {
    name: "Sophia Chen",
    image: "https://i.ibb.co/6W6gWQ0/testimonial-3.jpg",
    text: "Attending your summer camp was a transformative experience for my teenager. They developed new skills, gained confidence, and formed lifelong friendships. I'm grateful for the positive impact your camp had on my child's personal and social growth.",
  },
];

const Testimonials = () => {
  return (
    <div className="my-16 w-full">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
        What Parents and Participants Say
      </h2>
      <p className="mt-4  text-xl text-gray-500 text-center">
        Read testimonials from happy parents and participants about their
        experiences at our summer camp
      </p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="my-10"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="bg-gray-50 py-6">
            <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto lg:shadow-xl">
              <img
                src={testimonial.image}
                alt="Testimonial Image"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-800 text-lg mb-4">{testimonial.text}</p>
              <p className="text-gray-600 font-bold">{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

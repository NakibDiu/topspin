import React from "react";

const instructorsArray = [
    {
      "name": "John Smith",
      "email": "johnsmith@example.com",
      "image": "https://i.ibb.co/NZgsx18/coaching-1.jpg",
      "numOfStudents": 120,
      "totalCourses": 10,
      "rating": 4.5
    },
    {
      "name": "Sarah Johnson",
      "email": "sarahjohnson@example.com",
      "image": "https://i.ibb.co/2FQ0Zn7/coaching-5.jpg",
      "numOfStudents": 80,
      "totalCourses": 6,
      "rating": 4.2
    },
    {
      "name": "Michael Lee",
      "email": "michaellee@example.com",
      "image": "https://i.ibb.co/bz5Tbb3/coaching-2.jpg",
      "numOfStudents": 150,
      "totalCourses": 12,
      "rating": 4.8
    },
    {
      "name": "Emily Davis",
      "email": "emilydavis@example.com",
      "image": "https://i.ibb.co/RhqqxWy/coaching-4.jpg",
      "numOfStudents": 95,
      "totalCourses": 8,
      "rating": 4.3
    },
    {
      "name": "David Wilson",
      "email": "davidwilson@example.com",
      "image": "https://i.ibb.co/NtQ3n3q/coaching-3.jpg",
      "numOfStudents": 110,
      "totalCourses": 7,
      "rating": 4.1
    },
    {
      "name": "Karen Thompson",
      "email": "karenthompson@example.com",
      "image": "https://i.ibb.co/mCrQp7V/coaching-6.jpg",
      "numOfStudents": 75,
      "totalCourses": 5,
      "rating": 4.4
    },
    {
      "name": "Robert Miller",
      "email": "robertmiller@example.com",
      "image": "https://i.ibb.co/7vqQRKH/coaching-7.jpg",
      "numOfStudents": 200,
      "totalCourses": 15,
      "rating": 4.9
    },
    {
      "name": "Jennifer Parker",
      "email": "jenniferparker@example.com",
      "image": "https://i.ibb.co/NjsSQxH/coaching-9.jpg",
      "numOfStudents": 180,
      "totalCourses": 11,
      "rating": 4.7
    },
    {
      "name": "Andrew Turner",
      "email": "andrewturner@example.com",
      "image": "https://i.ibb.co/zSZy4nL/coaching-8.jpg",
      "numOfStudents": 90,
      "totalCourses": 6,
      "rating": 4.0
    },
    {
      "name": "Emma Davis",
      "email": "emmadavis@example.com",
      "image": "https://i.ibb.co/KVzNz0Q/coaching-10.jpg",
      "numOfStudents": 130,
      "totalCourses": 9,
      "rating": 4.6
    }
  ]
  

const Instructors = () => {
  return (
    <div className="my-16 w-full">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
        Top Instructors
      </h2>
      <p className="mt-4  text-xl text-gray-500 text-center">
        Discover the expertise and knowledge of our top-rated instructors
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-10 my-10"></div>
    </div>
  );
};

export default Instructors;

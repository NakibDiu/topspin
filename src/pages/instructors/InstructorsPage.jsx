import { useQuery } from "react-query";
import instructorsArray from "../../assets/data/instructors.json";
import { FiUsers } from "react-icons/fi";

const InstructorsPage = () => {
  const instructorQuery = useQuery({
    queryKey: ["instructors"],
    queryFn: (obj) => {
      // console.log(obj);
      return [...instructorsArray];
    },
  });

  if (instructorQuery.isLoading) {
    return (
      <div className="w-full min-h-[calc(100vh-120px)] flex justify-center items-center flex-col">
        <progress className="progress progress-info w-56" max="100"></progress>
      </div>
    );
  }

  return (
    <div className="">
      <div className="min-h-[150px] bg-gray-700 flex justify-center items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center">
          Our Instructors
        </h2>
      </div>
      <div className="my-6 lg:my-8 grid sm:grid-cols-2 lg:gid-cols-3 xl:grid-cols-4 gap-10">
        {instructorQuery.data.map((instructor, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {instructor.name}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{instructor.email}</p>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 01.777.372l2.926 3.774 4.427.87a1 1 0 01.553 1.703l-3.197 3.118.755 4.41a1 1 0 01-1.451 1.053L10 15.743l-3.943 2.08a1 1 0 01-1.452-1.052l.756-4.411L2.84 8.72a1 1 0 01.553-1.703l4.426-.87L9.223 2.372A1 1 0 0110 2zm0 2.415L7.52 6.56a1 1 0 01-.743.279l-4.427-.871 3.196 3.119a1 1 0 01.298.707l-.754 4.411 3.943-2.08a1 1 0 01.97 0l3.943 2.08-.754-4.41a1 1 0 01.297-.708l3.197-3.118-4.427.87a1 1 0 01-.742-.28L10 4.415z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">
                    {instructor.rating.toFixed(1)}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a1 1 0 00-.707.293L4 5.586V4a1 1 0 10-2 0v12a1 1 0 002 0v-1.586l3.293 3.293a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5A1 1 0 008 2zM7 6a1 1 0 011-1h5.586L8 11.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-700">
                    {instructor.totalCourses} courses
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FiUsers size={18} />
                  <p className="text-gray-700">
                    {instructor.numOfStudents} students
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstructorsPage;

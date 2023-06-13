import { useQuery } from "react-query";
// import classesArray from "../../assets/data/classes.json";
import { FiUsers } from "react-icons/fi";
import ClassCard from "./ClassCard";

const ClassesPage = () => {
  // const classesQuery = useQuery({
  //   queryKey: ["classes"],
  //   queryFn: (obj) => {
  //     // console.log(obj);
  //     return [...classesArray];
  //   },
  // });
  const fetchClasses = async () => {
    const response = await fetch("https://topspin-backend.vercel.app/classes");
    const data = await response.json();
    return data;
  };
  const { data, isLoading, error } = useQuery("classes", fetchClasses);


  if (isLoading) {
    return (
      <div className="w-full min-h-[calc(100vh-120px)] flex justify-center items-center flex-col">
        <progress className="progress progress-info w-56" max="100"></progress>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full min-h-[calc(100vh-120px)] flex justify-center items-center flex-col">
        <h4>{error.message}</h4>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-[150px] bg-gray-700 flex justify-center items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center">
          All Classes
        </h2>
      </div>
      <div className="my-6 lg:my-8 grid sm:grid-cols-2 lg:gid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((classData) => (
          <ClassCard key={classData.name} classData={classData} />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;

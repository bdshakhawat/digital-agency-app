import Image from "next/image";
async function getData() {
  try {
    const response = await fetch('https://agency.teamrabbil.com/api/FeaturedProject');
    if (!response.ok) {
      throw new Error('All project calling failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const FeaturedProject = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-4">

              <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                <div className="max-w-md">
                  <span className="text-green-600 font-bold">
                    Dolor sit amet consectutar
                  </span>
                  <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                    Build &amp; Launch without problems
                  </h2>
                  <div className="mb-6 max-w-sm">
                    <p className="text-gray-500 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                  <div className="flex flex-wrap lg:-ml-5">
                    <button className="lg:w-auto py-2 px-6 leading-loose lg:ml-5 text-gray-50 font-bold bg-green-600 hover:bg-green-700 transition duration-200 rounded-l-xl rounded-t-xl">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-full lg:w-1/2">
                   {data.map((item, i) => (                
                      <div className=" lg:mb-2 w-full  lg:w-1/2 px-3">

           
                        <img key={i}
                        
                          className="w-full h-32 lg:h-48 object-cover rounded"
                          src={item["image"]}
                          alt=""
                        />
                      </div>
                    ))}
 


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProject;

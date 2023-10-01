


async function getData() {
  try {
    const response = await fetch('https://agency.teamrabbil.com/api/BrandList ');
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

const Brand = async () => {
  const data = await getData();
    return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
              {data.map((item, i) => (
                <div key={i} className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                  <a target="_blank" rel="noopener noreferrer" href={item["live"]}>
                      <img className="mx-auto h-8" src={item["image"]} alt="" />
                  </a>
                </div>
               ))}
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Brand;


const NewPodcastLayout = () => {
  return (
    <section className='grid grid-rows-[auto_1fr_auto] grid-cols-1 md:grid-cols-[auto_1fr_auto]  min-h-screen'>
      <div className='bg-rose-600 p-4 w-[16rem] text-center hidden md:block gap-1 '>
        <div className='grid gap-1'>
          Left Sidebar
          {[0, 2, 4, 5, 6, 7].map((item) => {
            return (
              <div key={item} className='p-4 border '>
                Test- {item}
              </div>
            );
          })}
        </div>
      </div>
      <main className='bg-green-600 p-4 text-center grid gap-1'>
        Main Content
        {[0, 2, 4, 5, 6, 7].map((item) => {
          return (
            <div key={item} className='p-4 border '>
              Test- {item}
            </div>
          );
        })}
      </main>
      <div className='bg-blue-600 p-4  w-[16rem] text-center hidden md:grid gap-1'>
        Right Sidebar
        {[0, 2, 4, 5, 6, 7].map((item) => {
          return (
            <div key={item} className='p-4 border '>
              Test- {item}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewPodcastLayout;

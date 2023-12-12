const Projects = () => {
    return (
        <div className="mt-10 max-w-6xl mx-auto">
            <p className="text-4xl font-bold text-center">Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/nMGW04x/creative-cultura-ss.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Creative Cultura</h2>
                        <p className="font-bold">This is a project of event management, this project is about organizing cultural events, like Food Festivals, Clothing Fashion Show, Folk Music etc.</p>
                        <div className="card-actions">
                            <a href="https://creative-cultura.surge.sh/" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">Live Link</a>
                            <a href="https://github.com/KowshikChakraborty-AIUB/creative-cultura" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/tHkmJF1/brandwheels-ss.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">BrandWheels.com</h2>
                        <p className="font-bold">An automotive project of different car brands. User can see different kinds of car&apos;s deatils, add cars to their shopping cart and contact with us to buy.</p>
                        <div className="card-actions">
                            <a href="https://brandwheels.surge.sh/" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">Live Link</a>
                            <a href="https://github.com/KowshikChakraborty-AIUB/brandwheels-client-side" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">GitHub (Client)</a>
                            <a href="https://github.com/KowshikChakraborty-AIUB/brandwheels-server-side" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">GitHub (Server)</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/LYt4My8/tales-from-bangla-ss.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Tales From Bangla</h2>
                        <p className="font-bold">A local tour project of exploring landscapes, traditions, and flavors of Bangladesh with local guides.</p>
                        <div className="card-actions">
                            <a href="https://tales-from-bangla.surge.sh/" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">Live Link</a>
                            <a href="https://github.com/KowshikChakraborty-AIUB/tales-from-bangla-client-side" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">GitHub (Client)</a>
                            <a href="https://github.com/KowshikChakraborty-AIUB/tales-from-bangla-server-side" className="btn btn-primary bg-[#5ED3F3] hover:bg-[#5ED3F3] text-black">GitHub (Server)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
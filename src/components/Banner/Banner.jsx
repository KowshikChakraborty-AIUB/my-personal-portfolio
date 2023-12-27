const Banner = () => {
    return (
        <div className='hero min-h-screen' style={{ backgroundImage: 'url(https://i.ibb.co/VJRd4fg/mern-stack-2.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className='hero-content gap-6'>
                <div>
                    <p className="font-bold text-5xl text-white">Kowshik Chakraborty</p>
                    <p className="font-bold text-3xl mt-2 text-white">MERN Stack Developer</p>
                    <div className="mt-4 flex gap-4">
                        <a href="https://www.linkedin.com/in/kowshik-chakraborty/">
                            <img className="h-11 w-11" src="https://i.ibb.co/c2WqqnL/linkedin-icon.png" alt="" />
                        </a>
                        <a href="https://github.com/kowshikchakraborty-aiub">
                            <img className="h-11 w-11 bg-white rounded-full" src="https://i.ibb.co/bFM9pQ2/git-Hub-icon.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009473225157">
                            <img className="h-11 w-11 rounded-full" src="https://i.ibb.co/hf744LG/facebook-circle-pictogram.png" alt="" />
                        </a>
                    </div>
                    <a href="../../../dist/Resume_Kowshik_Chakraborty.pdf" download={'Resume-of-Kowshik-Chakraborty'} className="btn mt-6 bg-[#5ED3F3] text-black text-base font-bold rounded-lg hover:bg-white">Download Resume</a>
                </div>
                <div>
                    <img className="h-72 w-72 rounded-full border-4 border-[#5ED3F3]" src='https://i.ibb.co/KKvPDbt/Kowshik.jpg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
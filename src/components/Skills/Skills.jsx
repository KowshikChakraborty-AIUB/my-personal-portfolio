const Skills = () => {
    return (
        <div className="mt-10 max-w-6xl mx-auto">
            <p className="text-4xl font-bold text-center">My Skills</p>
            <div className="flex flex-wrap gap-6 justify-evenly mt-8">
                <div>
                    <img className="mx-auto" src="https://i.ibb.co/8PnfGzx/js.png" alt="" />
                    <p className="text-xl text-center font-bold mt-2">JavaScript</p>
                </div>
                <div>
                    <img className="mx-auto" src="https://i.ibb.co/DrL48YT/react.png" alt="" />
                    <p className="text-xl text-center font-bold mt-2">React</p>
                </div>
                <div>
                    <img className="mx-auto" src="https://i.ibb.co/nBLMG0S/nodejs.png" alt="" />
                    <p className="text-xl text-center font-bold mt-2">Node</p>
                </div>
                <div>
                    <img className="mx-auto" src="https://i.ibb.co/4ZtGr2W/Express-Js-48.png" alt="" />
                    <p className="text-xl text-center font-bold mt-2">Express</p>
                </div>
                <div>
                    <img className="mx-auto" src="https://i.ibb.co/hVfD7bp/mongo.png" alt="" />
                    <p className="text-xl text-center font-bold mt-2">MongoDB</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
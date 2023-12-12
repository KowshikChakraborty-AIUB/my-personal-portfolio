import { MdDriveFileRenameOutline, MdOutlineEmail, MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";

const AboutMe = () => {
    return (
        <div className="mt-10 max-w-6xl mx-auto">
            <p className="text-4xl font-bold text-center">About Me</p>
            <p className="text-xl text-justify mt-5">
                Myself Kowshik Chakraborty, and recently I learned MERN stack web development and gained knowledge in <b>React, Express, Node</b> and <b>MongoDB</b>. I am very curious to learn new technologies and try to adapt new technologies to cope up with the modern world. Now, I want to create an impact in the world of web development through applying my knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <div>
                    <p className="font-bold text-xl mb-2 flex justify-center items-center gap-2">
                        <MdDriveFileRenameOutline />Name
                    </p>
                    <p className="font-bold text-xl text-center">Kowshik Chakraborty</p>
                </div>
                <div>
                    <p className="font-bold text-xl mb-2 flex justify-center items-center gap-2">
                        <MdOutlineEmail />E-mail
                    </p>
                    <p className="font-bold text-xl text-center">kowshikchakraborty6@gmail.com</p>
                </div>
                <div>
                    <p className="font-bold text-xl mb-2 flex justify-center items-center gap-2">
                        <MdOutlineDateRange />Date of Birth
                    </p>
                    <p className="font-bold text-xl text-center">09th August, 1999</p>
                </div>
                <div>
                    <p className="font-bold text-xl mb-2 flex justify-center items-center gap-2">
                        <MdOutlineLocationOn />From
                    </p>
                    <p className="font-bold text-xl text-center">Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
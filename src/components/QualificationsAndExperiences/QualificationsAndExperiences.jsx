import { MdCastForEducation } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
const QualificationsAndExperiences = () => {
    return (
        <div className="mt-10 max-w-6xl mx-auto">
            <p className="text-4xl font-bold text-center">Qualifications & Experiences</p>
            <div className="mt-8 flex flex-col lg:flex-row justify-between gap-4">
                <div>
                    <p className="text-4xl font-bold flex gap-4 items-center">
                        <MdCastForEducation />Education
                    </p>
                    <div className="my-10">
                        <p className="text-2xl font-bold">Bsc. in Computer Science & Engineering</p>
                        <p className="text-xl font-bold">American International University-Bangladesh</p>
                        <p className="text-xl font-bold">Passing Year: 2023</p>
                    </div>
                    <div className="my-10">
                        <p className="text-2xl font-bold">HSC</p>
                        <p className="text-xl font-bold">Hazi Misir Ali University College</p>
                        <p className="text-xl font-bold">Board: Dhaka</p>
                        <p className="text-xl font-bold">Group: Science</p>
                        <p className="text-xl font-bold">Passing Year: 2017</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">SSC</p>
                        <p className="text-xl font-bold">Fatulla Pilot High School</p>
                        <p className="text-xl font-bold">Board: Dhaka</p>
                        <p className="text-xl font-bold">Group: Science</p>
                        <p className="text-xl font-bold">Passing Year: 2015</p>
                    </div>
                </div>
                <div className="float-left w-1 bg-[#5ED3F3]">

                </div>
                <div>
                    <p className="text-4xl font-bold flex gap-4 items-center">
                        <GrUserExpert />Experience
                    </p>
                    <div className="my-10">
                        <p className="text-2xl font-bold">Programming Hero</p>
                        <p className="text-xl font-bold">Learned MERN Stack Web Development</p>
                        <p className="text-xl font-bold">Duration: 6 Months</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualificationsAndExperiences;
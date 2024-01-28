import Updating from "../../assets/updating.svg";
interface UpdateProps { }
export default function Update({ }: UpdateProps) {
    return (
        <div className="flex flex-col">
            <img src={Updating} className="flex w-1/4 self-center" />
            <div className="flex flex-row self-center my-7">
                <p className="animate-u font-sans font-black text-9xl text-primary-400">U</p>
                <p className="animate-p font-sans font-black text-9xl text-primary-400">P</p>
                <p className="animate-d font-sans font-black text-9xl text-primary-400">D</p>
                <p className="animate-a font-sans font-black text-9xl text-primary-400">A</p>
                <p className="animate-t font-sans font-black text-9xl text-primary-400">T</p>
                <p className="animate-i font-sans font-black text-9xl text-primary-400">I</p>
                <p className="animate-n font-sans font-black text-9xl text-primary-400">N</p>
                <p className="animate-g font-sans font-black text-9xl text-primary-400">G</p>
            </div>
        </div>
    );
}
import ucc_logo from "./ucc_logo.svg";

interface Props{
  logoStyle?:string;
  textStyle?:string;
}

export default function UccLogo(props:Props) {
  return (
    <div className={`flex justify-center items-center gap-3 mb-2 py-4 ${props.logoStyle}`}>
      <div className="bg-primary-main/[0.05] h-16 w-16 rounded-full ">
        <img src={ucc_logo} alt="" className="  p-3.5 " />
      </div>
     <div className="flex flex-col">
     <h2 className={`text-2xl ${props.textStyle}`}>U.S.P.</h2>
      <p className="text-xs">University Staff Portal</p>
     </div>
    </div>
  );
}

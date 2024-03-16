import Image from "next/image";
import mainBg from "/public/images/main-bg.jpg";
import Icon from "../components/common/icon";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col relative items-center">
      <Image
        src={mainBg}
        alt=""
        className="absolute z-0 w-full h-screen brightness-50"
      />
      <div className=" relative z-50 bg-white w-[500px] min-h-screen">
        <div className=" fixed top-0 left-0 flex items-center justify-center gap-2">
          <Icon name="ic:baseline-fitness-center" className="" />
          <div className="text-neutral-700 text-md font-semibold">
            Finger Crossed Fit
          </div>
        </div>
        {children}
        <div className="fixed top=0 left-0"></div>
      </div>
    </div>
  );
}

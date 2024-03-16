import Image from "next/image";

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = "w-4 h-4" }) => {
  const src = encodeURI(`https://api.iconify.design/${name}.svg`);

  const style = {
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
    maskSize: "cover",
    WebkitMaskSize: "cover",
  };

  if (src) {
    return <div style={style} className={"relative " + className}></div>;
  }
};

export default Icon;

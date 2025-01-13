import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";

type LatestProjectsItemProps = {
  title: string;
  description: string;
  image: string;
  source: string;
  visit: string;
};

const LatestProjectsItem = ({
  title,
  description,
  image,
  source,
  visit,
}: LatestProjectsItemProps) => {
  return (
    <Card className="max-w-[35rem] w-full h-60 relative rounded-2xl group overflow-hidden cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        sizes="100%"
        className="rounded-2xl absolute w-full h-60 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
        aria-label={title}
      />
      <CardContent className="absolute left-0 bottom-0 w-full h-0 p-0 group-hover:h-full group-hover:flex flex-col space-y-8 items-center transition-[height] duration-500 ease-in-out justify-center bg-gradient-to-r from-[#67e9ff] to-[#62d7eb]">
        <h5 className="text-xl lg:text-5xl font-semibold text-white">
          {title}
        </h5>
        <p className="text-xl text-white">{description}</p>
        <div className="flex justify-center gap-12">
          <Link href={source} target="_blank" aria-label="Github">
            <AiFillGithub className="text-xl text-white w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]" />
          </Link>
          <Link href={visit} target="_blank" aria-label="Visit">
            <IoRocketOutline className="text-xl text-white w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestProjectsItem;
// from-[#000000cc] to-[#0d9488]

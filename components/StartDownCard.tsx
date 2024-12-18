import StartDownCardType from "@/types/StartDownCardType";
import { convertDateTime } from "@/lib/utils";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const StartDownCard = ({ post }: { post: StartDownCardType }) => {
  const { _createdAt, views, author, _id, description, image, category, title } = post;
  const {_id:authId,image:authImage,name:authName,userName:authUserName}=author
  return (
    <li className="startup-card group"> 
      <div className="flex-between">
        <p className="startup_card_date">
          {convertDateTime(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <FaEye size={24}></FaEye>
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/users/${authId}`}>
            <p className="text-16-medium line-clamp-1">{authName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/users/${authId}`}>
          <Image src={authImage} alt={authName} width={48} height={48} className="rounded-full"></Image>
        </Link>

      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">
          {description}
        </p>
        <img src={image} alt={title} className="startup-card_img"/>
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </button>
      </div>
    </li>
  );
};

export default StartDownCard;

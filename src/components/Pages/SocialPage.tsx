import { SocialPost } from "../../types";
import { SinglePost } from "../ui/SinglePost";
const postsArray: SocialPost[] = [{
  title: "Hello World",
  content: "loream awdwa dawdwad waodpwadka opwadkwaopdkwa waopdkwaopdk dwakopdwakd"
}, {
  title: "Hello World",
  content: "loream awdwa dawdwad waodpwadka opwadkwaopdkwa waopdkwaopdk dwakopdwakd",
  image:"https://ssniper.sirv.com/Images/other%20projects/compressed-image%20(1).jpg"
}, {
  title: "Hello World",
  content: "loream awdwa dawdwad waodpwadka opwadkwaopdkwa waopdkwaopdk dwakopdwakd"
},]
export default function SocialPage() {

  return (
    <div className="mt-28 flex justify-center">
      <div className="flex flex-col">
        {postsArray.map((item,index) => (
          <div className="my-4" key={index}>
            <SinglePost content={item.content} title={item.title} image={item.image}/>
          </div>
        ))}
      </div>
    </div>
  )
}

import { SocialPost } from "../../types";
import { SinglePost } from "../ui/SinglePost";
const postsArray: SocialPost[] = [{
  title: "Hello World",
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}, {
  title: "Hello World",
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  image: "https://ssniper.sirv.com/Images/other%20projects/compressed-image%20(1).jpg",
  comments: [
    {
      userPFP: "https://ssniper.sirv.com/Images/my%20portfolio/pfp.jpg",
      content: "test",
      createdBy: "nour",
      CreatedAt: "3 hours ago"
    },
    {
      userPFP: "https://ssniper.sirv.com/Images/my%20portfolio/pfp.jpg",
      content: "Hello world",
      createdBy: "nour",
      CreatedAt: "3 hours ago"
    },
  ]
}, {
  title: "Hello World",
  content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
},]
export default function SocialPage() {

  return (
    <div className="dark:bg-gradient-to-t dark:from-cyan-900 dark:via-green-700 dark:to-teal-900 bg-gradient-to-tr from-stone-300 from-0% via-amber-100 to-emerald-100 relative">
      <div className="mt-28 flex justify-center ">
        <div className="flex flex-col">
          {postsArray.map((item, index) => (
            <div className="my-4" key={index}>
              <SinglePost content={item.content} title={item.title} image={item.image} comments={item.comments}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

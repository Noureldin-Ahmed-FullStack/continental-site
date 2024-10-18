import { useSocialPosts } from "../../hooks/FetchSocial";
// import { SocialPost } from "../../types";
import AddPost from "../addPost";
import { SinglePost } from "../ui/SinglePost";
// const postsArray: SocialPost[] = [{
//   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// }, {
//   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   image: "https://ssniper.sirv.com/Images/other%20projects/compressed-image%20(1).jpg",
//   comments: [
//     {
//       userPFP: "https://ssniper.sirv.com/Images/my%20portfolio/pfp.jpg",
//       content: "test",
//       createdBy: "nour",
//       CreatedAt: "3 hours ago"
//     },
//     {
//       userPFP: "https://ssniper.sirv.com/Images/my%20portfolio/pfp.jpg",
//       content: "Hello world",
//       createdBy: "nour",
//       CreatedAt: "3 hours ago"
//     },
//   ]
// }, {
//   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// },]
export default function SocialPage() {

  const { data } = useSocialPosts("10");
  return (
    <div className="dark:bg-gradient-to-t dark:from-cyan-900 dark:via-green-700 dark:to-teal-900 bg-gradient-to-tr from-stone-300 from-0% via-amber-100 to-emerald-100 relative grow">
      <div className="mt-28 flex justify-center ">
        <div className="flex flex-col maxWidth80vw">
          <AddPost />
          {data?.map((item, index) => (
            <div className="my-4" key={index}>
              <SinglePost content={item.content} image={item.image} comments={item.comments}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

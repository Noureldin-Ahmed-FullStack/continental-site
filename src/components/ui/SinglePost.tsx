import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { useState } from "react";
import { SocialPost } from "../../types";
import { Meteors } from "./meteors";
import FullScreenDialog from "./mui-modal";
import { Button } from "@mui/material";
import CommentsModal from './CommentsModal';

export function SinglePost(props: SocialPost) {
  const [open, setOpen] = useState(false);
  const [SelectedPost, setSelectedPost] = useState<SocialPost>({});
  function formatDateTime(timestamp: string | undefined) {
    if (!timestamp) {
      return
    }
    const date = new Date(timestamp);
    const now = new Date();

    const diffInMs = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);

    // If the time difference is less than a week, show relative time
    if (diffInWeeks < 1) {
      if (diffInMinutes < 1) return "just now";
      if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
      if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }

    // If it's more than a week old, return the date in the format "DD-MM-YYYY"
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [CommentOpen, setCommentOpen] = useState(false);

  const handleClickCommentOpen = (item: SocialPost) => {
    setSelectedPost(item)
    setCommentOpen(true);
  };

  const handleCommentClose = () => {
    setCommentOpen(false);
  };
  return (
    <div className="">
      <FullScreenDialog open={open} handleClose={handleClose} Images={props.Images} />
      <CommentsModal postData={SelectedPost} open={CommentOpen} handleClose={handleCommentClose} />
      <div className=" w-full relative maxWidth80vw">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl myLightPost dark:bg-gray-900 border border-gray-800 dark:text-gray-300 text-slate-700 pb-0 p-4 pt-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        
          <div className="flex justify-between mb-2 w-full">
            <div className='flex'>
              <img className="me-2 w-12 h-12 rounded-full" src={props.createdBy?.userPFP} alt="PFP" />
              <div>
                <a href="/" className="ProfileLink">{props.createdBy?.name.toLocaleUpperCase()}</a>
                <p>{props.createdBy?.role.toLocaleUpperCase()}</p>
              </div>
            </div>
            <div>
              <p>{formatDateTime(props.createdAt)}</p>
            </div>
          </div>
          <p className={"font-normal w-full text-base whitespace-pre-line text-slate-500 mb-4 relative z-10" + (props.content && /[\u0600-\u06FF]/.test(props.content) ? " text-end" : "")}>
            {/* I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this. */}
            {props.content}
          </p>

          {props.Images && <img onClick={handleClickOpen} className="w-full rounded-2xl cursor-pointer" src={props.Images[0]} />}
          {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button> */}
          {/* Meaty part - Meteor effect */}
          <div className="bg-slate-500 h-px mt-3 opacity-50 w-full"></div>
          <div className="text-center w-full">
            <Button onClick={() => handleClickCommentOpen(props)} startIcon={<ModeCommentOutlinedIcon />} variant="text">View Comments</Button>
          </div>
          <Meteors number={10} />
        </div>
      </div>
    </div>
  );
}

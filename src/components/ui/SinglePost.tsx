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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [CommentOpen, setCommentOpen] = useState(false);

  const handleClickCommentOpen = (item:SocialPost) => {
    setSelectedPost(item)
    setCommentOpen(true);
  };

  const handleCommentClose = () => {
    setCommentOpen(false);
  };
  return (
    <div className="">
      <FullScreenDialog open={open} handleClose={handleClose} image={props.image} />
      <CommentsModal postData={SelectedPost} open={CommentOpen} handleClose={handleCommentClose}/>
      <div className=" w-full relative maxWidth80vw">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl myLightPost dark:bg-gray-900 border border-gray-800 dark:text-gray-300 text-slate-700 p-4 pt-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div> */}
          <div className="flex mb-2">
            <img className="me-2 w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/ogw/AF2bZyhDBgxnnU2NAM5oZkt1Qqel8eybqspUwEzqHDwy8R2-rvs=s32-c-mo" alt="PFP" />
            <div>
              <a href="/" className="ProfileLink">Noureldin Ahmed</a>
              <p>Admin</p>
            </div>
          </div>
          <h1 className="font-bold text-xl text-slate-700 dark:text-gray-300 mb-4 relative z-10">
            {props.title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-10">
            {/* I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this. */}
            {props.content}
          </p>
          {props.image && <img onClick={handleClickOpen} className="w-full rounded-2xl cursor-pointer" src={props.image} />}
          {/* <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button> */}
          {/* Meaty part - Meteor effect */}
          <div className="bg-slate-500 h-px mt-3 opacity-50 w-full"></div>
          <div className="text-center w-full">
          <Button onClick={()=>handleClickCommentOpen(props)} startIcon={<ModeCommentOutlinedIcon />} variant="text">View Comments</Button>
          </div>
          <Meteors number={10} />
        </div>
      </div>
    </div>
  );
}

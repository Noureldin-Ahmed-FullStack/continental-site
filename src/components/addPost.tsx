import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Slide, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from '@mui/icons-material/Close';
import { Meteors } from "./ui/meteors";
import { Input } from "./ui/aceternityInput";
import FileUpload from "./ui/customFileUpload";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddPost() {
    const BaseURL = import.meta.env.VITE_BASE_URL;
    const { userData } = useUserContext()
    const [open, setOpen] = useState(false);
    // const [items, setItems] = useState([]);
    const [ContentState, setContentState] = useState("");
    const contenteRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (files: File[]) => {
        console.log('Selected files:', files);
    };
    const handleEntered = () => {

        if (contenteRef.current) {
            contenteRef.current.focus(); // Focus the TextField after the dialog has opened
        }
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContentState(e.target.value)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const addPost = () => {
        console.log({ content: ContentState });
        axios
            .post(`${BaseURL}/post`, {
                createdBy: userData?._id,
                Post: { content: ContentState }
            })
            .then((response) => {
                console.log(response);
                handleClose();
                setContentState("")
                if (contenteRef.current) {
                    contenteRef.current.value = '';
                }
                // FetchPosts()
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error(error.response.data.message.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                handleClose();
            });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addPost();
    };

    // const FetchPosts = () => {
    //     axios
    //         .post(`${BaseURL}/GetPosts`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setItems(response.data);
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //             toast.error(error.message, {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //             });
    //         });
    // }

    // const placeholderText = "ex: \n1- Make Breakfast\n2- Do dishes";
    return (
        <div>
            <Dialog
                TransitionProps={{ onEntered: handleEntered }} // Use TransitionProps here
                fullWidth
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    className: '!bg-slate-50 dark:!bg-slate-800 dark:!text-slate-50'
                }}
            >
                <DialogTitle className="text-center relative">
                    <p>Create post</p>
                    <IconButton
                        color="inherit"
                        className="!absolute top-3 right-4"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        component={"div"}
                        id="alert-dialog-slide-description"
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col pt-3">
                                <TextField
                                    id="Content-textarea"
                                    label="Post Content"
                                    placeholder={"What's on your mind?"}
                                    rows={4}
                                    className="w-full  custom-textfield"
                                    multiline
                                    onChange={handleContentChange}
                                    inputRef={contenteRef}
                                    InputProps={{
                                        className: 'dark:text-slate-50 dark:placeholder:text-gray-400 ', // Text color and placeholder color
                                        style: { whiteSpace: "pre-line", scrollbarWidth: 'thin' }, // Allow newline in placeholder
                                    }}
                                    InputLabelProps={{
                                        className: 'dark:!text-white', // Change label color here
                                    }}
                                />
                            </div>
                            <div className="mt-5">
                                <FileUpload onChange={handleFileChange} />
                            </div>
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className="w-full" variant="contained" onClick={addPost}>Post</Button>
                </DialogActions>
            </Dialog>
            <div className=" w-full relative maxWidth80vw">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
                <div className="relative shadow-xl myLightPost dark:bg-gray-900 border border-gray-800 dark:text-gray-300 text-slate-700 p-4 pt-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="flex w-full">
                        <img className="me-2 w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/ogw/AF2bZyhDBgxnnU2NAM5oZkt1Qqel8eybqspUwEzqHDwy8R2-rvs=s32-c-mo" alt="PFP" />
                        <div className="w-full">

                            <div className="mb-4 p-[2px] rounded-lg transition duration-300 group/input">
                                <Input onClick={handleClickOpen} readOnly value={ContentState} id="post" placeholder="What's on your mind?" type="text" className="shadow-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-500 h-px mt-3 opacity-50 w-full"></div>
                    <div className="text-center w-full">
                    </div>
                    <Meteors number={10} />
                </div>
            </div>
        </div>
    )
}
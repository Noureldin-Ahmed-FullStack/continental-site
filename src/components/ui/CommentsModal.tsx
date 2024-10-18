import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import { IconButton, Slide } from '@mui/material';
import { SocialPost } from '../../types';
import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
];
const handleChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const firstInputValue = (form.elements[0] as HTMLInputElement).value;
    console.log(firstInputValue);
};
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface props {
    open: boolean; // The state itself
    handleClose: () => void;
    postData: SocialPost
}
export default function CommentsModal(props: props) {
    const { handleClose, open, postData } = props
    console.log(postData);

    return (
        <React.Fragment>
            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                sx={{
                    '& .MuiDialog-paper': {
                        backgroundColor: 'rgba(25, 30, 39, 0.95)', // Change the background color
                        color: 'white', // Optional: Change text color for contrast
                    },
                }}
            >
                <DialogTitle sx={{ justifyContent: "space-between", display: 'flex' }}><p>Comments</p> <IconButton color='inherit' aria-label="close">
                    <CloseTwoToneIcon />
                </IconButton></DialogTitle>
                <DialogContent className='CommentScreen'>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                        }}
                    >
                        <p className={"my-3 text-start" + (postData.content && /[\u0600-\u06FF]/.test(postData.content) ? " text-end" : "")}>
                            {postData.content || ""}
                        </p>
                        {postData.image && <img src={postData.image} className="rounded-lg" alt={postData.content} />}
                        <div className='mt-3'>
                            {postData.comments?.map((item, index) => (
                                <div className='flex justify-start my-2' key={index}>
                                    <img className='h-10 w-10 rounded-full' src={item.userPFP} alt="pfp" />
                                    <div className='bg-zinc-700 opacity-70 w-full ms-5 rounded-lg px-3'>{item.content}</div>
                                </div>
                            ))}
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "start" }}>
                    <img className='h-10 w-10 rounded-full' src="https://ssniper.sirv.com/Images/my%20portfolio/pfp.jpg" alt="pfp" />
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import { Slide } from '@mui/material';
import { SocialPost } from '../../types';
import { PlaceholdersAndVanishInput } from './placeholders-and-vanish-input';

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
                <DialogTitle>Comments</DialogTitle>
                <DialogContent className='CommentScreen'>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <h3 className='font-bold'>{postData.title}</h3>
                        <p className='my-3'>{postData.content}</p>
                        <img src={postData.image} className="rounded-lg" alt={postData.title} />
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

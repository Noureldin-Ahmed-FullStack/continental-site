import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
// Define a type for the onChange prop
interface FileUploadProps {
  onChange?: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const handleRemove = (idxToRemove: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, idx) => idx !== idxToRemove));
  };
  const MakeThumbnail = (idxToMove: number) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      const [fileToMove] = newFiles.splice(idxToMove, 1); // Remove the item from its current position
      newFiles.unshift(fileToMove); // Move it to the beginning of the array
      return newFiles; // Update the state with the new array
    });
  };
  // Handle file changes and update state
  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    console.log(files);

    if (onChange) {
      onChange(newFiles);
    }
  };

  // Set up the dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileChange,
    multiple: true, // Set to true if you want to allow multiple files
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps({
          className: 'dropzone p-10 border border-dashed border-gray-400 rounded-lg cursor-pointer',
        })}
      >
        <input {...getInputProps()} type='file' capture="environment" accept="image/*" />
        {isDragActive ? (
          <p className="text-gray-600">Drop Images here...</p>
        ) : (
          <p className="text-gray-600">🖼 Drag & drop some Images here, or click to select Images</p>
        )}
      </div>

      <div className="mt-4">
        {files.length > 0 && (
          <ul className="list-disc !text-zinc-400">
            {files.map((file, idx) => (
              <li key={idx} className="">
                <div className='flex justify-between'>
                  <p>{file.name} - {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  <div>
                    <Tooltip followCursor placement='top' title="Make Thumbnail">
                    <IconButton
                      color="info"
                      onClick={() => MakeThumbnail(idx)}
                      aria-label="Thumbnail"
                    >
                      <ImageIcon />
                    </IconButton>
                    </Tooltip>
                   
                    <Tooltip followCursor placement='top' title="Remove">
                    <IconButton
                      color="error"
                      onClick={() => handleRemove(idx)}
                      aria-label="Delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

// Define a type for the onChange prop
interface FileUploadProps {
  onChange?: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  const [files, setFiles] = useState<File[]>([]);

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
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-gray-600">Drop Images here...</p>
        ) : (
          <p className="text-gray-600">🖼 Drag & drop some Images here, or click to select Images</p>
        )}
      </div>

      <div className="mt-4">
        {files.length > 0 && (
          <ul className="list-disc">
            {files.map((file, idx) => (
              <li key={idx} className="text-gray-700">
                {file.name} - {(file.size / (1024 * 1024)).toFixed(2)} MB
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FileUpload;

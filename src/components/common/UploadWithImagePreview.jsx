"use client";
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState, useEffect } from 'react';

const UploadWithImagePreview = ({ onImagesChange, initialImages = [] }) => {
    const [uploadedImages, setUploadedImages] = useState([]);

    // Initialize with provided images
    useEffect(() => {
        if (initialImages.length > 0) {
            setUploadedImages(initialImages);
        }
    }, [initialImages]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            src: URL.createObjectURL(file),
            file
        }));
        const updatedImages = [...uploadedImages, ...newImages];
        setUploadedImages(updatedImages);
        
        // Call parent callback with all images
        if (onImagesChange) {
            onImagesChange(updatedImages.map(img => img.file));
        }
        
        e.target.value = '';
    };

    const removeImage = (src) => {
        const updatedImages = uploadedImages.filter((image) => image.src !== src);
        setUploadedImages(updatedImages);
        
        // Revoke object URL to free memory
        URL.revokeObjectURL(src);
        
        // Call parent callback with remaining images
        if (onImagesChange) {
            onImagesChange(updatedImages.map(img => img.file));
        }
    };

    return (
        <div className="upload-image-wrapper d-flex align-items-center gap-3 flex-wrap">
            <div className="uploaded-imgs-container d-flex gap-3 flex-wrap">
                {uploadedImages.map((image, index) => (
                    <div
                        key={index}
                        className="position-relative h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50"
                    >
                        <button
                            type="button"
                            className="uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex"
                            onClick={() => removeImage(image.src)}
                        >
                            <Icon icon="radix-icons:cross-2" className="text-xl text-danger-600"></Icon>
                        </button>
                        <img
                            className="w-100 h-100 object-fit-cover"
                            src={image.src}
                            alt="Uploaded Preview"
                        />
                    </div>
                ))}
            </div>

            <label
                className="upload-file-multiple h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                htmlFor="upload-hotel-images"
            >
                <Icon icon="solar:camera-outline" className="text-xl text-secondary-light"></Icon>
                <span className="fw-semibold text-secondary-light">Upload</span>
                <input
                    id="upload-hotel-images"
                    type="file"
                    hidden
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default UploadWithImagePreview;


"use client";

import Modal from "../Modal";
import useEventsModal from "@/hooks/useEventsModal";
import InputField from "../InputField";

import { addEvent, editEvent } from "@/utils/database";
import { useState, useEffect } from "react";

const EventsModal = () => {
    const { onClose, isOpen, newEvent, currentEvent, updated } = useEventsModal();

    // Unique useState hooks for each input field
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");

    const [imageFileOne, setImageFileOne] = useState<File | undefined>(undefined);
    const [imageFileTwo, setImageFileTwo] = useState<File | undefined>(undefined);
    const [imageFileThree, setImageFileThree] = useState<File | undefined>(undefined);
    const [imageFileFour, setImageFileFour] = useState<File | undefined>(undefined);
    const [imageFileFive, setImageFileFive] = useState<File | undefined>(undefined);

    useEffect(() => {
        setTitle(currentEvent?.title || "");
        setContent(currentEvent?.content || "");
        setDate(currentEvent?.date || "");
        setLocation(currentEvent?.location || "");
    }, [updated]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImageFile: Function) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (newEvent
            && title && content && date && location && imageFileOne
        ) {
            addEvent(title, content, date, location, 
                imageFileOne, imageFileTwo, imageFileThree, imageFileFour, imageFileFive)
            onClose();
        } else if (!newEvent
            && title && content && date && location
        ) {
            if (currentEvent) {
                editEvent(currentEvent, title, content, date, location,
                    imageFileOne, imageFileTwo, imageFileThree, imageFileFour, imageFileFive
                )
            }
            onClose();
        }
    };

    return (
        <Modal title="Manage Event" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Title"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <InputField
                    label="Content"
                    placeholder="Content..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    multiline
                />
                <InputField
                    label="Date"
                    placeholder="Date..."
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <InputField
                    label="Location"
                    placeholder="Location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newEvent && "text-black/50"}`}>Image One</p>
                    <input
                        type="file"
                        onChange={(e) => handleImageChange(e, setImageFileOne)}
                        className="input-field text-gray-400"
                    />
                </div>
                <div className="w-full">
                    <p className={`${!newEvent && "text-black/50"}`}>Image Two</p>
                    <input
                        type="file"
                        onChange={(e) => handleImageChange(e, setImageFileTwo)}
                        className="input-field text-gray-400"
                    />
                </div>
                <div className="w-full">
                    <p className={`${!newEvent && "text-black/50"}`}>Image Three</p>
                    <input
                        type="file"
                        onChange={(e) => handleImageChange(e, setImageFileThree)}
                        className="input-field text-gray-400"
                    />
                </div>
                <div className="w-full">
                    <p className={`${!newEvent && "text-black/50"}`}>Image Four</p>
                    <input
                        type="file"
                        onChange={(e) => handleImageChange(e, setImageFileFour)}
                        className="input-field text-gray-400"
                    />
                </div>
                <div className="w-full">
                    <p className={`${!newEvent && "text-black/50"}`}>Image Five</p>
                    <input
                        type="file"
                        onChange={(e) => handleImageChange(e, setImageFileFive)}
                        className="input-field text-gray-400"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white font-bold w-full rounded-full"
                >
                    Submit
                </button>
            </form>
        </Modal>
    );
};

export default EventsModal;

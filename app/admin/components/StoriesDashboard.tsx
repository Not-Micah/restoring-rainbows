'use client';

import useStoriesModal from "@/hooks/useStoriesModal";
import { useData } from "@/providers/useData";
import { deleteStory } from "@/utils/database";

import DataLine from "./DataLine";

const StoriesDashboard = () => {
  const {
    onOpen,
    setCurrentStory,
    setNewStory,
    updated,
    setUpdated
  } = useStoriesModal();

  const {
    stories
  } = useData();

  return (
    <div className="flex flex-col justify-start items-center gap-y-6
    py-12 w-full max-w-max">
      <h3 className="text-5xl font-bold">Stories</h3>
      <div className="flex flex-col justify-start items-center gap-y-2 w-full">
        {stories?.map((story, index) => (
          <DataLine
          key={index}
          onClick={() => {
            setNewStory(false);
            setCurrentStory(story);
            setUpdated(!updated);
            onOpen(); 
          }} 
          onClickDelete={() => {
            deleteStory(story);
          }}
          display={story.title}/>
        ))}
      </div>
      <button 
      className="bg-primary px-4 py-2 rounded-full text-white"
      onClick={() => {
        setNewStory(true);
        setCurrentStory(null);
        setUpdated(!updated);
        onOpen();
      }}>
        Create Event
      </button>
    </div>  
  )
}

export default StoriesDashboard;
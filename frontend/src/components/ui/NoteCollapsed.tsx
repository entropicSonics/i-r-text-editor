import React from "react";

interface Props {
  // Define the props for your component here
  title: string;
  activity: string;
  content: string;
}

const NoteCollapsed: React.FC<Props> = ({ title, activity, content }) => {
  return (
    <div className="note-collapsed w-80 py-4 px-4 border-2  border-slate-100 rounded-xl mb-4">
      {/* Render your component UI here */}
      <h1 className="text-base font-medium mb-2">{title}</h1>
      <p className="text-xs mb-4 text-slate-500">{activity}</p>
      <div className="color-code w-14 h-2 mb-2 bg-red-500 rounded-full"></div>
      <div className="">{content}</div>
    </div>
  );
};

export default NoteCollapsed;

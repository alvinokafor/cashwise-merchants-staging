import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue) {
        addTag(inputValue.trim());
        setInputValue('');
      }
  };

  const addTag = (tag: string) => {
    if (tags.length < 10 && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag: string) => {
      setTags(tags.filter((t: string) => t !== tag));
  };

  return (
    <div className="flex flex-wrap gap-2 items-center w-full">
      {tags.map((tag, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center"
          onClick={() => removeTag(tag)}
        >
          {tag}
          <FaTimes className="ml-1" />
        </button>
      ))}
      <input
        type="text"
        placeholder="Add tag to describe your items ..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="flex-grow px-2  border-2 p-2 items-center justify-between border-gray-200  rounded-lg focus:border-blue-300 outline-none transition-colors duration-200 cursor-pointer"
      />
    </div>
  );
};

export default TagInput;

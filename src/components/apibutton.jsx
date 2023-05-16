import React, { Component, useState, useEffect } from 'react';

const ApiButton = ({onPost}) => {
    return (
        <div className="button-api">
          <div class="mt-4">
            <button 
            onClick={onPost}
            class="
            text-blue-500 
            hover:text-white 
            hover:bg-blue-500 
            border border-blue-500 
            text-xs 
            font-bold 
            rounded-full 
            px-4 py-1 
            leading-normal"
            >
                Click me!
            </button>
            </div>
        </div>
    );
}
export default ApiButton;
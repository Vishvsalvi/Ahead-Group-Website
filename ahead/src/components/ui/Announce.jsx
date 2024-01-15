import React, {useState} from 'react'


export default function Announce({title, date, desc}) {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(true);
  };

  const handleShowLessClick = () => {
    setShowFullText(false);
  };

  return (
    <div className='shadow-sm bg-white'>
      <article className="overflow-hidden rounded-lg">
        <div className="shadow-sm p-4 sm:p-6">
          <time
            dateTime="2022-10-10"
            className="block text-xs text-gray-500"
          >
            Published On: {date}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">
              {title}
            </h3>
          </a>

          <p className="mt-2 text-sm/relaxed text-gray-500">
  {showFullText ? desc : `${desc.split(' ').slice(0, 90).join(' ')}... `}
  {!showFullText && (
    <a href="#" className='text-blue-600' onClick={handleReadMoreClick}>
      Read more
    </a>
  )}
  
  {showFullText && (
    <span>
      <br />
      <a href="#" className='text-blue-600' onClick={handleShowLessClick}>
        Show less
      </a>
    </span>
  )}
</p>

        </div>
      </article>
    </div>
  )
}

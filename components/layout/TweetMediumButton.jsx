import React from 'react'

const TweetMediumButton = ({ action }) => {
  const onClickHandler = () => {
    console.log("Button tweet MEDIUM pressed");
  }
  return (
    <button className='w-[3em] xl:w-[14em] rounded-[2em] text-[1em] bg-blue hover:bg-blueContrast py-[14px] px-4 font-medium' onClick={() => onClickHandler()}>
      Tweet
    </button>
  )
}

export default TweetMediumButton
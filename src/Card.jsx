import React, { useEffect } from 'react';
import { useSound } from 'use-sound';
import Confetti from 'react-confetti';

import birthdaySound from './birthday.mp3';
import personImage from './likkz2.jpg';
import leftImage1 from './likzz1.jpg';
import leftImage2 from './likkz3.png';

const BirthdayCard = () => {
  const [play, { stop }] = useSound(birthdaySound, { volume: 0.5 });

  useEffect(() => {
    // Start playing the sound when the component mounts
    play();

    // Clean up the sound when the component unmounts
    return () => {
      stop();
    };
  }, [play, stop]);

  return (
    <div>
      <div className="confetti">
        {/* Adjust confetti settings as needed */}
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
      <div className="birthdayCard">
      <div className="tiltedPersonImage">
          <img src={personImage} alt="Person" />
        </div>
        <div className="cardFront">
        <div className="tiltedPersonImage1">
            <img src={leftImage1} alt="Person" />
          </div>
          <h3 className="happy">HAPPY BIRTHDAY Kaju!</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY Likkz!  🎉</h3>
          <p>Dear  Gubbe,</p>
          <p>
            On your special day, I wish you endless joy, laughter, and all the delightful moments that make your heart dance. May your journey ahead be filled with success, love, and the fulfillment of every dream you hold close to your heart. May you be surrounded by those who cherish you as much as you deserve, and may each day bring you closer to the wonderful person you are destined to become. Here's to a year filled with love, growth, and maybe even a smart dustbin that perfectly complements your charming personality! 🎂✨
          </p>
          <p className="name">Thank You!!!</p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;

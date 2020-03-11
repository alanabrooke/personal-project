import React, {Component} from 'react';
import '../About/About.css'
import {Link} from 'react-router-dom';

export default class About extends Component {

    render() {
        return (
            <div>
                <h1 className='about'>Astrology and What It Means</h1>
                {/* <img src=''/> */}
                <h2 className='moreAbout'> Sun, moon, and rising signs. What's the difference?</h2>
                <h3 className='sub'>Sun Sign</h3>
                <h4 className='p'>
                Your sun sign is what most people mean when they ask, "what's your sign?" It's the most well known of all the zodiac signs in a person's birth chart, and is calculated by figuring out in what zodiac sign, exactly, the sun was situated in when someone was born. As astrologer Susan Miller's Astrology Zone pointed out, it's said that people take on certain personality traits based on the zodiac sign the sun was in when they were born.
                </h4>
                <br/>
                <h3 className='sub'>Moon Sign</h3>
                <h4 className='p'>
                Your moon sign, on the other hand, is the darker, more emotional side of your personality. Think about it this way: If the sun shines brightly for all the world to see — our ego, how it relates to the challenges we face in the world, and how we interact with others — moonlight is dim, and casts shadows on the deeper parts of yourself that not everyone in the world gets to see. This is the you that you hear inside your head whenever you think; your heart, your emotions, your feelings.

"The moon is our emotions — often our sentiments that we cannot and do not express with others," Stardust explains. Often times, she continues, this means that people will identify with their moon sign more than their sun sign or their rising/ascendent sign, even though large aspects of the personality they present to the world will seem to be molded after the latter two signs.

"I would say that the moon carries more weight because it’s our emotional reaction and we feel it more," Stardust says.
                </h4>
                <h3 className='sub'>Rising/Ascendant Sign</h3>
                <h4 className='p'>
                We talk a lot about sun signs and, though less frequently, moon signs — but not so much the rising signs. This should change, though. Your rising sign, also known as your ascendant sign, is the "you" that you consciously present to the world — the filter through which you put yourself every day, the style you adopt, the friends you identify with, and so on. Though that may not seem necessarily as important as sun and moon, what you're willing to reveal says a lot about you, and is thus just as important as your moon and sun signs.
                </h4>
                
                <div className='backBtn2'>
                <Link to='/selection'><button>Back to Selection</button></Link>
                </div>
            </div>
        )
    }

}
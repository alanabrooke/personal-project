import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Selection.css';

//signs
import Aries from '../Signs/Aries';
import Taurus from '../Signs/Taurus';
import Gemini from '../Signs/Gemini';
import Cancer from '../Signs/Cancer';
import Leo from '../Signs/Leo';
import Virgo from '../Signs/Virgo';
import Libra from '../Signs/Libra';
import Scorpio from '../Signs/Scorpio';
import Sagittarius from '../Signs/Sagittarius';
import Capricorn from '../Signs/Capricorn';
import Aquarius from '../Signs/Aquarius';
import Pisces from '../Signs/Pisces';



export default class Selection extends Component {

    render() {
        return(
            <div>
                <h1>
                    Choose your sign!
                    (Don't forget to check your sun, moon, and rising!)
                </h1>
                <div id='allButtons'>
                <Link to='/selection/aries'><button>Aries</button></Link>
                <Link to='/selection/taurus'><button>Taurus</button></Link>
                <Link to='/selection/gemini'><button>Gemini</button></Link>
                <Link to='/selection/cancer'><button>Cancer</button></Link>
                <Link to='/selection/leo'><button>Leo</button></Link>
                <Link to='/selection/virgo'><button>Virgo</button></Link>
                <Link to='/selection/libra'><button>Libra</button></Link>
                <Link to='/selection/scorpio'><button>Scorpio</button></Link>
                <Link to='/selection/sagittarius'><button>Sagittarius</button></Link>
                <Link to='/selection/capricorn'><button>Capricorn</button></Link>
                <Link to='/selection/aquarius'><button>Aquarius</button></Link>
                <Link to='/selection/pisces'><button>Pisces</button></Link>
                </div>
            </div>
        
        
        )
    }
}

export { Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces }

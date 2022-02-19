import React,{useState} from 'react'
import './Technologies.css'
import t from '../../constants/technologies';
import TechnologyHeaderCard from './TechnologyHeaderCard';
import TechnologyBox from './TechnologyBox';
function Technologies({theme}) {
    const sections = ["Design", "DevOps", "Database", "Font End", "Back End", "Mobile", "CMS"];
    const technologies = [
        [t[3], t[8], t[0], t[21], t[11], t[27],],
        [t[32], t[26], t[22],], 
        [t[20], t[28], t[25], t[13], t[18], t[10],],
        [t[9], t[31], t[6], t[5], t[24],],
        [t[14], t[12], t[23], t[17], t[22]],
        [t[3], t[7], t[0], t[21], t[11], t[27],],
        [t[4],  t[8], t[19]],
    ];
    const [activeIndex,setActiveIndex] = useState(0);
    const setActiveIndexFunction = (index)=>{
        setActiveIndex(index)
    }
  return (
    <div className='technologies-body' style={{ backgroundColor: !theme ? "white" : "#121212", color: theme ? "white" : "#121212" }}> 
        <div className='technologies-title-container'>
            <h1 className = "technologies-title">Technologies we work with</h1>
        </div>
        <div className='technology-body-container'>
            <div className='technology-header-bar'>
                {
                    sections.map((section,i)=>{
                        return <TechnologyHeaderCard activeIndex = {activeIndex} index ={i} title ={section} setActiveIndexFunction={setActiveIndexFunction} />
                    })
                }
            </div>
            <div className='technology-data-bar'>
                <TechnologyBox technologies={technologies[activeIndex]}/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
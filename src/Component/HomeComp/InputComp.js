import React,{useState} from 'react'


const InputComp = ({cancel}) => {
  
  // const cancelHandler=()=>{
  //   setcondition(false);
  // }
  return (
    <div className='outer-div'> <div className="inputdiv">
    <div className="search"><i class="fa fa-search" aria-hidden="true"></i></div>
    <div className='inputt'><input type="text" className="inputtag" placeholder="Search Google Store"/></div>
    <div className="cancel" onClick={cancel}><i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default InputComp
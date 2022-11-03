import React, { useState } from 'react'

const state=['Odisha', 'Karnatak', 'Maharastra']
const city={
  'Odisha':['Bhubaneswar', 'Cuttack', 'Puri', 'Rourkela', 'Sambalpur', 'Khordha'],
  'Karnatak':['Whitefiled', 'Marathali', 'Electronic City'],
  'Maharastra':['Pune', 'Mumbai', 'Chakan', 'Chinchiwadi', 'Mahabaleswar']
}



const CascadingDropdown = () => {
  const[selectState, setSelectState] = useState('');



  console.log(selectState)

  return (
    <div>
      <h3>
      Cascading Dropdown: &nbsp;
      <select onChange={(e) => {setSelectState(e.target.value)}}>
        {
          state.map((states, i)=>{
            return(
              <option value={states} key={i}>{states}</option>
            )
          })
        }
      </select>
        { selectState && <select>
          {
              city[selectState]  .map((citys,i)=>{
                return(
                  <option key={i}>{citys}</option>
                )
              })  
          }
          </select>
        }
      </h3>
    </div>
  )
}

export default CascadingDropdown
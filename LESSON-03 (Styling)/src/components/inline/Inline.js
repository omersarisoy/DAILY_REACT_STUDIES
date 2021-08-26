// const myStyles = {
//   par : {
//     color:"blue",
//     fontSize:"1.2rem",
//     fontWeight:"bolder"
//   },

//   secondDiv : {
//     backgroundColor:"#b0b0b0"
//   }
// }

import { myStyles } from "./styles"

function Inline() {
  return (
  <>
  {/* <h3 className="error" >Something went wrong</h3>
  <h3 className={styles.success}>200 Ok Success</h3> */}

    <div style={{backgroundColor:"red" , color:"white"}}>
      <h1>Hello My Name is Ömer</h1>
      <div style={myStyles.secondDiv}>
        <p style={myStyles.par}>Inline styling in React component</p>
      </div>
      
    </div>
    </>
  )
}


export default Inline 
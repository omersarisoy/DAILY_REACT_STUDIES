import React, {memo} from "react";
import cw from "../assets/cw_logo.png";

const Header = ({img}) => {
  console.log("Rendering: Header Comp!");

  // Header'a geçtiğimiz props'u App.js de çağırdığımızda , memo kullansak bile Haeder rerender oluyor. Yani memo kaynaklı olan değişiklikleri render ederken; kendinden kaynaklı olmayan değişiklikleri render etmiyor.

  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="CW_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};
export default memo(Header); // 3. Kullanım


// const Header = ({img}) => {
//   console.log("Rendering: Header Comp!");

//   // App.js de counter her arttığında sayfa rerender olduğu için props olarak geçtiğimiz Header de render oluyor. Bunun önüne geçmek için React.memo() kullandık.

//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// };
// export default React.memo(Header); // 2.Kullanım



// // {1.Kullanım}
// const Header = React.memo(({img}) => {  
//   console.log("Rendering: Header Comp!");

//   // App.js de counter her arttığında sayfa rerender olduğu için props olarak geçtiğimiz Header de render oluyor. Bunun önüne geçmek için React.memo() kullandık.

//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="CW_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });
// export default Header;
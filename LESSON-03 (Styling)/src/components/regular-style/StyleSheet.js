import './styleSheet.css'

const StyleSheet = ({primary}) => {

  const isPrimary = primary ? "primary" : "secondary";
  return (
    <div>
      <img
        className="logo"
        src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
      <h1 className="header">Welcome to Clarusway</h1>
      <p className={isPrimary}>Change your skillset, change your future!</p>
    </div>
  );
};

export default StyleSheet;

import Articles from "./components/Articles";
import Button from "./Button"
const App = () => {
  // function handleClick(e) {
  //   e.stopPropagation();
  //   e.preventDefault()
  //   console.log("button", e);
  // }
  function handleClick(e) {

    console.log("click ! : ", e);
  }

  // function handleClickDiv(e) {
  //   console.log("clickDiv", e);
  // }

  // function handlleInput(e) {
    // console.log("Input", e);
  // }

  // function handleFocus(e) {
  //   console.log("focus", e);
  // }

  return (
    // <div
    //   onClick={handleClickDiv}
    //   className="d-flex flex-column justify-center align-center p-20"
    // >
    <div
      className="d-flex flex-column justify-center align-center p-20"
    >
      <Articles displayArticle={true} />
      {/* <form>
        <button onClick={handleClick} className="mb-20">
          Submit
        </button>
      </form> */}

        {/* <button onClick={(e) => handleClick(e, "button")} className="mb-20">
          Submit
        </button> */}

       <Button onClick={handleClick}/>
  
      {/* <input type="text" onInput={handlleInput} onFocus={handleFocus} /> */}
    </div>
  );
};

export default App;

import Increment from "./Increment";


const Home =()=>{

    function Handle () {
        alert(`btn clicked`)
    }
    return(
        <>
        
        <p className="bg-red-500">Hi...this is para tag</p>
       <button className="bg-blue-50 border border-blue-500 px-4 py-2" onClick={Handle}>
  click
</button>

<Increment/>
        
        </>
    )
}

export default Home;

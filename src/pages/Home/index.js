import React,{useEffect} from 'react'

function Home() {
  useEffect(() => {
    document.title = "Home";
}, []);
  return (
    <div>
      home
    </div>
  )
}

export default Home;

import Card from './Card';
import './App.css';
// import av from './pic/hashim.jpeg';
import db from './Firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react'

function App() {

  const [post, setpost] = useState([])
  const datacollection =collection(db, "post")

  useEffect(() => {
    const output = async () => {
      const postdata = await getDocs(datacollection);
      setpost(postdata.docs.map(d=>({...d.data(),id:d.id})))
      console.log(post)
      // console.log(postdata);
    };
    output()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-image"
          src='http://angelapalumbo.com.au/wp-content/uploads/2016/11/Instagram_logo_black.png'
          alt="intagram-logo" />

        <input type="text" value="serch" placeholder='serach' />
      </header>
      <div className="post">
      {
        post.map(e => (
          <Card key={e.id}  avatar={e.avatar} userName={e.userName} image={e.image} />
        ))
      }
      </div>
      
      {/* <Card avatar={av} userName="hashim" image="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png" /> */}

    </div>
  );
}

export default App;

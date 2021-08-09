import React from 'react'
import Audios from './Audios2'
import '../../App.css'
import {Jumbotron } from 'react-bootstrap'

function Listen() {
    var a, b, c, d
    
    const audios = [
        {
          Key: a,
          Link: <iframe id="myiframe" src="https://open.spotify.com/embed-podcast/episode/7kyu4VEI7SOR3g5VEFCZN1" title="test1" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        },
        {
          Key: b,
          Link: <iframe id="myiframe" src="https://open.spotify.com/embed-podcast/episode/6mwCbcAdIy9AFXll9ZAJZZ" title="test2" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        },
        {
          Key: c,
          Link: <iframe id="myiframe" src="https://open.spotify.com/embed-podcast/episode/3s8r3jjOVo7E02imHl9jm1" title="test3" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        },
        {
          Key: d,
          Link: <iframe id="myiframe" src="https://open.spotify.com/embed-podcast/episode/2ya6EipipdgSSH5vfClLqW" title="test4" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        }
    ]
  const audiosList = audios.map(audio => <Audios key={audios.Key} audio={audio}/>)
    return (
        <div> 

            <Jumbotron>
              <h1>Welcome to our Podcast Page</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
               </p>
            </Jumbotron>

          {audiosList} 
        </div>
    )
}
export default Listen; 
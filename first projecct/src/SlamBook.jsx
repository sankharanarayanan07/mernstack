import { Component } from "react";
import "./App.css"
class SlamBook extends Component {
    render() {
        return (
            <>
            <h1 className="header" >SLAM BOOK</h1>
            <div className="content">
                <h2>Fill the information</h2>

                <label>Name : </label>
                <input type="text" placeholder="Enter your name" className="text"/>
                <br />

                <label>Nickname : </label>
                <input type="text" placeholder="Enter your nick name" className="text"/>
                <br />

                <label>Date of Birth :  </label>
                <input type="date" className="text"/>
                <br />

                <label>Instagram i'd :  </label>
                <input type="text" placeholder="Enter your instagram i'd"className="text"/>
                <br />

                <label>Favorite Actor :  </label>
                <input type="checkbox" className="text"/>
                <label>Paul waker</label>
                <input type="checkbox" className="text"/>
                <label>Tom cruse</label>
                <input type="checkbox" className="text"/>
                <label>Johnny depp</label>
                <br />

                <label >Favorite Food : </label>
                <select placeholder="Select your favorite food" className="text">
                    <option >Select your favorite food</option>
                    <option >Dosa</option>
                    <option >Biryani</option>
                    <option >Pizza</option>
                    <option >Burger</option>
                </select>
                <br />

                <label >Best Memories : </label>
                <textarea rows="5" cols="80" placeholder="Share your memories with me" className="big"></textarea>
                <br />

                <label>About me : </label>
                <textarea rows="5" cols="80" placeholder="Tell about me"className="big"></textarea>
                <br />

                <label>Share Photo :  </label>
                <input type="file" className="text"/>
                <br />

                <button type="submit" className="button">Submit</button>

            </div>
            </>
          )
        }
}
export default SlamBook


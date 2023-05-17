import { useState, useEffect } from "react"
import './App.css'

export function Memes() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })
    const [allMemes, setAllMemes] = useState([])
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')

    const handleTopTextChange = (event) => {
        setTopText(event.target.value);
    };

    const handleBottomTextChange = (event) => {
        setBottomText(event.target.value);
    };


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes));
    }, []);

    function getRandomImage() {
        const memeImg = allMemes[Math.floor(Math.random() * allMemes.length)];
        let url = memeImg.url;

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }


    return (
        <div className="meme-box">
            <h1>React Meme Factory</h1>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form-button" onClick={getRandomImage}>
                    New Image Randomly
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme" />
                <h2 className="meme-text-top">{meme.topText}</h2>
                <h2 className="meme-text-bottom">{meme.bottomText}</h2>
            </div>
            <input type="file"></input>
        </div>
    )
}
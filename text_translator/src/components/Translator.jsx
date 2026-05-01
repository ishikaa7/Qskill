//translator.jsx
import { useState } from "react"
import axios from "axios"
import {LoaderCircle} from "lucide-react"

function TextTranslator()
  
{
  const [textInput , setTextInput] = useState("")
  const [ selectvalue , setSelectValue] = useState("")
  const [result , setResult] = useState("")
  const [loading , setLoading] = useState(false)

  console.log(textInput)
  console.log(selectvalue)

  const handleTranslate = async () => {
    setLoading(true)
    try {
      
      const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': 'ef030ce349msh6f429988d2296fdp195f54jsnad267dd8b485',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: textInput,
    source: 'en',
    target: selectvalue,
    format: 'text'
  }
};
      const response = await axios.request(options);
      setLoading(false)
      
      const translated = response?.data?.data?.translations?.[0]?.translatedText;
      console.log("API Response:", response.data);
      if (translated) {
        setResult(translated);
      } else {
        setResult("No translation returned. Please check the target language.");
      }

    } catch (error) {
      setLoading(false)
      console.error("API Error:", error.response ? error.response.data : error.message);
      setResult("Error: " + (error?.response?.data?.message || error?.message || "Check the console for details."));
    }

    
  }
  return(
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-y-5 text-3xl text-zinc-700 font-bold">
        <h1>Text Translator</h1>

        <div className="flex items-center justify-center flex-col gap-y-5">
          <textarea name = "input-text" className= "bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2 " onChange={(e) => setTextInput(e.target.value)} />
          <textarea name = "input-text" className= "bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2" value={result} readOnly/>
        </div>
        <div>
          <label htmlFor="options">Converted Into: </label> 
          <select name="value" className="bg-white px-2 py-1 rounded-lg border border-slate-700 outline-none cursor-pointer" onChange={(e) => setSelectValue(e.target.value)}>
            <option value="">select</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
            <option value="mr">Marathi</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
            <option value="pa">Punjabi</option>
            <option value="bn">Bengali</option>
            <option value="gu">Gujarati</option>
            <option value="ur">Urdu</option>
            <option value="or">Odia</option>
            <option value="as">Assamese</option>
            <option value="ks">Kashmiri</option>
            <option value="ne">Nepali</option>
            <option value="sa">Sanskrit</option>
            <option value="kok">Konkani</option>
            <option value="mai">Manipuri</option>
            <option value="bo">Bodo</option>
            <option value="do">Dogri</option>
            <option value="mai">Maithili</option>
            <option value="sd">Sindhi</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="sr">Serbian</option>
            <option value="sk">Slovak</option>
            <option value="sl">Slovene</option>
            <option value="so">Somali</option>
            <option value="es">Spanish</option>
            <option value="sw">Swahili</option>
            <option value="sv">Swedish</option>
            <option value="tl">Tagalog</option>
            <option value="th">Thai</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukrainian</option>
            <option value="vi">Vietnamese</option>
            <option value="cy">Welsh</option>
            <option value="yi">Yiddish</option>
            <option value="zu">Zulu</option>
          </select>
        </div>
        <button className="bg-slate-700 text-white py-2 rounded-lg mx-auto w-[500px] cursor-pointer flex items-center justify-center" onClick={handleTranslate}>{loading ? (<LoaderCircle className="animate-spin"/>) : "Translate"}</button>
      </div>
    </div>
  )
}
export default TextTranslator
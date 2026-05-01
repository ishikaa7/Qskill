//stringgenerator
import { useState, useCallback, useEffect } from 'react';

const StringGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedString, setGeneratedString] = useState("");

  const generateString = useCallback(() => {
    let str = "";
    let charBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) charBank += "0123456789";
    if (includeSymbols) charBank += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * charBank.length);
      str += charBank.charAt(charIndex);
    }

    setGeneratedString(str);
  }, [length, includeNumbers, includeSymbols]); 
  
  useEffect(() => {
    generateString();
  }, [length, includeNumbers, includeSymbols, generateString]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">String Generator</h2>
      
      {/* Display Area */}
      <div className="w-full bg-gray-100 p-3 rounded-lg mb-4 flex justify-between items-center border border-gray-300">
        <input 
          type="text" 
          value={generatedString} 
          readOnly 
          className="bg-transparent outline-none font-mono text-lg w-full text-gray-800"
        />
      </div>

      {/* Controls */}
      <div className="w-full space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1 text-gray-600">Length: {length}</label>
          <input 
            type="range" min={6} max={40} value={length} 
            onChange={(e) => setLength(e.target.value)}
            className="w-full cursor-pointer accent-blue-600"
          />
        </div>

        <div className="flex gap-4 justify-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(prev => !prev)} className="accent-blue-600" />
            <span className="text-gray-700">Numbers</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(prev => !prev)} className="accent-blue-600" />
            <span className="text-gray-700">Symbols</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default StringGenerator;
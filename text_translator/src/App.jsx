import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TextTranslator from './components/Translator.jsx';
import StringGenerator from './components/StringGenerator.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* --- Navigation Bar --- */}
        <nav className="bg-blue-600 text-white shadow-md p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight">Internship Slab 1</h1>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-blue-200 transition-colors font-medium">
                Translator
              </Link>
              <Link to="/generator" className="hover:text-blue-200 transition-colors font-medium">
                String Generator
              </Link>
            </div>
          </div>
        </nav>

        {/* --- Main Content Area --- */}
        <main className="max-w-4xl mx-auto mt-10 p-4">
          <Routes>
            {/* Task 1: Translator is the default page */}
            <Route path="/" element={<TextTranslator />} />
            
            {/* Task 2: String Generator */}
            <Route path="/generator" element={<StringGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
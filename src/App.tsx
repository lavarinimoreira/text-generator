import './App.css';
import Description from './components/Description';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Text from './components/Text';
import { useState } from 'react';
import { BiCopy } from 'react-icons/bi'
import data from './data/data'

function App() {

  const initialButtonText: string = 'Copy'
  const [numbersOfParagraphs, setNumbersOfParagraphs] = useState<string>('');
  const [text, setText] = useState<string[]>([]);
  const [buttonText, setButtonText] = useState<string>(initialButtonText);

  const handleClick = () => {
    setButtonText('Copied!')
    let txt = text.toString();
    let newTxt = txt.replace(/\.\,/g, ".");
    navigator.clipboard.writeText(newTxt);

    setTimeout(() => {
      setButtonText(initialButtonText);
    }, 1000);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let amount: number = parseInt(numbersOfParagraphs);

    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  }

  return (
    <main className='main '>
      <Header />
      <section className='hf'>
        
        <Form handleSubmit={handleSubmit} numbersOfParagraphs={numbersOfParagraphs} setNumbersOfParagraphs={setNumbersOfParagraphs} />
      </section>
      {text.length > 0 ? (<><button className='card' onClick={handleClick}><BiCopy /> {buttonText}</button> <div className='txt__background'>
        {text.map(
          (p, index) => (
            <Text txt={p} key={index} />
          )
        )}
      </div ></>) : null}
      <Footer />
      <Description />
    </main>
  );
}

export default App;

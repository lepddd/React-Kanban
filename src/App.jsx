import { globalCss } from "@stitches/react";
import { Header } from "./Components/Header/Header";
import { Container } from "./Components/Container/Container";

//Reset global styles
const globalStyles = globalCss({
  "@import": [    
    "url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap')",
  ],
  "*": { margin: 0, padding: 0, fontFamily: "Ubuntu", boxSizing: "border-box" },
});

const App = function App() {
  globalStyles();

  return (
    <>
      <Header />
      <Container />
    </>
  );
};

export default App;

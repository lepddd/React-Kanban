import { globalStyles, styled } from "./stitches.config";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { ColumnTitle } from "./components/ColumnTitle";
import { Column } from "./components/Column";
import { Header } from "./components/Header";

//Stitches
const Container = styled("div", {
  display: "flex",
  flexWrap:'wrap',
  justifyContent: "center",
  padding: "20px 40px",
  gap: "20px",
});

function App() {
  globalStyles();

  const titles = [
    "IDEAS / TASKS",
    "IN PROGRESS",
    "READY FOR REVIEW",
    "APPROVED",
  ];

  return (
    <>
      <Header />
      <Container>
        {titles.map(title => (
          <Column title={title} key={title}/>
        ))}
      </Container>
    </>
  );
}

export default App;

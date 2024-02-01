import Box from './components/Box.jsx';
import './styles/App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <Box cls="header" heading="Header" color="red"/>
      <div className="main-wrapper">
        <Box cls="sidebar" heading="Sidebar" color="purple"/>
        <div className="content-wrapper">
          <Box cls="content1" heading="Content 1" color="green" />
          <div className="content-divider">
            <Box cls="content2" heading="Content 2" color="yellow" />
            <Box cls="content3" heading="Content 3" color="yellow" />
          </div>
        </div>
      </div>
      <Box cls="footer" heading="Footer" color="red" />
    </div>
  );
}
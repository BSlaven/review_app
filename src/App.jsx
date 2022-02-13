import classes from './App.module.css'
import Card from './components/Card/Card';

function App() {

  return (
    <div className={classes.app}>
      <h3 className={classes.heading}>What our users say about us</h3>
      <Card />
    </div>
  )
}

export default App
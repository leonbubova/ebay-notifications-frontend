import { Route, Switch } from 'react-router-dom'

import Landingpage from './Components/Landingpage/Landingpage'
import { ScrollToTop } from './Components/ScrollToTop'

function App() {
    return (
        <div className="app">
            <Switch>
                <ScrollToTop>
                    <Route path="/" component={Landingpage} exact />
                </ScrollToTop>
            </Switch>
        </div>
    )
}

export default App

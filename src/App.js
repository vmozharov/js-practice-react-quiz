import React from 'react'
import Switch from "react-router-dom/Switch"
import Route from "react-router-dom/Route"
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import QuizList from './containers/QuizList/QuizList'

export default () => (
    <Layout>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/quiz-creator" component={QuizCreator}/>
          <Route path="/quiz/:id" component={Quiz}/>
          <Route path="/" component={QuizList}/>
        </Switch>
    </Layout>
)
